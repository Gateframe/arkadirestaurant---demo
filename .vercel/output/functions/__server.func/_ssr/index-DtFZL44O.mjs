import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, R as ReservationCTA, F as Footer, u as useReveal, D as Dialog, a as DialogContent, b as DialogTitle, c as DialogDescription, d as cn } from "./ReservationCTA-DaVwdDzd.mjs";
import { u as useI18n, h as heroPlate } from "./router-B-XRt__z.mjs";
import { I as Instagram, M as Mail, a as MapPin, b as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
const cardMenu = "/assets/dish-1-D-1KJflN.png";
const cardReservation = "/assets/card-reservation-B-WtELEI.jpg";
const cardRestaurant = "/assets/gallery-09-CdZ1VE2L.png";
const reviewsBadge = "/assets/reviews-badge-CETqrBli.png";
const HERO_FRAME = "p-[clamp(0.375rem,0.9vw,0.75rem)]";
const HERO_RADIUS = "rounded-2xl";
function Hero() {
  const { t } = useI18n();
  const [scroll, setScroll] = reactExports.useState(0);
  const heroRef = reactExports.useRef(null);
  const reviewsSparkId = reactExports.useId().replace(/:/g, "");
  const cards = reactExports.useMemo(
    () => [
      {
        badgeKey: "hero.cardMenu.badge",
        altKey: "hero.cardMenu.alt",
        img: cardMenu,
        href: "#menu"
      },
      {
        badgeKey: "hero.cardReservation.badge",
        altKey: "hero.cardReservation.alt",
        img: cardReservation,
        href: "#reservation"
      },
      {
        badgeKey: "hero.cardRestaurant.badge",
        altKey: "hero.cardRestaurant.alt",
        img: cardRestaurant,
        href: "#atmosphere"
      }
    ],
    []
  );
  const socialLinks = reactExports.useMemo(
    () => [
      { Icon: Instagram, labelKey: "social.instagram", href: "#" },
      {
        Icon: Mail,
        labelKey: "social.mail",
        href: "mailto:info@restaurantdionysos.com"
      },
      {
        Icon: MapPin,
        labelKey: "social.location",
        href: "https://www.google.com/maps/search/?api=1&query=Restaurant+Dionysos%2C+Freisinger+Str.+3%2C+85386+Eching"
      }
    ],
    []
  );
  function openReservationForm() {
    window.dispatchEvent(new Event("open-reservation-form"));
  }
  reactExports.useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const top = heroRef.current.getBoundingClientRect().top;
      setScroll(Math.max(-200, Math.min(0, top)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "hero",
      ref: heroRef,
      className: `relative box-border flex w-full flex-col overflow-hidden ${HERO_FRAME} lg:h-[100dvh] lg:min-h-0 lg:max-h-[100dvh]`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `flex min-h-0 w-full flex-1 flex-col gap-2 overflow-hidden ${HERO_RADIUS} lg:grid lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,73fr)_minmax(0,27fr)] lg:grid-rows-1 lg:items-stretch lg:gap-2`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[70svh] w-full shrink-0 overflow-hidden bg-card lg:h-full lg:min-h-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: heroPlate,
                  alt: t("hero.plateAlt"),
                  width: 1200,
                  height: 1200,
                  loading: "eager",
                  fetchPriority: "high",
                  className: "absolute inset-0 h-full w-full object-cover object-center brightness-[1.07] contrast-[1.06] saturate-[1.08] animate-[fade-in_1.4s_ease-out_both]",
                  style: { transform: `translateY(${scroll * 0.08}px) scale(1.04)` }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(36,28,22,0.58)] via-[rgba(22,18,15,0.28)] to-[rgba(14,11,9,0.06)]",
                  "aria-hidden": true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(38,30,24,0.42)] via-[rgba(22,18,15,0.14)] to-transparent sm:from-[rgba(34,27,21,0.36)]",
                  "aria-hidden": true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(58,42,30,0.28)_0%,rgba(28,22,18,0.08)_42%,transparent_58%)]",
                  "aria-hidden": true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto absolute bottom-[max(1.75rem,calc(1rem+env(safe-area-inset-bottom,0px)))] right-[max(0.875rem,calc(0.5rem+env(safe-area-inset-right,0px)))] z-[25] flex flex-col items-end gap-2.5 sm:bottom-10 sm:right-6 sm:gap-3.5 lg:bottom-12 lg:right-8 lg:gap-4 xl:bottom-14 xl:right-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-row items-center gap-2 sm:gap-2.5", "aria-label": t("hero.socialLabel"), children: socialLinks.map(({ Icon, labelKey, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href,
                    "aria-label": t(labelKey),
                    ...href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {},
                    className: "grid size-11 min-h-[44px] min-w-[44px] touch-manipulation place-items-center rounded-full border border-ivory/20 bg-[rgba(28,22,18,0.38)] text-ivory/85 shadow-[0_2px_20px_rgba(18,12,10,0.35)] backdrop-blur-sm transition-all hover:border-gold hover:text-gold sm:size-10 sm:min-h-0 sm:min-w-0",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-[18px] w-[18px] sm:h-4 sm:w-4" })
                  },
                  labelKey
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none relative inline-flex max-w-[min(100%,calc(100vw-2.5rem-env(safe-area-inset-left,0px)-env(safe-area-inset-right,0px)))] rounded-[14px] shadow-[0_2px_20px_rgba(18,12,10,0.35)] sm:max-w-none sm:rounded-[18px]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[14px] border border-ivory/20 bg-[rgba(28,22,18,0.38)] p-1.5 backdrop-blur-sm sm:rounded-[18px] sm:p-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: reviewsBadge,
                      alt: t("hero.reviewsAlt"),
                      className: "relative z-0 mx-auto block w-[122px] max-w-full opacity-90 drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:mx-0 sm:w-[139px]",
                      loading: "lazy"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "svg",
                    {
                      className: "pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible",
                      width: "100%",
                      height: "100%",
                      "aria-hidden": true,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "filter",
                            {
                              id: `${reviewsSparkId}-tail`,
                              x: "-50%",
                              y: "-50%",
                              width: "200%",
                              height: "200%",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2.2", result: "g" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "g" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "filter",
                            {
                              id: `${reviewsSparkId}-head`,
                              x: "-80%",
                              y: "-80%",
                              width: "260%",
                              height: "260%",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "0.35", result: "g" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("feMerge", { children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "g" }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("feMergeNode", { in: "SourceGraphic" })
                                ] })
                              ]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "rect",
                          {
                            className: "reviews-badge-spark-ring reviews-badge-spark-travel",
                            x: "1",
                            y: "1",
                            width: "calc(100% - 2px)",
                            height: "calc(100% - 2px)",
                            fill: "none",
                            pathLength: 100,
                            stroke: "var(--gold)",
                            strokeOpacity: 0.38,
                            strokeWidth: 1.75,
                            strokeLinecap: "round",
                            strokeDasharray: "1.35 98.65",
                            strokeDashoffset: 0,
                            filter: `url(#${reviewsSparkId}-tail)`
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "rect",
                          {
                            className: "reviews-badge-spark-ring reviews-badge-spark-travel",
                            x: "1",
                            y: "1",
                            width: "calc(100% - 2px)",
                            height: "calc(100% - 2px)",
                            fill: "none",
                            pathLength: 100,
                            stroke: "#ffffff",
                            strokeWidth: 2.25,
                            strokeLinecap: "round",
                            strokeDasharray: "0.38 99.62",
                            strokeDashoffset: 0,
                            filter: `url(#${reviewsSparkId}-head)`
                          }
                        )
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-20 flex flex-col justify-end pt-32 pb-[max(2rem,calc(1rem+env(safe-area-inset-bottom,0px)))] pl-5 pr-5 max-sm:pl-4 max-sm:pr-40 sm:pb-10 sm:pl-8 sm:pr-8 lg:pb-12 lg:pl-10 lg:pr-16 xl:pb-14 xl:pl-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[min(100%,42rem)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow mb-2 block animate-[fade-in_1s_ease-out_0.2s_both] sm:mb-3", children: t("hero.establishment") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "flex animate-[fade-up_1.1s_cubic-bezier(0.22,1,0.36,1)_0.15s_both] flex-col items-start gap-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display mb-1 block animate-[fade-in_1s_ease-out_0.1s_both] font-light text-gold tracking-[0.22em] text-[clamp(1rem,3.2vw,2.5rem)] drop-shadow-[0_2px_14px_rgba(12,10,8,0.45)] sm:mb-1.5 sm:tracking-[0.26em]", children: t("hero.headline1") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display block font-medium leading-[0.86] tracking-[-0.04em] text-ivory [text-shadow:0_1px_2px_rgba(12,10,8,0.45),0_4px_40px_rgba(0,0,0,0.35),0_0_72px_rgba(243,239,226,0.14)] text-[clamp(2.35rem,11vw,7.5rem)] sm:text-[clamp(2.75rem,9.5vw,8.5rem)] lg:text-[clamp(3rem,7.2vw,8.75rem)]", children: t("hero.headline2") })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full shrink-0 flex-col gap-2 bg-background lg:h-full lg:min-h-0 lg:self-stretch lg:bg-transparent", children: cards.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: c.href === "#reservation" ? void 0 : c.href,
                onClick: c.href === "#reservation" ? (event) => {
                  event.preventDefault();
                  openReservationForm();
                } : void 0,
                role: c.href === "#reservation" ? "button" : void 0,
                tabIndex: c.href === "#reservation" ? 0 : void 0,
                onKeyDown: c.href === "#reservation" ? (event) => {
                  if (event.key !== "Enter" && event.key !== " ") return;
                  event.preventDefault();
                  openReservationForm();
                } : void 0,
                "aria-label": t(c.altKey),
                className: "group relative flex-none overflow-hidden rounded-none bg-card min-h-[9.5rem] sm:min-h-[10.5rem] lg:min-h-0 lg:flex-1",
                style: { animation: `fade-up 1s cubic-bezier(0.22,1,0.36,1) ${0.25 + i * 0.1}s both` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: c.img,
                      alt: "",
                      loading: "lazy",
                      className: "absolute inset-0 h-full w-full object-cover brightness-[1.06] contrast-[1.05] saturate-[1.07] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(34,26,20,0.62)] via-[rgba(22,18,14,0.2)] to-[rgba(12,10,8,0.05)] transition-opacity duration-500 group-hover:from-[rgba(34,26,20,0.72)]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "pointer-events-auto absolute bottom-3 right-3 flex max-w-[min(100%,calc(100%-1rem))] items-center gap-1.5 rounded-full border border-white/[0.12] bg-[rgba(10,10,10,0.45)] py-1 pl-2.5 pr-1 shadow-[0_6px_18px_rgba(0,0,0,0.22)] backdrop-blur-[14px] transition-[border-color,box-shadow] duration-300 sm:bottom-[18px] sm:right-[18px] sm:gap-2 sm:pl-3 sm:pr-1 group-hover:border-white/[0.2] group-hover:shadow-[0_8px_22px_rgba(0,0,0,0.28)]",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-0 truncate text-[9px] font-medium uppercase leading-none tracking-[0.2em] text-ivory sm:text-[10px] sm:tracking-[0.22em]", children: t(c.badgeKey) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/[0.12] bg-[rgba(10,10,10,0.35)] text-ivory shadow-[0_2px_8px_rgba(0,0,0,0.18)] backdrop-blur-md transition-[border-color,background-color] duration-300 group-hover:border-white/[0.28] group-hover:bg-[rgba(14,14,14,0.5)]",
                            "aria-hidden": true,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-3.5 sm:w-3.5" })
                          }
                        )
                      ]
                    }
                  ) })
                ]
              },
              c.href
            )) })
          ]
        }
      )
    }
  );
}
function Intro() {
  const ref = useReveal();
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "philosophy", className: "relative px-6 py-32 sm:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal mx-auto max-w-4xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t("intro.eyebrow") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 text-display text-3xl text-ivory sm:text-5xl lg:text-6xl", children: [
      t("intro.p1"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "italic text-gold", children: [
        " ",
        t("intro.e1")
      ] }),
      t("intro.p2"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "italic text-gold", children: [
        " ",
        t("intro.e2")
      ] }),
      t("intro.p3"),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "italic text-gold", children: [
        " ",
        t("intro.e3")
      ] }),
      t("intro.p4")
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-12 h-px w-24 bg-gold/60" })
  ] }) });
}
const dish1 = "/assets/dish-1-D-1KJflN.png";
const dish2 = "/assets/dish-2-G_mPfeJN.png";
const dish3 = "/assets/dish-3-BWUtbl0F.png";
function SignatureDishes() {
  const ref = useReveal();
  const { t } = useI18n();
  const dishes = reactExports.useMemo(
    () => [
      { nameKey: "dish1.name", descKey: "dish1.desc", price: "7,50 €", img: dish1 },
      { nameKey: "dish2.name", descKey: "dish2.desc", price: "8,50 €", img: dish2 },
      { nameKey: "dish3.name", descKey: "dish3.desc", price: "6,50 €", img: dish3 }
    ],
    []
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "menu", className: "relative border-t border-white/5 bg-stone px-6 py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t("signature.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-display mt-4 text-4xl text-ivory sm:text-6xl", children: [
          t("signature.title1"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: t("signature.title2") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-sm leading-relaxed text-muted-foreground", children: t("signature.blurb") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: dishes.map((d) => {
      const name = t(d.nameKey);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative overflow-hidden rounded-3xl bg-charcoal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: d.img,
            alt: name,
            loading: "lazy",
            className: "h-full w-full object-cover brightness-[1.05] contrast-[1.05] saturate-[1.06] transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display text-2xl text-ivory", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: t(d.descKey) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-display shrink-0 text-2xl text-gold", children: d.price.endsWith("€") ? d.price : `$${d.price}` })
        ] })
      ] }, d.nameKey);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "/menu",
        className: "inline-flex items-center gap-3 rounded-full border border-gold/50 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.28em] text-gold transition-all hover:border-gold hover:bg-gold hover:text-charcoal",
        children: [
          t("signature.cta"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ]
      }
    ) })
  ] }) });
}
const g01 = "/assets/gallery-01-CvT9TZXf.png";
const g02 = "/assets/gallery-02-CvT9Rv-a.png";
const g03 = "/assets/dish-1-D-1KJflN.png";
const g04 = "/assets/dish-2-G_mPfeJN.png";
const g05 = "/assets/gallery-05-BrsYWlFG.png";
const g06 = "/assets/gallery-06-nK8k53zN.png";
const g07 = "/assets/gallery-07-BQ2oyCsX.png";
const g09 = "/assets/gallery-09-CdZ1VE2L.png";
const g11 = "/assets/gallery-11-cBTG4UdX.png";
const g12 = "/assets/dish-3-BWUtbl0F.png";
const GALLERY_BAND = "min(96vw, 128rem)";
const modularGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(6, var(--cell))",
  gridTemplateRows: "repeat(3, var(--cell))",
  gap: "var(--gap)",
  justifyContent: "center",
  width: GALLERY_BAND,
  maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  boxSizing: "border-box",
  ["--cell"]: `clamp(5.5rem, calc((${GALLERY_BAND} - 5 * var(--gap)) / 6), 19rem)`,
  ["--gap"]: "clamp(0.5rem, 1.2vw, 1rem)"
};
function Gallery() {
  const ref = useReveal();
  const [lightbox, setLightbox] = reactExports.useState(null);
  const { t } = useI18n();
  const tiles = reactExports.useMemo(
    () => [
      {
        img: g01,
        altKey: "gallery.alt01",
        imgClass: "object-cover object-[center_35%]",
        module: "S",
        col: [4, 5],
        row: [3, 4]
      },
      {
        img: g09,
        altKey: "gallery.alt02",
        imgClass: "object-cover object-center",
        module: "H",
        col: [2, 4],
        row: [1, 2]
      },
      {
        img: g03,
        altKey: "gallery.alt03",
        imgClass: "object-cover object-center",
        module: "S",
        col: [4, 5],
        row: [1, 2]
      },
      {
        img: g04,
        altKey: "gallery.alt04",
        imgClass: "object-cover object-center",
        module: "S",
        col: [3, 4],
        row: [3, 4]
      },
      {
        img: g12,
        altKey: "gallery.alt05",
        imgClass: "object-cover object-center",
        module: "S",
        col: [2, 3],
        row: [2, 3]
      },
      {
        img: g11,
        altKey: "gallery.alt06",
        imgClass: "object-cover object-[center_42%]",
        module: "S",
        col: [3, 4],
        row: [2, 3]
      },
      {
        img: g07,
        altKey: "gallery.alt07",
        imgClass: "object-cover object-[center_45%]",
        module: "S",
        col: [4, 5],
        row: [2, 3]
      },
      {
        img: g02,
        altKey: "gallery.alt08",
        imgClass: "object-cover object-[center_40%]",
        module: "P",
        col: [5, 6],
        row: [2, 4]
      },
      {
        img: g05,
        altKey: "gallery.alt09",
        imgClass: "object-cover object-center",
        module: "S",
        col: [2, 3],
        row: [3, 4]
      },
      {
        img: g06,
        altKey: "gallery.alt10",
        imgClass: "object-cover object-center",
        module: "S",
        col: [5, 6],
        row: [1, 2]
      }
    ],
    []
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "atmosphere", className: "border-t border-white/5 bg-stone pt-24 pb-14 sm:pt-32 sm:pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "reveal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t("gallery.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-display mt-4 text-4xl text-ivory sm:text-6xl", children: [
          t("gallery.title1"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: t("gallery.title2") })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden w-full justify-center px-4 md:flex lg:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: modularGridStyle, children: tiles.map((tile) => {
        const alt = t(tile.altKey);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ModularTile,
          {
            img: tile.img,
            alt,
            expandPrefix: t("gallery.expandPrefix"),
            imgClass: tile.imgClass,
            module: tile.module,
            gridColumn: `${tile.col[0]} / ${tile.col[1]}`,
            gridRow: `${tile.row[0]} / ${tile.row[1]}`,
            onExpand: () => setLightbox({ src: tile.img, alt })
          },
          tile.altKey
        );
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-7xl flex-col gap-3 px-6 sm:gap-4 md:hidden", children: tiles.map((tile) => {
        const alt = t(tile.altKey);
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          ModularTile,
          {
            img: tile.img,
            alt,
            expandPrefix: t("gallery.expandPrefix"),
            imgClass: tile.imgClass,
            module: tile.module,
            mobile: true,
            onExpand: () => setLightbox({ src: tile.img, alt })
          },
          `m-${tile.altKey}`
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open: lightbox !== null, onOpenChange: (open) => !open && setLightbox(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { motion: "soft", className: "z-[100]", children: lightbox ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { className: "sr-only", children: [
        t("gallery.lightboxTitle"),
        ": ",
        lightbox.alt
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "sr-only", children: t("gallery.lightboxDesc") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: lightbox.src,
          alt: lightbox.alt,
          className: "block max-h-[min(94dvh,100dvh)] max-w-[100vw] object-contain",
          decoding: "async"
        }
      )
    ] }) : null }) })
  ] });
}
function ModularTile({
  img,
  alt,
  expandPrefix,
  imgClass,
  module,
  gridColumn,
  gridRow,
  mobile,
  onExpand
}) {
  const mobileAspect = module === "S" ? "aspect-square max-h-[min(96vw,31rem)] w-full max-w-[30rem] mx-auto" : module === "P" ? "aspect-[1/2] max-h-[min(80svh,38rem)] w-[min(92%,28rem)] mx-auto" : "aspect-[2/1] w-full max-h-[min(65vw,22rem)]";
  const tileClass = `group relative min-h-0 overflow-hidden rounded-3xl bg-charcoal text-left shadow-[0_10px_36px_-18px_rgba(0,0,0,0.42)] ${mobile ? mobileAspect : module === "P" ? "min-h-0 w-full [aspect-ratio:1/2] max-h-full" : module === "H" ? "min-h-0 w-full [aspect-ratio:2/1] max-h-full" : "min-h-0 w-full aspect-square max-h-full"}`;
  const style = mobile ? void 0 : {
    gridColumn,
    gridRow
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      type: "button",
      className: cn(
        tileClass,
        "block h-full w-full cursor-zoom-in border-0 p-0 outline-none focus-visible:ring-2 focus-visible:ring-gold/55 focus-visible:ring-offset-2 focus-visible:ring-offset-stone"
      ),
      style,
      onClick: onExpand,
      "aria-label": `${expandPrefix}${alt}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: img,
            alt: "",
            loading: "lazy",
            className: `absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.03] ${imgClass} brightness-[1.04] contrast-[1.04] saturate-[1.05]`,
            draggable: false
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[rgba(22,18,15,0.06)] transition-colors duration-500 group-hover:bg-[rgba(22,18,15,0.02)]" })
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Intro, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SignatureDishes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReservationCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
