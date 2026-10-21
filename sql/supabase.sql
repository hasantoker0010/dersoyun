-- Dersoyun: hesap ve bulut ilerleme tablosu.
-- Supabase panelinde SQL Editor > New query'ye yapıştırıp Run'a bas. Tekrar çalıştırılabilir.
--
-- Bunu çalıştırdıktan sonra Supabase panelinde bir kez şunları ayarla (Authentication bölümü):
--   1) URL Configuration > Site URL: sitenin gerçek adresi (örn. https://hasantoker0010.github.io/dersoyun/).
--      Boş bırakırsan onay ve şifre sıfırlama e-postalarındaki bağlantı localhost'a gider.
--   2) URL Configuration > Redirect URLs: aynı adresi ekle.
--   3) Sign In / Providers > Email: "Confirm email" açıksa kayıt olan kişi e-postadaki bağlantıya dokunmadan giriş yapamaz.
--      Yalnızca sen kullanacaksan kapatabilirsin; açık bırakmak sahte e-postayla hesap açılmasını engeller.
--
-- Her kullanıcının ilerlemesi (XP, seviye, yanlışlar, rekorlar...) tek satırda JSON olarak durur.
-- Satır güvenliği (RLS) açıktır: giriş yapan kullanıcı yalnızca kendi satırını okuyup yazabilir,
-- anonim (giriş yapmamış) istekler tabloya hiç erişemez.

create table if not exists public.ilerleme (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  veri       jsonb not null default '{}'::jsonb,
  guncelleme timestamptz not null default now(),
  -- kötüye kullanıma karşı üst sınır: normal bir ilerleme birkaç yüz KB'ı geçmez
  constraint ilerleme_veri_boyut check (octet_length(veri::text) <= 1000000)
);

alter table public.ilerleme enable row level security;

drop policy if exists "ilerleme okuma"  on public.ilerleme;
drop policy if exists "ilerleme ekleme" on public.ilerleme;
drop policy if exists "ilerleme guncelleme" on public.ilerleme;
drop policy if exists "ilerleme silme"  on public.ilerleme;

create policy "ilerleme okuma"  on public.ilerleme for select to authenticated
  using ((select auth.uid()) = user_id);
create policy "ilerleme ekleme" on public.ilerleme for insert to authenticated
  with check ((select auth.uid()) = user_id);
create policy "ilerleme guncelleme" on public.ilerleme for update to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "ilerleme silme"  on public.ilerleme for delete to authenticated
  using ((select auth.uid()) = user_id);

-- Anonim rol tabloya hiç dokunamasın; giriş yapmış kullanıcı yalnızca RLS izin verdiği satırlara erişir
revoke all on public.ilerleme from anon;
grant select, insert, update, delete on public.ilerleme to authenticated;

-- Zaman damgasını istemciye bırakmadan sunucu belirler (cihazların saati farklı olabilir)
create or replace function public.ilerleme_zaman() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.guncelleme := now();
  return new;
end;
$$;

drop trigger if exists ilerleme_zaman on public.ilerleme;
create trigger ilerleme_zaman before insert or update on public.ilerleme
  for each row execute function public.ilerleme_zaman();
