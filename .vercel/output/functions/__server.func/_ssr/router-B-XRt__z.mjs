import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-DIlx0-gi.css";
const LOCALE_STORAGE_KEY = "dionysos-locale";
const translations = {
  de: {
    "nav.main": "Hauptnavigation",
    "nav.menu": "Speisekarte",
    "nav.about": "Über uns",
    "nav.book": "Tisch reservieren",
    "nav.toggle": "Menü öffnen",
    "nav.home": "Dionysos — Zur Startseite",
    "lang.deShort": "DE",
    "lang.enShort": "EN",
    "lang.switch": "Sprache",
    "hero.plateAlt": "Griechische Meeresfrüchte: gegrillte Garnelen, Muscheln und Calamari auf großer Platte vor dunklem Marmor",
    "hero.reviewsAlt": "5 Sterne — Bewertungen",
    "hero.socialLabel": "Social Media und Kontakt",
    "hero.establishment": "Griechische Gastronomie · Est. 1999",
    "hero.headline1": "Exklusive",
    "hero.headline2": "Griechische Kulinarik.",
    "hero.cardMenu.badge": "SPEISEKARTE",
    "hero.cardMenu.alt": "Speisekarte",
    "hero.cardReservation.badge": "RESERVIERUNG",
    "hero.cardReservation.alt": "Reservierung",
    "hero.cardRestaurant.badge": "UNSER RESTAURANT",
    "hero.cardRestaurant.alt": "Unser Restaurant",
    "social.instagram": "Instagram",
    "social.mail": "E-Mail",
    "social.location": "Standort",
    "intro.eyebrow": "Philosophie",
    "intro.p1": "Ein raffiniertes Erlebnis, das ",
    "intro.e1": "Präzision,",
    "intro.p2": " ",
    "intro.e2": "Atmosphäre,",
    "intro.p3": " und ",
    "intro.e3": "unvergesslichen Geschmack",
    "intro.p4": " vereint.",
    "signature.eyebrow": "Die Speisekarte",
    "signature.title1": "Signature-",
    "signature.title2": "Gerichte",
    "signature.blurb": "Frische Zutaten, raffinierte Technik und moderne griechische Aromen — täglich für ein besonderes Erlebnis.",
    "signature.cta": "Zur vollen Speisekarte",
    "dish1.name": "Beeriges Cheesecake",
    "dish1.desc": "Cremiges Cheesecake mit Beerenspiegel, frischen Erdbeeren und Minze.",
    "dish2.name": "Honig-Sesam-Feta",
    "dish2.desc": "Knusprige Feta-Päckchen mit griechischem Thymianhonig und geröstetem Sesam.",
    "dish3.name": "Mediterrane Meeresfrüchteplatte",
    "dish3.desc": "Gegrillter Lachs mit saisonalem Gemüse, Kräutercreme und Zitrone.",
    "gallery.eyebrow": "Ambiente",
    "gallery.title1": "Der",
    "gallery.title2": "Raum.",
    "gallery.alt01": "Intimer Speisewinkel mit Marmortisch und beleuchtetem Wandbild",
    "gallery.alt02": "Dionysos-Karte und Interior-Detail",
    "gallery.alt03": "Beeriges Cheesecake-Dessert mit Minze",
    "gallery.alt04": "Knuspriger Feta mit Sesam und Honig",
    "gallery.alt05": "Gegrillter Lachs mit saisonalem Gemüse",
    "gallery.alt06": "Weinflasche und Glas auf Marmor",
    "gallery.alt07": "Speiseraum mit Banquettes und Halo-Licht",
    "gallery.alt08": "Beleuchteter runder Spiegel, Grün und Marmorwand",
    "gallery.alt09": "Marmortisch, Ledersessel und Halo-Pendelleuchten",
    "gallery.alt10": "Dionysos-Ziegelwand, Spiegel und Olivensitz",
    "gallery.lightboxTitle": "Vollansicht",
    "gallery.lightboxDesc": "Foto in voller Größe. Schließen mit Escape oder X.",
    "gallery.expandPrefix": "Vollansicht: ",
    "reservation.eyebrow": "Reservieren",
    "reservation.title1": "Ein Abend,",
    "reservation.title2": "für Sie kuratiert.",
    "reservation.blurb": "Teilen Sie uns ein paar Details mit — unser Team bestätigt Ihre Reservierung persönlich.",
    "reservation.cta": "Tisch reservieren",
    "reservation.dialogEyebrow": "Reservierung",
    "reservation.dialogTitle": "Tisch anfragen",
    "reservation.dialogDesc": "Nennen Sie uns Ihr bevorzugtes Zeitfenster — wir bestätigen telefonisch.",
    "reservation.name": "Name",
    "reservation.phone": "Telefon",
    "reservation.people": "Personen",
    "reservation.time": "Bevorzugte Zeit",
    "reservation.namePh": "Ihr Name",
    "reservation.selectWindow": "2-Stunden-Fenster wählen",
    "reservation.submit": "Anfrage senden",
    "reservation.submitDone": "Anfrage erhalten",
    "reservation.thankYou": "Vielen Dank. Wir melden uns telefonisch bei Ihnen.",
    "reservation.note": "Reservierungen werden telefonisch bestätigt.",
    "reservation.ariaRoom": "Restaurant-Speiseraum bei Nacht",
    "reservation.time1": "11:00 – 13:00",
    "reservation.time2": "13:00 – 15:00",
    "reservation.time3": "17:30 – 19:30",
    "reservation.time4": "19:30 – 21:30",
    "reservation.time5": "21:30 – 23:00",
    "reservation.time6": "22:00 – 00:00 · Fr–Sa",
    "footer.tagline": "Saisonale griechische Aromen, elegantes Ambiente und ein kulinarisches Erlebnis zum Erinnern.",
    "footer.visit": "Besuch",
    "footer.hours": "Öffnungszeiten",
    "footer.contact": "Kontakt",
    "footer.hoursWeekday": "Mo–Do und So",
    "footer.hoursWeekend": "Fr–Sa",
    "footer.reserve": "Tisch reservieren",
    "footer.copyright": "Alle Rechte vorbehalten.",
    "footer.crafted": "Mit Sorgfalt gestaltet.",
    "menuPage.back": "Zur Startseite",
    "menuPage.eyebrow": "Restaurant Dionysos",
    "menuPage.title1": "Unsere",
    "menuPage.title2": "Speisekarte",
    "menuPage.intro": "Saisonale griechische Klassiker, frische Meeresfrüchte, Spezialitäten vom Grill, traditionelle Desserts und ausgewählte Getränke in elegantem Ambiente.",
    "menuPage.curated": "Auswahl",
    "menuPage.selectHint": "Gericht antippen für Vorschau",
    "menuPage.sectionHeading": "Griechische Klassiker,",
    "menuPage.sectionHeadingGold": "serviert mit Eleganz.",
    "menuPage.drinksCombined": "Getränke",
    "error.title": "Seite konnte nicht geladen werden",
    "error.body": "Ein Fehler ist aufgetreten. Bitte erneut versuchen oder zur Startseite.",
    "error.retry": "Erneut versuchen",
    "error.home": "Zur Startseite",
    "notFound.title": "Seite nicht gefunden",
    "notFound.body": "Die Seite existiert nicht oder wurde verschoben.",
    "notFound.home": "Zur Startseite",
    "meta.rootTitle": "Dionysos — Griechische Kulinarik in Eching",
    "meta.rootDesc": "Restaurant Dionysos: exklusive griechische Küche, edles Ambiente und persönlicher Service in Eching.",
    "meta.author": "Restaurant Dionysos"
  },
  en: {
    "nav.main": "Main navigation",
    "nav.menu": "Menu",
    "nav.about": "About",
    "nav.book": "Book a table",
    "nav.toggle": "Toggle menu",
    "nav.home": "Dionysos — Home",
    "lang.deShort": "DE",
    "lang.enShort": "EN",
    "lang.switch": "Language",
    "hero.plateAlt": "Greek seafood: grilled shrimp, mussels, and calamari on a large platter against dark marble",
    "hero.reviewsAlt": "5 stars — reviews",
    "hero.socialLabel": "Social links and contact",
    "hero.establishment": "Greek Gastronomy · Est. 1999",
    "hero.headline1": "Exclusive",
    "hero.headline2": "Greek culinary art.",
    "hero.cardMenu.badge": "MENU",
    "hero.cardMenu.alt": "Menu",
    "hero.cardReservation.badge": "RESERVATION",
    "hero.cardReservation.alt": "Reservation",
    "hero.cardRestaurant.badge": "OUR RESTAURANT",
    "hero.cardRestaurant.alt": "Our restaurant",
    "social.instagram": "Instagram",
    "social.mail": "Email",
    "social.location": "Location",
    "intro.eyebrow": "Philosophy",
    "intro.p1": "A refined dining experience built around ",
    "intro.e1": "precision,",
    "intro.p2": " ",
    "intro.e2": "atmosphere,",
    "intro.p3": " and ",
    "intro.e3": "unforgettable taste",
    "intro.p4": ".",
    "signature.eyebrow": "The Menu",
    "signature.title1": "Signature",
    "signature.title2": "dishes",
    "signature.blurb": "Fresh ingredients, refined techniques, and modern Greek flavors, crafted daily for an elevated dining experience.",
    "signature.cta": "View full menu",
    "dish1.name": "Crimson Cheesecake",
    "dish1.desc": "Creamy cheesecake finished with berry glaze, fresh strawberries, and mint.",
    "dish2.name": "Honey Sesame Feta",
    "dish2.desc": "Crispy feta parcels glazed with Greek thyme honey and toasted sesame.",
    "dish3.name": "Mediterranean Seafood Plate",
    "dish3.desc": "Grilled salmon and seasonal vegetables served with herb cream and lemon.",
    "gallery.eyebrow": "Atmosphere",
    "gallery.title1": "The",
    "gallery.title2": "room.",
    "gallery.alt01": "Intimate dining nook with marble table and backlit mural",
    "gallery.alt02": "Dionysos brand card and interior detail",
    "gallery.alt03": "Berry cheesecake dessert with mint garnish",
    "gallery.alt04": "Crispy feta with sesame and honey",
    "gallery.alt05": "Grilled salmon with seasonal vegetables",
    "gallery.alt06": "Wine bottle and glass on marble",
    "gallery.alt07": "Dining room with banquettes and halo lighting",
    "gallery.alt08": "Backlit circular mirror, greenery, and marble wall",
    "gallery.alt09": "Marble table, leather chairs, and halo pendants",
    "gallery.alt10": "Dionysos brick wall, mirrors, and olive seating",
    "gallery.lightboxTitle": "Full view",
    "gallery.lightboxDesc": "Full-size photo. Close with Escape or X.",
    "gallery.expandPrefix": "Full view: ",
    "reservation.eyebrow": "Reserve",
    "reservation.title1": "An evening,",
    "reservation.title2": "curated for you.",
    "reservation.blurb": "Share a few details with us and our team will confirm your reservation personally.",
    "reservation.cta": "Reserve your table",
    "reservation.dialogEyebrow": "Reservation",
    "reservation.dialogTitle": "Request a table",
    "reservation.dialogDesc": "Send us your preferred time window and our team will confirm your reservation by phone.",
    "reservation.name": "Name",
    "reservation.phone": "Phone number",
    "reservation.people": "Number of people",
    "reservation.time": "Preferred time",
    "reservation.namePh": "Your name",
    "reservation.selectWindow": "Select a 2-hour window",
    "reservation.submit": "Request reservation",
    "reservation.submitDone": "Request received",
    "reservation.thankYou": "Thank you. Our team will confirm your reservation by phone.",
    "reservation.note": "Reservation requests are confirmed by phone.",
    "reservation.ariaRoom": "Restaurant dining room at night",
    "reservation.time1": "11:00 – 13:00",
    "reservation.time2": "13:00 – 15:00",
    "reservation.time3": "17:30 – 19:30",
    "reservation.time4": "19:30 – 21:30",
    "reservation.time5": "21:30 – 23:00",
    "reservation.time6": "22:00 – 00:00 · Fri – Sat",
    "footer.tagline": "Seasonal Greek flavors, elegant surroundings, and a dining experience designed to be remembered.",
    "footer.visit": "Visit",
    "footer.hours": "Hours",
    "footer.contact": "Contact",
    "footer.hoursWeekday": "Mon – Thu and Sun",
    "footer.hoursWeekend": "Fri – Sat",
    "footer.reserve": "Reserve a table",
    "footer.copyright": "All rights reserved.",
    "footer.crafted": "Crafted with intention.",
    "menuPage.back": "Back to home",
    "menuPage.eyebrow": "Restaurant Dionysos",
    "menuPage.title1": "Our",
    "menuPage.title2": "menu",
    "menuPage.intro": "Seasonal Greek classics, fresh seafood, grilled specialties, traditional desserts, and carefully selected drinks served in elegant surroundings.",
    "menuPage.curated": "Curated selection",
    "menuPage.selectHint": "Select a dish to preview it",
    "menuPage.sectionHeading": "Greek classics,",
    "menuPage.sectionHeadingGold": "served with elegance.",
    "menuPage.drinksCombined": "Drinks",
    "error.title": "This page didn't load",
    "error.body": "Something went wrong on our end. You can try refreshing or head back home.",
    "error.retry": "Try again",
    "error.home": "Go home",
    "notFound.title": "Page not found",
    "notFound.body": "The page you're looking for doesn't exist or has been moved.",
    "notFound.home": "Go home",
    "meta.rootTitle": "Dionysos — Greek dining in Eching",
    "meta.rootDesc": "Restaurant Dionysos: refined Greek cuisine, elegant atmosphere, and personal service in Eching.",
    "meta.author": "Restaurant Dionysos"
  }
};
const I18nContext = reactExports.createContext(null);
function readStoredLocale() {
  if (typeof window === "undefined") return "de";
  try {
    const raw = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return raw === "en" ? "en" : "de";
  } catch {
    return "de";
  }
}
function I18nProvider({ children }) {
  const [locale, setLocaleState] = reactExports.useState("de");
  reactExports.useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "de" ? "de" : "en";
    }
  }, [locale]);
  const setLocale = reactExports.useCallback((next) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
    }
  }, []);
  const t = reactExports.useCallback(
    (key) => {
      const table = translations[locale];
      return table[key] ?? translations.de[key] ?? key;
    },
    [locale]
  );
  const value = reactExports.useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nContext.Provider, { value, children });
}
function useI18n() {
  const ctx = reactExports.useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
function NotFoundComponent() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: t("notFound.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t("notFound.body") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: t("notFound.home")
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: t("error.title") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t("error.body") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: t("error.retry")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: t("error.home")
        }
      )
    ] })
  ] }) });
}
const de$1 = translations.de;
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: de$1["meta.rootTitle"] },
      { name: "description", content: de$1["meta.rootDesc"] },
      { name: "author", content: de$1["meta.author"] },
      { property: "og:title", content: de$1["meta.rootTitle"] },
      { property: "og:description", content: de$1["meta.rootDesc"] },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "de", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$1 = () => import("./menu-CudsiBTl.mjs");
const Route$1 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Speisekarte — Restaurant Dionysos Eching"
    }, {
      name: "description",
      content: "Speisekarte Restaurant Dionysos: griechische Vorspeisen, Meeresfrüchte, Gyros, Grill-Spezialitäten, Desserts, Weine und Getränke."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const heroPlate = "/assets/hero-plate-54FkhiHT.png";
const $$splitComponentImporter = () => import("./index-DtFZL44O.mjs");
const de = translations.de;
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Dionysos",
  description: de["meta.rootDesc"],
  servesCuisine: ["Greek", "Mediterranean"],
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Freisinger Str. 3",
    addressLocality: "Eching",
    postalCode: "85386",
    addressCountry: "DE"
  },
  telephone: "+49 81 65 707 744",
  openingHours: ["Mo-Th,Su 11:00-15:00", "Mo-Th,Su 17:30-23:00", "Fr-Sa 11:00-15:00", "Fr-Sa 17:30-00:00"],
  image: heroPlate
};
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Dionysos — Exklusive Griechische Kulinarik"
    }, {
      name: "description",
      content: "Dionysos: exklusive griechische Kulinarik — edles Ambiente, saisonale Küche und ein unvergessliches Erlebnis."
    }, {
      property: "og:title",
      content: "Dionysos — Exklusive Griechische Kulinarik"
    }, {
      property: "og:description",
      content: "Raffinierte griechische Küche in stilvollem Rahmen. Reservieren Sie Ihren Tisch."
    }, {
      property: "og:type",
      content: "restaurant.restaurant"
    }, {
      property: "og:image",
      content: heroPlate
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:image",
      content: heroPlate
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: ""
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(jsonLd)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const MenuRoute = Route$1.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  MenuRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  heroPlate as h,
  router as r,
  useI18n as u
};
