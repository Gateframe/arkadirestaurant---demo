import { Menu as MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import logoDionysos from "@/assets/logo-dionysos.png";
import { useI18n } from "@/i18n";
import type { Locale } from "@/i18n/types";

export function Navbar() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const links = [
    { label: t("nav.menu"), href: "#menu" },
    { label: t("nav.about"), href: "#philosophy" },
  ];

  function openReservationForm() {
    window.dispatchEvent(new Event("open-reservation-form"));
  }

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavVisible((prev) => {
        if (y <= 20) return false;
        if (y >= 28) return true;
        return prev;
      });
      if (y <= 20) setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-2.5 sm:px-5 sm:pt-3 lg:px-8 lg:pt-4">
      <div
        className={`relative mx-[15px] my-3 transition-opacity duration-[450ms] ease-in-out will-change-[opacity] ${
          navVisible ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!navVisible ? true : undefined}
      >
        <div
          className={`transition-transform duration-[450ms] ease-in-out will-change-transform [backface-visibility:hidden] ${
            navVisible ? "translate-y-0" : "-translate-y-[12px]"
          }`}
        >
          <nav
            className="pointer-events-auto mx-[2px] my-5 flex h-[62px] w-full max-w-[560px] items-center justify-between rounded-full border border-white/[0.14] bg-[rgba(32,26,22,0.42)] px-4 py-0 shadow-[0_4px_32px_rgba(18,12,10,0.35)] backdrop-blur-2xl sm:max-w-[641px] sm:px-4"
            aria-label={t("nav.main")}
          >
            <a
              href="#hero"
              aria-label={t("nav.home")}
              className="m-0 flex h-full shrink-0 items-center pr-1.5 pl-0 opacity-95 transition-opacity hover:opacity-100 sm:pr-3"
            >
              <img
                src={logoDionysos}
                alt="Dionysos"
                width={176}
                height={70}
                className="h-[42px] w-auto object-contain object-left sm:h-[44px]"
                decoding="async"
              />
            </a>

            <div className="hidden h-full items-center gap-6 md:flex md:gap-7">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="pl-[3px] text-[10px] uppercase leading-none tracking-[0.3em] text-ivory/75 transition-colors hover:text-gold sm:text-[11px]"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex h-full items-center gap-1.5 sm:gap-2">
              <div
                className="hidden items-center rounded-full border border-white/10 bg-[rgba(22,18,15,0.35)] p-0.5 sm:flex"
                role="group"
                aria-label={t("lang.switch")}
              >
                {(["de", "en"] as Locale[]).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors ${
                      locale === code
                        ? "bg-gold/25 text-gold"
                        : "text-ivory/55 hover:text-ivory"
                    }`}
                  >
                    {code === "de" ? t("lang.deShort") : t("lang.enShort")}
                  </button>
                ))}
              </div>

              <a
                href="#reservation"
                onClick={(event) => {
                  event.preventDefault();
                  openReservationForm();
                }}
                className="hidden rounded-full border border-gold/45 px-3 py-1.5 text-[10px] font-medium uppercase leading-none tracking-[0.28em] text-ivory transition-all hover:border-gold hover:bg-gold hover:text-background sm:inline-flex sm:items-center sm:justify-center sm:px-3.5"
              >
                {t("nav.book")}
              </a>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={t("nav.toggle")}
                aria-expanded={open}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-ivory md:hidden"
              >
                <MenuIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          </nav>

          {open && (
            <div className="pointer-events-auto absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-2xl border border-white/12 bg-[rgba(28,22,18,0.88)] p-6 backdrop-blur-xl md:hidden">
              <div className="flex flex-col gap-5">
                <div className="flex justify-center gap-1 rounded-full border border-white/10 bg-[rgba(22,18,15,0.45)] p-1">
                  {(["de", "en"] as Locale[]).map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => setLocale(code)}
                      className={`flex-1 rounded-full py-2 text-[10px] font-semibold uppercase tracking-[0.22em] ${
                        locale === code ? "bg-gold/25 text-gold" : "text-ivory/70"
                      }`}
                    >
                      {code === "de" ? t("lang.deShort") : t("lang.enShort")}
                    </button>
                  ))}
                </div>
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-sm uppercase tracking-[0.22em] text-ivory/85"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#reservation"
                  onClick={(event) => {
                    event.preventDefault();
                    setOpen(false);
                    openReservationForm();
                  }}
                  className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-gold/50 px-3.5 py-1.5 text-[10px] font-medium uppercase leading-none tracking-[0.28em] text-ivory"
                >
                  {t("nav.book")}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
