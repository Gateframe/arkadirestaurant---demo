import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Intro } from "@/components/landing/Intro";
import { SignatureDishes } from "@/components/landing/SignatureDishes";
import { ReservationCTA } from "@/components/landing/ReservationCTA";
import { Gallery } from "@/components/landing/Gallery";
import { Footer } from "@/components/landing/Footer";
import { translations } from "@/i18n/translations";

const de = translations.de;

/** Set `VITE_SITE_URL` (e.g. https://restaurantdionysos.com) in production so og:image is an absolute URL. */
function ogImageUrl(): string {
  const path = "/og-hero.png";
  const base = import.meta.env.VITE_SITE_URL;
  if (typeof base === "string" && base.trim().length > 0) {
    return `${base.trim().replace(/\/$/, "")}${path}`;
  }
  return path;
}

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
    addressCountry: "DE",
  },
  telephone: "+49 81 65 707 744",
  openingHours: [
    "Mo-Th,Su 11:00-15:00",
    "Mo-Th,Su 17:30-23:00",
    "Fr-Sa 11:00-15:00",
    "Fr-Sa 17:30-00:00",
  ],
  image: ogImageUrl(),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dionysos — Exklusive Griechische Kulinarik" },
      {
        name: "description",
        content:
          "Dionysos: exklusive griechische Kulinarik — edles Ambiente, saisonale Küche und ein unvergessliches Erlebnis.",
      },
      { property: "og:title", content: "Dionysos — Exklusive Griechische Kulinarik" },
      {
        property: "og:description",
        content:
          "Raffinierte griechische Küche in stilvollem Rahmen. Reservieren Sie Ihren Tisch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImageUrl() },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Dionysos — Hero" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImageUrl() },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Intro />
      <SignatureDishes />
      <ReservationCTA />
      <Gallery />
      <Footer />
    </main>
  );
}
