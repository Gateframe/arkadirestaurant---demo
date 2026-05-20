import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useI18n } from "./router-B-XRt__z.mjs";
import { R as Root, P as Portal, C as Content, a as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root$1 } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as Menu, b as ArrowUpRight, a as MapPin, C as Clock, P as Phone, I as Instagram, X } from "../_libs/lucide-react.mjs";
const logoDionysos = "/assets/logo-dionysos-BmquDFBW.png";
function Navbar() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const [navVisible, setNavVisible] = reactExports.useState(false);
  const links = [
    { label: t("nav.menu"), href: "#menu" },
    { label: t("nav.about"), href: "#philosophy" }
  ];
  function openReservationForm() {
    window.dispatchEvent(new Event("open-reservation-form"));
  }
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-2.5 sm:px-5 sm:pt-3 lg:px-8 lg:pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `relative mx-[15px] my-3 transition-opacity duration-[450ms] ease-in-out will-change-[opacity] ${navVisible ? "opacity-100" : "pointer-events-none opacity-0"}`,
      "aria-hidden": !navVisible ? true : void 0,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `transition-transform duration-[450ms] ease-in-out will-change-transform [backface-visibility:hidden] ${navVisible ? "translate-y-0" : "-translate-y-[12px]"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "nav",
              {
                className: "pointer-events-auto mx-[2px] my-5 flex h-[62px] w-full max-w-[560px] items-center justify-between rounded-full border border-white/[0.14] bg-[rgba(32,26,22,0.42)] px-4 py-0 shadow-[0_4px_32px_rgba(18,12,10,0.35)] backdrop-blur-2xl sm:max-w-[641px] sm:px-4",
                "aria-label": t("nav.main"),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#hero",
                      "aria-label": t("nav.home"),
                      className: "m-0 flex h-full shrink-0 items-center pr-1.5 pl-0 opacity-95 transition-opacity hover:opacity-100 sm:pr-3",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: logoDionysos,
                          alt: "Dionysos",
                          width: 176,
                          height: 70,
                          className: "h-[42px] w-auto object-contain object-left sm:h-[44px]",
                          decoding: "async"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden h-full items-center gap-6 md:flex md:gap-7", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: l.href,
                      className: "pl-[3px] text-[10px] uppercase leading-none tracking-[0.3em] text-ivory/75 transition-colors hover:text-gold sm:text-[11px]",
                      children: l.label
                    },
                    l.href
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full items-center gap-1.5 sm:gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "hidden items-center rounded-full border border-white/10 bg-[rgba(22,18,15,0.35)] p-0.5 sm:flex",
                        role: "group",
                        "aria-label": t("lang.switch"),
                        children: ["de", "en"].map((code) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "button",
                            onClick: () => setLocale(code),
                            className: `rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors ${locale === code ? "bg-gold/25 text-gold" : "text-ivory/55 hover:text-ivory"}`,
                            children: code === "de" ? t("lang.deShort") : t("lang.enShort")
                          },
                          code
                        ))
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: "#reservation",
                        onClick: (event) => {
                          event.preventDefault();
                          openReservationForm();
                        },
                        className: "hidden rounded-full border border-gold/45 px-3 py-1.5 text-[10px] font-medium uppercase leading-none tracking-[0.28em] text-ivory transition-all hover:border-gold hover:bg-gold hover:text-background sm:inline-flex sm:items-center sm:justify-center sm:px-3.5",
                        children: t("nav.book")
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setOpen((v) => !v),
                        "aria-label": t("nav.toggle"),
                        "aria-expanded": open,
                        className: "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 text-ivory md:hidden",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-3.5 w-3.5" })
                      }
                    )
                  ] })
                ]
              }
            ),
            open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-auto absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-2xl border border-white/12 bg-[rgba(28,22,18,0.88)] p-6 backdrop-blur-xl md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 rounded-full border border-white/10 bg-[rgba(22,18,15,0.45)] p-1", children: ["de", "en"].map((code) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setLocale(code),
                  className: `flex-1 rounded-full py-2 text-[10px] font-semibold uppercase tracking-[0.22em] ${locale === code ? "bg-gold/25 text-gold" : "text-ivory/70"}`,
                  children: code === "de" ? t("lang.deShort") : t("lang.enShort")
                },
                code
              )) }),
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "text-sm uppercase tracking-[0.22em] text-ivory/85",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "#reservation",
                  onClick: (event) => {
                    event.preventDefault();
                    setOpen(false);
                    openReservationForm();
                  },
                  className: "mt-2 inline-flex w-fit items-center justify-center rounded-full border border-gold/50 px-3.5 py-1.5 text-[10px] font-medium uppercase leading-none tracking-[0.28em] text-ivory",
                  children: t("nav.book")
                }
              )
            ] }) })
          ]
        }
      )
    }
  ) });
}
function Footer() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-white/10 bg-background px-6 pb-8 pt-14 sm:pt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-y-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[1.15fr_0.9fr_1.25fr_1fr] lg:gap-x-10 xl:gap-x-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[17rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logoDionysos,
            alt: "Dionysos",
            width: 240,
            height: 96,
            className: "h-20 w-auto object-contain object-left sm:h-24",
            decoding: "async"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-relaxed text-muted-foreground", children: t("footer.tagline") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Block, { icon: MapPin, title: t("footer.visit"), children: [
        "Freisinger Str. 3",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "85386 Eching"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { icon: Clock, title: t("footer.hours"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-ivory", children: t("footer.hoursWeekday") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block whitespace-nowrap", children: "11:00 – 15:00 · 17:30 – 23:00" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-ivory", children: t("footer.hoursWeekend") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block whitespace-nowrap", children: "11:00 – 15:00 · 17:30 – 00:00" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Block, { icon: Phone, title: t("footer.contact"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+498165707744", className: "block transition-colors hover:text-gold", children: "+49 81 65 707 744" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:info@restaurantdionysos.com",
            className: "block transition-colors hover:text-gold",
            children: "info@restaurantdionysos.com"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.instagram.com/dionysos_eching/",
            className: "inline-flex items-center gap-2 transition-colors hover:text-gold",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-3.5 w-3.5" }),
              " @dionysos_eching"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              window.dispatchEvent(new Event("open-reservation-form"));
            },
            className: "inline-flex rounded-full border border-gold/40 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-gold transition-colors hover:border-gold hover:bg-gold hover:text-charcoal",
            children: t("footer.reserve")
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.22em] text-muted-foreground sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Dionysos. ",
        t("footer.copyright")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.crafted") })
    ] })
  ] }) });
}
function Block({
  icon: Icon,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.32em]", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-sm leading-6 text-ivory/80", children })
  ] });
}
function useReveal(options = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      el?.classList.add("in-view");
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    }, options);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, motion = "default", ...props }, ref) => {
  const isSoft = motion === "soft";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      DialogOverlay,
      {
        className: isSoft ? "z-50 bg-[rgba(10,8,7,0.78)] backdrop-blur-[2px] duration-500 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" : void 0
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Content,
      {
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%]",
          isSoft ? "max-h-[100dvh] w-max max-w-[100vw] gap-0 border-0 bg-transparent p-0 shadow-none outline-none duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" : "max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Close,
            {
              className: cn(
                "absolute rounded-sm opacity-90 transition-[opacity,background-color,transform] duration-300 ease-out hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:ring-offset-2 focus:ring-offset-transparent disabled:pointer-events-none",
                isSoft ? "right-2 top-2 z-[60] grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-[rgba(12,10,9,0.55)] text-ivory shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md hover:border-white/25 hover:bg-[rgba(18,14,12,0.72)] sm:right-3 sm:top-3" : "right-4 top-4 ring-offset-background data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
});
DialogContent.displayName = Content.displayName;
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root$1.displayName;
const bg = "/assets/reservation-bg-CzGfBb3y.png";
function ReservationCTA() {
  const { t } = useI18n();
  const ref = useReveal();
  const scrollYRef = reactExports.useRef(0);
  const [open, setOpen] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const timeWindows = reactExports.useMemo(
    () => [
      t("reservation.time1"),
      t("reservation.time2"),
      t("reservation.time3"),
      t("reservation.time4"),
      t("reservation.time5"),
      t("reservation.time6")
    ],
    [t]
  );
  function openReservationForm() {
    scrollYRef.current = window.scrollY;
    setSubmitted(false);
    setOpen(true);
  }
  function restoreScrollPosition() {
    requestAnimationFrame(() => window.scrollTo({ top: scrollYRef.current, left: 0 }));
  }
  reactExports.useEffect(() => {
    window.addEventListener("open-reservation-form", openReservationForm);
    return () => window.removeEventListener("open-reservation-form", openReservationForm);
  }, []);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Dialog,
    {
      open,
      onOpenChange: (nextOpen) => {
        setOpen(nextOpen);
        if (nextOpen) {
          setSubmitted(false);
        } else {
          restoreScrollPosition();
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reservation", className: "px-3 py-24 sm:px-5 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref,
            className: "reveal relative mx-auto flex min-h-[70vh] max-w-[1600px] items-center justify-center overflow-hidden rounded-3xl",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: bg,
                  alt: t("reservation.ariaRoom"),
                  loading: "lazy",
                  className: "absolute inset-0 h-full w-full object-cover brightness-[1.05] contrast-[1.05] saturate-[1.06]"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[rgba(34,26,20,0.68)] via-[rgba(26,20,16,0.32)] to-[rgba(18,14,12,0.18)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-2xl px-6 py-20 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t("reservation.eyebrow") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-display mt-6 text-5xl text-ivory [text-shadow:0_1px_2px_rgba(12,10,8,0.45),0_4px_36px_rgba(0,0,0,0.3),0_0_64px_rgba(243,239,226,0.1)] sm:text-7xl", children: [
                  t("reservation.title1"),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: t("reservation.title2") })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-md text-sm leading-relaxed text-ivory/70", children: t("reservation.blurb") }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: openReservationForm,
                    className: "mt-10 inline-flex items-center gap-3 rounded-full border border-gold bg-gold px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-transparent hover:text-gold",
                    children: [
                      t("reservation.cta"),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                    ]
                  }
                )
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          DialogContent,
          {
            onCloseAutoFocus: (event) => event.preventDefault(),
            className: "max-h-[92dvh] max-w-2xl overflow-y-auto border-white/15 bg-background/95 p-6 text-ivory shadow-[0_24px_90px_-40px_rgba(0,0,0,0.9)] sm:rounded-[2rem] sm:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t("reservation.dialogEyebrow") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { className: "text-display mt-3 text-3xl font-normal text-ivory sm:text-4xl", children: t("reservation.dialogTitle") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { className: "mt-3 max-w-md text-sm leading-relaxed text-ivory/65", children: t("reservation.dialogDesc") })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-6 text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("reservation.name"), htmlFor: "reservation-name", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "reservation-name",
                      name: "name",
                      type: "text",
                      autoComplete: "name",
                      required: true,
                      placeholder: t("reservation.namePh"),
                      className: "h-11 border-white/15 bg-white/5 text-ivory placeholder:text-ivory/35 focus-visible:ring-gold/60"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("reservation.phone"), htmlFor: "reservation-phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "reservation-phone",
                      name: "phone",
                      type: "tel",
                      autoComplete: "tel",
                      required: true,
                      placeholder: "+49 …",
                      className: "h-11 border-white/15 bg-white/5 text-ivory placeholder:text-ivory/35 focus-visible:ring-gold/60"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("reservation.people"), htmlFor: "reservation-people", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "reservation-people",
                      name: "people",
                      type: "number",
                      min: "1",
                      max: "20",
                      required: true,
                      placeholder: "2",
                      className: "h-11 border-white/15 bg-white/5 text-ivory placeholder:text-ivory/35 focus-visible:ring-gold/60"
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("reservation.time"), htmlFor: "reservation-time", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "reservation-time",
                      name: "timeWindow",
                      required: true,
                      defaultValue: "",
                      className: "flex h-11 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-ivory shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: t("reservation.selectWindow") }),
                        timeWindows.map((window2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: window2, className: "bg-background text-ivory", children: window2 }, window2))
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "submit",
                    className: "mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full border border-gold bg-gold px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-transparent hover:text-gold",
                    children: [
                      submitted ? t("reservation.submitDone") : t("reservation.submit"),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs leading-relaxed text-ivory/55", children: submitted ? t("reservation.thankYou") : t("reservation.note") })
              ] })
            ]
          }
        )
      ]
    }
  );
}
function Field({
  label,
  htmlFor,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor, className: "text-[10px] uppercase tracking-[0.28em] text-gold", children: label }),
    children
  ] });
}
export {
  Dialog as D,
  Footer as F,
  Navbar as N,
  ReservationCTA as R,
  DialogContent as a,
  DialogTitle as b,
  DialogDescription as c,
  cn as d,
  useReveal as u
};
