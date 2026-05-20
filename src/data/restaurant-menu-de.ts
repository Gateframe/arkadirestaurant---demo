import type { MenuSection } from "./restaurant-menu-types";

export const MENU_SECTIONS_DE: MenuSection[] = [
  {
    title: "Kalte Vorspeisen",
    items: [
      ["Tzatziki", "Griechischer Joghurt mit Gurke, Knoblauch und Olivenöl."],
      ["Auberginensalat", "Geräucherter Auberginenaufstrich mit mediterranen Kräutern."],
      ["Kalamarisalat", "Zarter Tintenfischsalat mit frischen mediterranen Aromen."],
      ["Taramosalata", "Klassischer Fischrogenaufstrich mit Olivenöl und Zitrone."],
      ["Kalte Meze-Platte", "Auswahl traditioneller griechischer kalter Vorspeisen."],
    ],
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
      ["Kolokithokeftedes", "Griechische Zucchini-Frikadellen mit Tzatziki."],
    ],
  },
  {
    title: "Suppen",
    items: [
      ["Bohnensuppe", "Traditionelle griechische Bohnensuppe."],
      ["Tomatensuppe", "Kräftige Tomatensuppe mit mediterranen Kräutern."],
      ["Griechische Fischsuppe", "Klassische Meeresfrüchtesuppe auf griechische Art."],
    ],
  },
  {
    title: "Käsespezialitäten",
    items: [
      ["Mastelo", "Traditioneller gegrillter griechischer Käse."],
      ["Tiropitakia", "Knusprige Filoteig-Taschen mit Käsefüllung."],
      ["Gegrillter Feta", "Warmer Fetakäse vom Grill."],
      ["Saganaki", "Goldgelb ausgebackener griechischer Käse."],
      ["Gefüllte Paprika", "Paprika gefüllt mit Fetakäse."],
    ],
  },
  {
    title: "Salate",
    items: [
      ["Thunfischsalat", "Frischer Salat mit Thunfisch und mediterranem Dressing."],
      ["Griechischer Bauernsalat", "Klassisch mit Tomate, Gurke, Feta und Oliven."],
      ["Hähnchensalat", "Gemischter Salat mit gegrilltem Hähnchen."],
    ],
  },
  {
    title: "Beilagen",
    items: [
      ["Pita-Brot", "Traditionelles griechisches Fladenbrot."],
      ["Knoblauch-Pita", "Warmes Pita mit Knoblauch."],
      ["Pommes frites", "Goldgelb und knusprig."],
      ["Käse-Knoblauchbrot", "Knoblauchbrot mit geschmolzenem Käse."],
      ["Vegetarischer Teller", "Gegrilltes Gemüse mit Reis und Salat."],
      ["Metaxa-Pilzsauce", "Cremige Metaxa-Sauce mit Pilzen."],
    ],
  },
  {
    title: "Fisch & Meeresfrüchte",
    items: [
      ["Gegrillter Kalamari", "Tintenfisch vom Grill mit Salat und Reis."],
      ["Seebrassenfilet vom Grill", "Frisches Fischfilet mit mediterranen Beilagen."],
      ["Gegrillte Königsgarnelen", "Große Garnelen vom Grill mit Gemüse."],
      ["Lachsfilet vom Grill", "Frischer Lachs mediterran zubereitet."],
      ["Meeresfrüchteplatte", "Auswahl gegrillter Meeresfrüchte-Spezialitäten."],
      ["Frische Dorade", "Ganze Dorade vom Grill mit Gemüse."],
    ],
  },
  {
    title: "Gyros-Spezialitäten",
    items: [
      ["Klassisches Gyros", "Traditionelles Gyros mit Salat, Reis und Tzatziki."],
      ["Gyros-Spezial aus dem Ofen", "Gyros mit Pilzen und Metaxa-Sauce aus dem Ofen."],
    ],
  },
  {
    title: "Spezialitäten vom Grill",
    items: [
      ["Giaourtlou", "Traditionelle griechische Hackfleischspezialität mit Joghurtsauce."],
      ["Bifteki", "Gefülltes griechisches Hacksteak mit Feta."],
      ["Souvlaki", "Gegrillte Fleischspieße mit griechischen Beilagen."],
      ["Gefülltes Souvlaki", "Souvlaki mit Fetakäse gefüllt."],
      ["Hähnchenschnitzel", "Knuspriges Hähnchenschnitzel mit Pommes."],
      ["Lammkronen", "Premium-Lammkoteletts vom Grill."],
    ],
  },
  {
    title: "Gemischte Grillteller",
    items: [
      ["Paros-Teller", "Gyros und Kalamari mit griechischen Beilagen."],
      ["Irodion-Teller", "Kombination aus Gyros, Souvlaki und Fleischspezialitäten."],
      ["Haus-Teller", "Große Grillauswahl mit Lammkotelett und Fleisch."],
      ["Dorf-Teller", "Traditioneller griechischer Grillteller."],
      ["Platon-Platte", "Große Platte zum Teilen für Gruppen."],
    ],
  },
  {
    title: "Filets vom Grill",
    items: [
      ["Lammfilet-Teller", "Zartes Lammfilet mit Kräuterbutter."],
      ["Rinderfilet", "Premium-Rinderfilet mit Pfeffersauce."],
      ["Hähnchenfilet", "Gegrilltes Hähnchenfilet mit Pilzsauce."],
      ["Putenbrustfilet", "Zarte Pute mit Kräuterbutter."],
    ],
  },
  {
    title: "Ofenspezialitäten",
    items: [
      ["Kritharaki", "Griechisch gebackene Nudeln mit Hackfleisch und Käse."],
      ["Moussaka", "Traditioneller griechischer Auflauf mit Aubergine und Hackfleisch."],
      ["Vegetarische Moussaka", "Vegetarische Variante des Klassikers."],
      ["Lammhaxe mit Riesenbohnen", "Langsam geschmort mit Riesenbohnen und Käse."],
      ["Lammhaxe mit Kritharaki", "Geschmortes Lamm mit griechischen Nudeln."],
      ["Lammhaxe mit grünen Bohnen", "Zartes Lamm mit grünen Bohnen und mediterraner Sauce."],
    ],
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
      ["Griechischer Schokoladenkuchen", "Intensiver Schokoladenkuchen auf griechische Art."],
    ],
  },
  {
    title: "Heiße Getränke",
    items: [
      ["Griechischer Mokka", "Traditioneller griechischer Kaffee."],
      ["Kaffee", "Frisch gebrühter Kaffee."],
      ["Cappuccino", "Milchkaffee auf italienische Art."],
      ["Espresso", "Kräftiger Espresso."],
      ["Latte Macchiato", "Geschichteter Milchkaffee."],
      ["Heiße Schokolade", "Warme Schokolade mit Sahne."],
    ],
  },
  {
    title: "Aperitifs",
    items: [
      ["Prosecco", "Perlender italienischer Wein."],
      ["Campari", "Klassischer bitterer Aperitif."],
      ["Aperol", "Erfrischender italienischer Aperitif."],
      ["Hugo", "Holunderblüten-Spritzcocktail."],
      ["Lillet", "Französischer weinbasierter Aperitif."],
    ],
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
      ["Metaxa Special", "Premium-griechischer Bernsteinschnaps."],
    ],
  },
  {
    title: "Griechische Weine",
    items: [
      ["Rotwein Haus", "Runder traditioneller griechischer Rotwein."],
      ["Roséwein", "Leicht und erfrischend."],
      ["Weißwein Haus", "Frischer griechischer Weißwein."],
      ["Retsina", "Klassischer griechischer Wein mit Piniennote."],
      ["Merlot", "Kräftiger, ausgewogener Rotwein."],
    ],
  },
];
