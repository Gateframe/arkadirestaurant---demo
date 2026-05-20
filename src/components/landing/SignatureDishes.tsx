import { ArrowUpRight } from "lucide-react";
import { useMemo } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { useI18n } from "@/i18n";
import dish1 from "@/assets/dish-1.png";
import dish2 from "@/assets/dish-2.png";
import dish3 from "@/assets/dish-3.png";

export function SignatureDishes() {
  const ref = useReveal<HTMLDivElement>();
  const { t } = useI18n();

  const dishes = useMemo(
    () =>
      [
        { nameKey: "dish1.name", descKey: "dish1.desc", price: "7,50 €", img: dish1 },
        { nameKey: "dish2.name", descKey: "dish2.desc", price: "8,50 €", img: dish2 },
        { nameKey: "dish3.name", descKey: "dish3.desc", price: "6,50 €", img: dish3 },
      ] as const,
    [],
  );

  return (
    <section id="menu" className="relative border-t border-white/5 bg-stone px-6 py-24 sm:py-32">
      <div ref={ref} className="reveal mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">{t("signature.eyebrow")}</span>
            <h2 className="text-display mt-4 text-4xl text-ivory sm:text-6xl">
              {t("signature.title1")} <span className="italic text-gold">{t("signature.title2")}</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{t("signature.blurb")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {dishes.map((d) => {
            const name = t(d.nameKey);
            return (
              <article key={d.nameKey} className="group relative overflow-hidden rounded-3xl bg-charcoal">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={d.img}
                    alt={name}
                    loading="lazy"
                    className="h-full w-full object-cover brightness-[1.05] contrast-[1.05] saturate-[1.06] transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 p-6">
                  <div>
                    <h3 className="text-display text-2xl text-ivory">{name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(d.descKey)}</p>
                  </div>
                  <span className="text-display shrink-0 text-2xl text-gold">
                    {d.price.endsWith("€") ? d.price : `$${d.price}`}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/menu"
            className="inline-flex items-center gap-3 rounded-full border border-gold/50 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-gold transition-all hover:border-gold hover:bg-gold hover:text-charcoal"
          >
            {t("signature.cta")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
