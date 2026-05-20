import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar, R as ReservationCTA, F as Footer } from "./ReservationCTA-DaVwdDzd.mjs";
import { u as useI18n } from "./router-B-XRt__z.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
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
const MENU_SECTIONS_DE = [
  {
    title: "Kalte Vorspeisen",
    items: [
      ["Tzatziki", "Griechischer Joghurt mit Gurke, Knoblauch und Olivenöl."],
      ["Auberginensalat", "Geräucherter Auberginenaufstrich mit mediterranen Kräutern."],
      ["Kalamarisalat", "Zarter Tintenfischsalat mit frischen mediterranen Aromen."],
      ["Taramosalata", "Klassischer Fischrogenaufstrich mit Olivenöl und Zitrone."],
      ["Kalte Meze-Platte", "Auswahl traditioneller griechischer kalter Vorspeisen."]
    ]
  },
  {
    title: "Warme Vorspeisen",
    items: [
      ["Dolmades", "Gefüllte Weinblätter mit Reis und Kräutern."],
      ["Gegrillte Aubergine & Zucchini", "Vom Grill mit Tzatziki serviert."],
      ["Gegrillte Paprika", "Geröstete Paprika mit Knoblauch und Olivenöl."],
      ["Muscheln aus dem Ofen", "Gebackene Muscheln mit Kräuterbutter."],
      ["Gegrillter Oktopus", "Zarter Oktopus mediterran vom Grill."],
      ["Warme Meze-Platte", "Auswahl warmer griechischer Vorspeisen und Spezialitäten."],
      ["Kolokithokeftedes", "Griechische Zucchini-Frikadellen mit Tzatziki."]
    ]
  },
  {
    title: "Suppen",
    items: [
      ["Bohnensuppe", "Traditionelle griechische Bohnensuppe."],
      ["Tomatensuppe", "Kräftige Tomatensuppe mit mediterranen Kräutern."],
      ["Griechische Fischsuppe", "Klassische Meeresfrüchtesuppe auf griechische Art."]
    ]
  },
  {
    title: "Käsespezialitäten",
    items: [
      ["Mastelo", "Traditioneller gegrillter griechischer Käse."],
      ["Tiropitakia", "Knusprige Filoteig-Taschen mit Käsefüllung."],
      ["Gegrillter Feta", "Warmer Fetakäse vom Grill."],
      ["Saganaki", "Goldgelb ausgebackener griechischer Käse."],
      ["Gefüllte Paprika", "Paprika gefüllt mit Fetakäse."]
    ]
  },
  {
    title: "Salate",
    items: [
      ["Thunfischsalat", "Frischer Salat mit Thunfisch und mediterranem Dressing."],
      ["Griechischer Bauernsalat", "Klassisch mit Tomate, Gurke, Feta und Oliven."],
      ["Hähnchensalat", "Gemischter Salat mit gegrilltem Hähnchen."]
    ]
  },
  {
    title: "Beilagen",
    items: [
      ["Pita-Brot", "Traditionelles griechisches Fladenbrot."],
      ["Knoblauch-Pita", "Warmes Pita mit Knoblauch."],
      ["Pommes frites", "Goldgelb und knusprig."],
      ["Käse-Knoblauchbrot", "Knoblauchbrot mit geschmolzenem Käse."],
      ["Vegetarischer Teller", "Gegrilltes Gemüse mit Reis und Salat."],
      ["Metaxa-Pilzsauce", "Cremige Metaxa-Sauce mit Pilzen."]
    ]
  },
  {
    title: "Fisch & Meeresfrüchte",
    items: [
      ["Gegrillter Kalamari", "Tintenfisch vom Grill mit Salat und Reis."],
      ["Seebrassenfilet vom Grill", "Frisches Fischfilet mit mediterranen Beilagen."],
      ["Gegrillte Königsgarnelen", "Große Garnelen vom Grill mit Gemüse."],
      ["Lachsfilet vom Grill", "Frischer Lachs mediterran zubereitet."],
      ["Meeresfrüchteplatte", "Auswahl gegrillter Meeresfrüchte-Spezialitäten."],
      ["Frische Dorade", "Ganze Dorade vom Grill mit Gemüse."]
    ]
  },
  {
    title: "Gyros-Spezialitäten",
    items: [
      ["Klassisches Gyros", "Traditionelles Gyros mit Salat, Reis und Tzatziki."],
      ["Gyros-Spezial aus dem Ofen", "Gyros mit Pilzen und Metaxa-Sauce aus dem Ofen."]
    ]
  },
  {
    title: "Spezialitäten vom Grill",
    items: [
      ["Giaourtlou", "Traditionelle griechische Hackfleischspezialität mit Joghurtsauce."],
      ["Bifteki", "Gefülltes griechisches Hacksteak mit Feta."],
      ["Souvlaki", "Gegrillte Fleischspieße mit griechischen Beilagen."],
      ["Gefülltes Souvlaki", "Souvlaki mit Fetakäse gefüllt."],
      ["Hähnchenschnitzel", "Knuspriges Hähnchenschnitzel mit Pommes."],
      ["Lammkronen", "Premium-Lammkoteletts vom Grill."]
    ]
  },
  {
    title: "Gemischte Grillteller",
    items: [
      ["Paros-Teller", "Gyros und Kalamari mit griechischen Beilagen."],
      ["Irodion-Teller", "Kombination aus Gyros, Souvlaki und Fleischspezialitäten."],
      ["Haus-Teller", "Große Grillauswahl mit Lammkotelett und Fleisch."],
      ["Dorf-Teller", "Traditioneller griechischer Grillteller."],
      ["Platon-Platte", "Große Platte zum Teilen für Gruppen."]
    ]
  },
  {
    title: "Filets vom Grill",
    items: [
      ["Lammfilet-Teller", "Zartes Lammfilet mit Kräuterbutter."],
      ["Rinderfilet", "Premium-Rinderfilet mit Pfeffersauce."],
      ["Hähnchenfilet", "Gegrilltes Hähnchenfilet mit Pilzsauce."],
      ["Putenbrustfilet", "Zarte Pute mit Kräuterbutter."]
    ]
  },
  {
    title: "Ofenspezialitäten",
    items: [
      ["Kritharaki", "Griechisch gebackene Nudeln mit Hackfleisch und Käse."],
      ["Moussaka", "Traditioneller griechischer Auflauf mit Aubergine und Hackfleisch."],
      ["Vegetarische Moussaka", "Vegetarische Variante des Klassikers."],
      ["Lammhaxe mit Riesenbohnen", "Langsam geschmort mit Riesenbohnen und Käse."],
      ["Lammhaxe mit Kritharaki", "Geschmortes Lamm mit griechischen Nudeln."],
      ["Lammhaxe mit grünen Bohnen", "Zartes Lamm mit grünen Bohnen und mediterraner Sauce."]
    ]
  },
  {
    title: "Desserts",
    items: [
      ["Cheesecake", "Cremiges Cheesecake mit Beerentopping."],
      ["Schokoladen-Soufflé", "Warmer Schokoladenkuchen mit Vanilleeis."],
      ["Griechischer Joghurt mit Honig & Nüssen", "Traditionell mit Honig und Walnüssen."],
      ["Galaktoboureko", "Griechischer Filoteig mit Vanillepudding."],
      ["Baklava mit Eis", "Schichtfiloteig mit Honig und Nüssen."],
      ["Dessertplatte", "Auswahl traditioneller griechischer Desserts."],
      ["Griechischer Schokoladenkuchen", "Intensiver Schokoladenkuchen auf griechische Art."]
    ]
  },
  {
    title: "Heiße Getränke",
    items: [
      ["Griechischer Mokka", "Traditioneller griechischer Kaffee."],
      ["Kaffee", "Frisch gebrühter Kaffee."],
      ["Cappuccino", "Milchkaffee auf italienische Art."],
      ["Espresso", "Kräftiger Espresso."],
      ["Latte Macchiato", "Geschichteter Milchkaffee."],
      ["Heiße Schokolade", "Warme Schokolade mit Sahne."]
    ]
  },
  {
    title: "Aperitifs",
    items: [
      ["Prosecco", "Perlender italienischer Wein."],
      ["Campari", "Klassischer bitterer Aperitif."],
      ["Aperol", "Erfrischender italienischer Aperitif."],
      ["Hugo", "Holunderblüten-Spritzcocktail."],
      ["Lillet", "Französischer weinbasierter Aperitif."]
    ]
  },
  {
    title: "Getränke & Spirituosen",
    items: [
      ["Ouzo", "Traditioneller griechischer Anisschnaps."],
      ["Baileys", "Sahnelikör."],
      ["Ramazzotti", "Italienischer Kräuterlikör."],
      ["Bacardi Cola", "Rum mit Cola."],
      ["Vodka Lemon", "Wodka mit Zitronenlimo."],
      ["Whisky Cola", "Whisky mit Cola."],
      ["Gin Tonic", "Klassischer Gin Tonic."],
      ["Metaxa Special", "Premium-griechischer Bernsteinschnaps."]
    ]
  },
  {
    title: "Griechische Weine",
    items: [
      ["Rotwein Haus", "Runder traditioneller griechischer Rotwein."],
      ["Roséwein", "Leicht und erfrischend."],
      ["Weißwein Haus", "Frischer griechischer Weißwein."],
      ["Retsina", "Klassischer griechischer Wein mit Piniennote."],
      ["Merlot", "Kräftiger, ausgewogener Rotwein."]
    ]
  }
];
const MENU_SECTIONS_EN = [
  {
    title: "Cold Starters",
    items: [
      ["Tzatziki", "Greek yogurt with cucumber, garlic, and olive oil."],
      ["Eggplant Salad", "Smoked eggplant spread with Mediterranean herbs."],
      ["Kalamari Salad", "Tender squid salad with fresh Mediterranean flavors."],
      ["Taramosalata", "Traditional fish roe spread with olive oil and lemon."],
      ["Cold Meze Platter", "Selection of traditional Greek cold appetizers."]
    ]
  },
  {
    title: "Warm Starters",
    items: [
      ["Dolmades", "Stuffed vine leaves with rice and herbs."],
      ["Grilled Aubergine & Zucchini", "Chargrilled vegetables served with tzatziki."],
      ["Grilled Peppers", "Roasted peppers with garlic and olive oil."],
      ["Mussels from the Oven", "Baked mussels finished with herb butter."],
      ["Grilled Octopus", "Tender octopus grilled Mediterranean style."],
      ["Warm Meze Platter", "Selection of warm Greek appetizers and specialties."],
      ["Kolokithokeftedes", "Greek zucchini fritters served with tzatziki."]
    ]
  },
  {
    title: "Soups",
    items: [
      ["Bean Soup", "Traditional Greek bean soup."],
      ["Tomato Soup", "Rich tomato soup with Mediterranean herbs."],
      ["Greek Fish Soup", "Classic seafood soup prepared Greek style."]
    ]
  },
  {
    title: "Cheese Specialties",
    items: [
      ["Mastelo", "Traditional grilled Greek cheese."],
      ["Tiropitakia", "Crispy filo pastries filled with cheese."],
      ["Grilled Feta", "Warm feta cheese grilled to perfection."],
      ["Saganaki", "Golden fried Greek cheese."],
      ["Stuffed Paprika", "Peppers filled with feta cheese."]
    ]
  },
  {
    title: "Salads",
    items: [
      ["Tuna Salad", "Fresh salad with tuna and Mediterranean dressing."],
      ["Greek Village Salad", "Classic Greek salad with tomato, cucumber, feta, and olives."],
      ["Chicken Salad", "Fresh mixed salad with grilled chicken."]
    ]
  },
  {
    title: "Side Dishes",
    items: [
      ["Pita Bread", "Traditional Greek flatbread."],
      ["Garlic Pita", "Warm pita bread with garlic."],
      ["French Fries", "Golden crispy fries."],
      ["Cheese Garlic Bread", "Garlic bread topped with melted cheese."],
      ["Vegetarian Plate", "Grilled vegetables with rice and salad."],
      ["Metaxa Mushroom Sauce", "Creamy Metaxa sauce with mushrooms."]
    ]
  },
  {
    title: "Fish & Seafood",
    items: [
      ["Grilled Kalamari", "Grilled squid served with salad and rice."],
      ["Grilled Sea Bream Fillet", "Fresh fish fillet with Mediterranean sides."],
      ["Grilled King Prawns", "Large grilled prawns with vegetables."],
      ["Grilled Salmon Fillet", "Fresh salmon served Mediterranean style."],
      ["Seafood Platter", "Selection of grilled seafood specialties."],
      ["Fresh Dorade", "Whole grilled sea bream with vegetables."]
    ]
  },
  {
    title: "Gyros Specialties",
    items: [
      ["Classic Gyros", "Traditional Greek gyros with salad, rice, and tzatziki."],
      ["Baked Gyros Special", "Gyros baked with mushrooms and Metaxa sauce."]
    ]
  },
  {
    title: "Grill Specialties",
    items: [
      ["Giaourtlou", "Traditional Greek minced meat specialty with yogurt sauce."],
      ["Bifteki", "Greek stuffed minced meat steak with feta."],
      ["Souvlaki", "Grilled meat skewers with Greek sides."],
      ["Stuffed Souvlaki", "Souvlaki filled with feta cheese."],
      ["Chicken Schnitzel", "Crispy chicken schnitzel with fries."],
      ["Lamb Chop Crown", "Premium grilled lamb chops."]
    ]
  },
  {
    title: "Mixed Grill Platters",
    items: [
      ["Paros Plate", "Gyros and calamari served with Greek sides."],
      ["Irodion Plate", "Combination of gyros, souvlaki, and Greek meat specialties."],
      ["House Plate", "Large mixed grill selection with lamb chop and meats."],
      ["Village Plate", "Traditional Greek mixed grill platter."],
      ["Platon Platter", "Large sharing platter for groups."]
    ]
  },
  {
    title: "Filets from the Grill",
    items: [
      ["Lamb Filet Plate", "Tender lamb filet with herb butter."],
      ["Beef Filet", "Premium beef filet with pepper sauce."],
      ["Chicken Filet", "Grilled chicken filet with mushroom sauce."],
      ["Turkey Breast Filet", "Tender turkey filet with herb butter."]
    ]
  },
  {
    title: "Oven Specialties",
    items: [
      ["Kritharaki", "Greek-style baked pasta with minced meat and cheese."],
      ["Moussaka", "Traditional layered Greek casserole with eggplant and minced meat."],
      ["Vegetarian Moussaka", "Vegetarian version of the Greek classic."],
      ["Lamb Shank with Giant Beans", "Slow-cooked lamb with giant beans and cheese."],
      ["Lamb Shank with Kritharaki", "Braised lamb served with Greek pasta."],
      ["Lamb Shank with Green Beans", "Tender lamb with green beans and Mediterranean sauce."]
    ]
  },
  {
    title: "Desserts",
    items: [
      ["Cheesecake", "Creamy cheesecake with berry topping."],
      ["Chocolate Soufflé", "Warm chocolate cake served with vanilla ice cream."],
      ["Greek Yogurt with Honey & Nuts", "Traditional Greek yogurt with honey and walnuts."],
      ["Galaktoboureko", "Greek filo pastry filled with vanilla custard."],
      ["Baklava with Ice Cream", "Layered filo pastry with honey and nuts."],
      ["Dessert Platter", "Selection of traditional Greek desserts."],
      ["Greek Chocolate Cake", "Rich chocolate cake Greek style."]
    ]
  },
  {
    title: "Hot Drinks",
    items: [
      ["Greek Mocha", "Traditional Greek coffee."],
      ["Coffee", "Classic freshly brewed coffee."],
      ["Cappuccino", "Italian-style milk coffee."],
      ["Espresso", "Strong espresso shot."],
      ["Latte Macchiato", "Creamy layered milk coffee."],
      ["Hot Chocolate", "Warm chocolate drink with cream."]
    ]
  },
  {
    title: "Aperitifs",
    items: [
      ["Prosecco", "Sparkling Italian wine."],
      ["Campari", "Classic bitter aperitif."],
      ["Aperol", "Refreshing Italian aperitif."],
      ["Hugo", "Elderflower sparkling cocktail."],
      ["Lillet", "French wine-based aperitif."]
    ]
  },
  {
    title: "Drinks & Spirits",
    items: [
      ["Ouzo", "Traditional Greek anise spirit."],
      ["Baileys", "Cream liqueur."],
      ["Ramazzotti", "Italian herbal liqueur."],
      ["Bacardi Cola", "Rum mixed with cola."],
      ["Vodka Lemon", "Vodka with lemon soda."],
      ["Whisky Cola", "Whisky served with cola."],
      ["Gin Tonic", "Classic gin and tonic."],
      ["Metaxa Special", "Premium Greek amber spirit."]
    ]
  },
  {
    title: "Greek Wines",
    items: [
      ["Red House Wine", "Smooth traditional Greek red wine."],
      ["Rosé Wine", "Light and refreshing rosé."],
      ["White House Wine", "Fresh Greek white wine."],
      ["Retsina", "Classic Greek wine with pine aroma."],
      ["Merlot", "Rich and balanced red wine."]
    ]
  }
];
function rowEntries(all, si) {
  return all[si].items.map((item, ii) => ({
    name: item[0],
    description: item[1],
    si,
    ii
  }));
}
function mergeEntries(all, sis) {
  return sis.flatMap(
    (si) => all[si].items.map((item, ii) => ({
      name: item[0],
      description: item[1],
      si,
      ii
    }))
  );
}
function buildFeaturedBlocks(sections, drinksCombinedTitle) {
  return [
    { title: sections[0].title, entries: rowEntries(sections, 0) },
    { title: sections[1].title, entries: rowEntries(sections, 1) },
    { title: sections[2].title, entries: rowEntries(sections, 2) },
    { title: sections[3].title, entries: rowEntries(sections, 3) },
    { title: sections[4].title, entries: rowEntries(sections, 4) },
    { title: sections[6].title, entries: rowEntries(sections, 6) },
    { title: sections[8].title, entries: mergeEntries(sections, [7, 8, 9, 10, 11]) },
    { title: sections[12].title, entries: rowEntries(sections, 12) },
    { title: drinksCombinedTitle, entries: mergeEntries(sections, [13, 14, 15, 16]) }
  ];
}
const menuIntroBackground = "/assets/gallery-09-CdZ1VE2L.png";
const marbleBackground = "/assets/menu-marble-bg-w2Um-7x9.png";
const menuPhoto1 = "/assets/dish-1-D-1KJflN.png";
const menuPhoto2 = "/assets/dish-2-G_mPfeJN.png";
const menuPhoto3 = "/assets/dish-3-BWUtbl0F.png";
const menuPhoto4 = "/assets/menu-photo-4-C_yEAsvq.png";
const menuPhoto5 = "/assets/menu-photo-5-JHha-Qsy.png";
const DEFAULT_SI = 6;
const DEFAULT_II = 4;
const menuPhotos = [menuPhoto1, menuPhoto2, menuPhoto3, menuPhoto4, menuPhoto5];
function getImageForDishIndices(si, ii) {
  const key = `${si}:${ii}`;
  let hash = 0;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) % menuPhotos.length;
  }
  return menuPhotos[hash];
}
function MenuPage() {
  const {
    locale,
    t
  } = useI18n();
  const sections = locale === "de" ? MENU_SECTIONS_DE : MENU_SECTIONS_EN;
  const featuredBlocks = reactExports.useMemo(() => buildFeaturedBlocks(sections, t("menuPage.drinksCombined")), [sections, t]);
  const [sel, setSel] = reactExports.useState({
    si: DEFAULT_SI,
    ii: DEFAULT_II
  });
  const selectedDish = reactExports.useMemo(() => {
    const row = sections[sel.si].items[sel.ii];
    return {
      category: sections[sel.si].title,
      name: row[0],
      description: row[1],
      image: getImageForDishIndices(sel.si, sel.ii)
    };
  }, [sections, sel.si, sel.ii]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-white/10 px-6 py-20 sm:py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: menuIntroBackground, alt: "", className: "absolute inset-0 h-full w-full object-cover object-center brightness-[0.66] contrast-[1.08] saturate-[1.04]", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(12,9,7,0.88)] via-[rgba(12,9,7,0.58)] to-[rgba(12,9,7,0.34)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-[rgba(12,9,7,0.28)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(202,167,106,0.18),transparent_38%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-ivory/65 transition-colors hover:text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
          t("menuPage.back")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 max-w-3xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t("menuPage.eyebrow") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-display mt-5 text-5xl leading-none text-ivory sm:text-7xl", children: [
            t("menuPage.title1"),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: t("menuPage.title2") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base", children: t("menuPage.intro") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative px-6 py-14 sm:py-18", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: marbleBackground, alt: "", className: "absolute inset-0 h-full w-full object-cover object-center brightness-[0.46] contrast-[1.14] saturate-[1.08]", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[rgba(8,6,5,0.74)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_31%_9%,rgba(202,167,106,0.28),transparent_29%),radial-gradient(circle_at_78%_38%,rgba(202,167,106,0.12),transparent_30%),linear-gradient(115deg,rgba(14,11,9,0.92),rgba(18,14,12,0.72))]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_42%,rgba(0,0,0,0.46)_82%,rgba(0,0,0,0.72)_100%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-[88rem] gap-8 lg:grid-cols-[minmax(0,63fr)_minmax(21rem,37fr)] lg:items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative overflow-hidden rounded-[2rem] border border-gold/20 bg-[rgba(27,22,18,0.76)] p-6 shadow-[0_26px_96px_-54px_rgba(0,0,0,0.95),0_0_42px_rgba(202,167,106,0.07),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl sm:p-8 lg:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-11 border-b border-white/10 pb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: t("menuPage.curated") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.28em] text-ivory/45", children: t("menuPage.selectHint") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-display mt-4 text-5xl text-ivory sm:text-6xl", children: [
              t("menuPage.sectionHeading"),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: t("menuPage.sectionHeadingGold") })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative space-y-12", children: featuredBlocks.map((block, blockIndex) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-white/10 pt-12 first:border-t-0 first:pt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-display shrink-0 text-3xl text-gold sm:text-4xl", children: block.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-x-8 gap-y-5 md:grid-cols-2", children: block.entries.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSel({
              si: entry.si,
              ii: entry.ii
            }), className: `group rounded-2xl border-l px-4 py-3 text-left transition-all duration-300 ${sel.si === entry.si && sel.ii === entry.ii ? "border-gold/75 bg-gold/10 shadow-[0_12px_34px_-30px_rgba(202,167,106,0.8)] ring-1 ring-gold/30" : "border-transparent hover:border-gold/35 hover:bg-white/[0.045]"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold tracking-wide text-ivory transition-colors group-hover:text-gold sm:text-base", children: entry.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground/85", children: entry.description })
            ] }, `${entry.si}-${entry.ii}-${entry.name}`)) })
          ] }, `${block.title}-${blockIndex}`)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "order-first self-start lg:sticky lg:top-8 lg:order-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-gold/18 bg-charcoal shadow-[0_28px_100px_-56px_rgba(0,0,0,0.95),0_0_38px_rgba(202,167,106,0.08)] sm:min-h-[36rem] lg:h-[calc(100dvh-4rem)] lg:min-h-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedDish.image, alt: selectedDish.name, className: "absolute inset-0 h-full w-full object-cover brightness-[1.04] contrast-[1.08] saturate-[1.08] animate-[fade-in_0.45s_ease-out_both]", loading: "lazy" }, `${sel.si}-${sel.ii}`),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[rgba(18,14,12,0.78)] via-transparent to-[rgba(18,14,12,0.18)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/12 bg-[rgba(18,14,12,0.58)] p-5 shadow-[0_18px_60px_-34px_rgba(0,0,0,0.9)] backdrop-blur-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.32em] text-gold", children: selectedDish.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-display mt-2 text-3xl leading-tight text-ivory", children: selectedDish.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-sm text-sm leading-relaxed text-ivory/65", children: selectedDish.description })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ReservationCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  MenuPage as component
};
