import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import { useI18n } from "@/i18n";
import g01 from "@/assets/gallery-01.png";
import g02 from "@/assets/gallery-02.png";
import g03 from "@/assets/gallery-03.png";
import g04 from "@/assets/gallery-04.png";
import g05 from "@/assets/gallery-05.png";
import g06 from "@/assets/gallery-06.png";
import g07 from "@/assets/gallery-07.png";
import g09 from "@/assets/gallery-09.png";
import g11 from "@/assets/gallery-11.png";
import g12 from "@/assets/gallery-12.png";

/** S = 1×1 square · P = 1×2 portrait · H = 2×1 landscape (strict modular units) */
type Module = "S" | "P" | "H";

const GALLERY_BAND = "min(96vw, 128rem)";

const modularGridStyle: CSSProperties = {
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
  ["--cell" as string]: `clamp(5.5rem, calc((${GALLERY_BAND} - 5 * var(--gap)) / 6), 19rem)`,
  ["--gap" as string]: "clamp(0.5rem, 1.2vw, 1rem)",
};

export function Gallery() {
  const ref = useReveal<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const { t } = useI18n();

  const tiles = useMemo(
    () =>
      [
        {
          img: g01,
          altKey: "gallery.alt01" as const,
          imgClass: "object-cover object-[center_35%]",
          module: "S" as const,
          col: [4, 5] as const,
          row: [3, 4] as const,
        },
        {
          img: g09,
          altKey: "gallery.alt02" as const,
          imgClass: "object-cover object-center",
          module: "H" as const,
          col: [2, 4] as const,
          row: [1, 2] as const,
        },
        {
          img: g03,
          altKey: "gallery.alt03" as const,
          imgClass: "object-cover object-center",
          module: "S" as const,
          col: [4, 5] as const,
          row: [1, 2] as const,
        },
        {
          img: g04,
          altKey: "gallery.alt04" as const,
          imgClass: "object-cover object-center",
          module: "S" as const,
          col: [3, 4] as const,
          row: [3, 4] as const,
        },
        {
          img: g12,
          altKey: "gallery.alt05" as const,
          imgClass: "object-cover object-center",
          module: "S" as const,
          col: [2, 3] as const,
          row: [2, 3] as const,
        },
        {
          img: g11,
          altKey: "gallery.alt06" as const,
          imgClass: "object-cover object-[center_42%]",
          module: "S" as const,
          col: [3, 4] as const,
          row: [2, 3] as const,
        },
        {
          img: g07,
          altKey: "gallery.alt07" as const,
          imgClass: "object-cover object-[center_45%]",
          module: "S" as const,
          col: [4, 5] as const,
          row: [2, 3] as const,
        },
        {
          img: g02,
          altKey: "gallery.alt08" as const,
          imgClass: "object-cover object-[center_40%]",
          module: "P" as const,
          col: [5, 6] as const,
          row: [2, 4] as const,
        },
        {
          img: g05,
          altKey: "gallery.alt09" as const,
          imgClass: "object-cover object-center",
          module: "S" as const,
          col: [2, 3] as const,
          row: [3, 4] as const,
        },
        {
          img: g06,
          altKey: "gallery.alt10" as const,
          imgClass: "object-cover object-center",
          module: "S" as const,
          col: [5, 6] as const,
          row: [1, 2] as const,
        },
      ] as const,
    [],
  );

  return (
    <section id="atmosphere" className="border-t border-white/5 bg-stone pt-24 pb-14 sm:pt-32 sm:pb-20">
      <div ref={ref} className="reveal">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <span className="eyebrow">{t("gallery.eyebrow")}</span>
            <h2 className="text-display mt-4 text-4xl text-ivory sm:text-6xl">
              {t("gallery.title1")} <span className="italic text-gold">{t("gallery.title2")}</span>
            </h2>
          </div>
        </div>

        <div className="hidden w-full justify-center px-4 md:flex lg:px-6">
          <div style={modularGridStyle}>
            {tiles.map((tile) => {
              const alt = t(tile.altKey);
              return (
                <ModularTile
                  key={tile.altKey}
                  img={tile.img}
                  alt={alt}
                  expandPrefix={t("gallery.expandPrefix")}
                  imgClass={tile.imgClass}
                  module={tile.module}
                  gridColumn={`${tile.col[0]} / ${tile.col[1]}`}
                  gridRow={`${tile.row[0]} / ${tile.row[1]}`}
                  onExpand={() => setLightbox({ src: tile.img, alt })}
                />
              );
            })}
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 sm:gap-4 md:hidden">
          {tiles.map((tile) => {
            const alt = t(tile.altKey);
            return (
              <ModularTile
                key={`m-${tile.altKey}`}
                img={tile.img}
                alt={alt}
                expandPrefix={t("gallery.expandPrefix")}
                imgClass={tile.imgClass}
                module={tile.module}
                mobile
                onExpand={() => setLightbox({ src: tile.img, alt })}
              />
            );
          })}
        </div>
      </div>

      <Dialog open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent motion="soft" className="z-[100]">
          {lightbox ? (
            <>
              <DialogTitle className="sr-only">
                {t("gallery.lightboxTitle")}: {lightbox.alt}
              </DialogTitle>
              <DialogDescription className="sr-only">{t("gallery.lightboxDesc")}</DialogDescription>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="block max-h-[min(94dvh,100dvh)] max-w-[100vw] object-contain"
                decoding="async"
              />
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
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
  onExpand,
}: {
  img: string;
  alt: string;
  expandPrefix: string;
  imgClass: string;
  module: Module;
  gridColumn?: string;
  gridRow?: string;
  mobile?: boolean;
  onExpand: () => void;
}) {
  const mobileAspect =
    module === "S"
      ? "aspect-square max-h-[min(96vw,31rem)] w-full max-w-[30rem] mx-auto"
      : module === "P"
        ? "aspect-[1/2] max-h-[min(80svh,38rem)] w-[min(92%,28rem)] mx-auto"
        : "aspect-[2/1] w-full max-h-[min(65vw,22rem)]";

  const tileClass = `group relative min-h-0 overflow-hidden rounded-3xl bg-charcoal text-left shadow-[0_10px_36px_-18px_rgba(0,0,0,0.42)] ${
    mobile
      ? mobileAspect
      : module === "P"
        ? "min-h-0 w-full [aspect-ratio:1/2] max-h-full"
        : module === "H"
          ? "min-h-0 w-full [aspect-ratio:2/1] max-h-full"
          : "min-h-0 w-full aspect-square max-h-full"
  }`;

  const style = mobile
    ? undefined
    : {
        gridColumn,
        gridRow,
      };

  return (
    <button
      type="button"
      className={cn(
        tileClass,
        "block h-full w-full cursor-zoom-in border-0 p-0 outline-none focus-visible:ring-2 focus-visible:ring-gold/55 focus-visible:ring-offset-2 focus-visible:ring-offset-stone",
      )}
      style={style}
      onClick={onExpand}
      aria-label={`${expandPrefix}${alt}`}
    >
      <img
        src={img}
        alt=""
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out will-change-transform group-hover:scale-[1.03] ${imgClass} brightness-[1.04] contrast-[1.04] saturate-[1.05]`}
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-[rgba(22,18,15,0.06)] transition-colors duration-500 group-hover:bg-[rgba(22,18,15,0.02)]" />
    </button>
  );
}
