import { useReveal } from "@/hooks/use-reveal";
import { useI18n } from "@/i18n";

export function Intro() {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();
  return (
    <section id="philosophy" className="relative px-6 py-32 sm:py-40">
      <div ref={ref} className="reveal mx-auto max-w-4xl text-center">
        <span className="eyebrow">{t("intro.eyebrow")}</span>
        <p className="mt-8 text-display text-3xl text-ivory sm:text-5xl lg:text-6xl">
          {t("intro.p1")}
          <span className="italic text-gold"> {t("intro.e1")}</span>
          {t("intro.p2")}
          <span className="italic text-gold"> {t("intro.e2")}</span>
          {t("intro.p3")}
          <span className="italic text-gold"> {t("intro.e3")}</span>
          {t("intro.p4")}
        </p>
        <div className="mx-auto mt-12 h-px w-24 bg-gold/60" />
      </div>
    </section>
  );
}
