import { Instagram, MapPin, Clock, Phone } from "lucide-react";
import logoArkadi from "@/assets/logo-arkadi.png";
import { useI18n } from "@/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 bg-background px-6 pb-8 pt-14 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-y-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[1.15fr_0.9fr_1.25fr_1fr] lg:gap-x-10 xl:gap-x-14">
          <div className="max-w-[17rem]">
            <span className="inline-flex [isolation:isolate]">
              <img
                src={logoArkadi}
                alt="Arkadirestaurant"
                width={200}
                height={80}
                className="logo-on-dark h-16 w-auto object-contain object-left sm:h-20"
                decoding="async"
              />
            </span>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{t("footer.tagline")}</p>
          </div>

          <Block icon={MapPin} title={t("footer.visit")}>
            Landwehrstraße 58
            <br />
            80336 München
          </Block>

          <Block icon={Clock} title={t("footer.hours")}>
            <div className="space-y-3">
              <p>
                <span className="block text-ivory">{t("footer.hoursWeekdays")}</span>
                <span className="block whitespace-nowrap">{t("footer.hoursWeekdaysTime")}</span>
              </p>
              <p>
                <span className="block text-ivory">{t("footer.hoursWeekend")}</span>
                <span className="block whitespace-nowrap">{t("footer.hoursWeekendTime")}</span>
              </p>
              <p className="text-ivory/70">{t("footer.hoursClosed")}</p>
            </div>
          </Block>

          <Block icon={Phone} title={t("footer.contact")}>
            <div className="space-y-3">
              <a href="tel:+49895328150" className="block transition-colors hover:text-gold">
                +49 89 5328150
              </a>
              <a
                href="https://www.instagram.com/arkadirestaurant/"
                className="inline-flex items-center gap-2 transition-colors hover:text-gold"
              >
                <Instagram className="h-3.5 w-3.5" /> @arkadirestaurant
              </a>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new Event("open-reservation-form"));
                }}
                className="inline-flex rounded-full border border-gold/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-gold transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
              >
                {t("footer.reserve")}
              </button>
            </div>
          </Block>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Arkadirestaurant. {t("footer.copyright")}
          </span>
          <span>{t("footer.crafted")}</span>
        </div>
      </div>
    </footer>
  );
}

function Block({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-center gap-2 text-gold">
        <Icon className="h-3.5 w-3.5" />
        <span className="text-[10px] uppercase tracking-[0.32em]">{title}</span>
      </div>
      <div className="mt-4 text-sm leading-6 text-ivory/80">{children}</div>
    </div>
  );
}
