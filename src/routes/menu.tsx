import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ReservationCTA } from "@/components/landing/ReservationCTA";
import { MENU_SECTIONS_DE } from "@/data/restaurant-menu-de";
import { MENU_SECTIONS_EN } from "@/data/restaurant-menu-en";
import { buildFeaturedBlocks } from "@/data/restaurant-menu-featured";
import { useI18n } from "@/i18n";
import menuIntroBackground from "@/assets/menu-intro-bg.png";
import marbleBackground from "@/assets/menu-marble-bg.png";
import menuPhoto1 from "@/assets/menu-photo-1.png";
import menuPhoto2 from "@/assets/menu-photo-2.png";
import menuPhoto3 from "@/assets/menu-photo-3.png";
import menuPhoto4 from "@/assets/menu-photo-4.png";
import menuPhoto5 from "@/assets/menu-photo-5.png";

const DEFAULT_SI = 6;
const DEFAULT_II = 4;

const menuPhotos = [menuPhoto1, menuPhoto2, menuPhoto3, menuPhoto4, menuPhoto5] as const;

function getImageForDishIndices(si: number, ii: number) {
  const key = `${si}:${ii}`;
  let hash = 0;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) % menuPhotos.length;
  }
  return menuPhotos[hash];
}

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Speisekarte — Restaurant Dionysos Eching" },
      {
        name: "description",
        content:
          "Speisekarte Restaurant Dionysos: griechische Vorspeisen, Meeresfrüchte, Gyros, Grill-Spezialitäten, Desserts, Weine und Getränke.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { locale, t } = useI18n();
  const sections = locale === "de" ? MENU_SECTIONS_DE : MENU_SECTIONS_EN;

  const featuredBlocks = useMemo(
    () => buildFeaturedBlocks(sections, t("menuPage.drinksCombined")),
    [sections, t],
  );

  const [sel, setSel] = useState({ si: DEFAULT_SI, ii: DEFAULT_II });

  const selectedDish = useMemo(() => {
    const row = sections[sel.si].items[sel.ii];
    return {
      category: sections[sel.si].title,
      name: row[0],
      description: row[1],
      image: getImageForDishIndices(sel.si, sel.ii),
    };
  }, [sections, sel.si, sel.ii]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 sm:py-24">
        <img
          src={menuIntroBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.66] contrast-[1.08] saturate-[1.04]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(12,9,7,0.88)] via-[rgba(12,9,7,0.58)] to-[rgba(12,9,7,0.34)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-[rgba(12,9,7,0.28)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(202,167,106,0.18),transparent_38%)]" />
        <div className="relative mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-ivory/65 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t("menuPage.back")}
          </Link>

          <div className="mt-14 max-w-3xl">
            <span className="eyebrow">{t("menuPage.eyebrow")}</span>
            <h1 className="text-display mt-5 text-5xl leading-none text-ivory sm:text-7xl">
              {t("menuPage.title1")}{" "}
              <span className="italic text-gold">{t("menuPage.title2")}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("menuPage.intro")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:py-18">
        <img
          src={marbleBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center brightness-[0.46] contrast-[1.14] saturate-[1.08]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[rgba(8,6,5,0.74)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_31%_9%,rgba(202,167,106,0.28),transparent_29%),radial-gradient(circle_at_78%_38%,rgba(202,167,106,0.12),transparent_30%),linear-gradient(115deg,rgba(14,11,9,0.92),rgba(18,14,12,0.72))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.46)_82%,rgba(0,0,0,0.72)_100%)]" />
        <div className="relative mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[minmax(0,63fr)_minmax(21rem,37fr)] lg:items-start">
          <article className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-[rgba(27,22,18,0.76)] p-6 shadow-[0_26px_96px_-54px_rgba(0,0,0,0.95),0_0_42px_rgba(202,167,106,0.07),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
            <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative mb-11 border-b border-white/10 pb-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <span className="eyebrow">{t("menuPage.curated")}</span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-ivory/45">
                  {t("menuPage.selectHint")}
                </span>
              </div>
              <h2 className="text-display mt-4 text-5xl text-ivory sm:text-6xl">
                {t("menuPage.sectionHeading")}{" "}
                <span className="italic text-gold">{t("menuPage.sectionHeadingGold")}</span>
              </h2>
            </div>

            <div className="relative space-y-12">
              {featuredBlocks.map((block, blockIndex) => (
                <section
                  key={`${block.title}-${blockIndex}`}
                  className="border-t border-white/10 pt-12 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-center gap-4">
                    <h3 className="text-display shrink-0 text-3xl text-gold sm:text-4xl">
                      {block.title}
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
                  </div>
                  <div className="mt-6 grid gap-x-8 gap-y-5 md:grid-cols-2">
                    {block.entries.map((entry) => (
                      <button
                        key={`${entry.si}-${entry.ii}-${entry.name}`}
                        type="button"
                        onClick={() => setSel({ si: entry.si, ii: entry.ii })}
                        className={`group rounded-2xl border-l px-4 py-3 text-left transition-all duration-300 ${
                          sel.si === entry.si && sel.ii === entry.ii
                            ? "border-gold/75 bg-gold/10 shadow-[0_12px_34px_-30px_rgba(202,167,106,0.8)] ring-1 ring-gold/30"
                            : "border-transparent hover:border-gold/35 hover:bg-white/[0.045]"
                        }`}
                      >
                        <h4 className="text-sm font-semibold tracking-wide text-ivory transition-colors group-hover:text-gold sm:text-base">
                          {entry.name}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground/85">
                          {entry.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <aside className="order-first self-start lg:sticky lg:top-8 lg:order-none">
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-gold/18 bg-charcoal shadow-[0_28px_100px_-56px_rgba(0,0,0,0.95),0_0_38px_rgba(202,167,106,0.08)] sm:min-h-[36rem] lg:h-[calc(100dvh-4rem)] lg:min-h-0">
              <img
                key={`${sel.si}-${sel.ii}`}
                src={selectedDish.image}
                alt={selectedDish.name}
                className="absolute inset-0 h-full w-full object-cover brightness-[1.04] contrast-[1.08] saturate-[1.08] animate-[fade-in_0.45s_ease-out_both]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,14,12,0.78)] via-transparent to-[rgba(18,14,12,0.18)]" />
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/12 bg-[rgba(18,14,12,0.58)] p-5 shadow-[0_18px_60px_-34px_rgba(0,0,0,0.9)] backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold">{selectedDish.category}</p>
                <p className="text-display mt-2 text-3xl leading-tight text-ivory">{selectedDish.name}</p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/65">{selectedDish.description}</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <ReservationCTA />
      <Footer />
    </main>
  );
}
