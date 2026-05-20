import type { FeaturedBlock, MenuSection } from "./restaurant-menu-types";

function rowEntries(all: MenuSection[], si: number): FeaturedEntry[] {
  return all[si].items.map((item, ii) => ({
    name: item[0],
    description: item[1],
    si,
    ii,
  }));
}

function mergeEntries(all: MenuSection[], sis: readonly number[]): FeaturedEntry[] {
  return sis.flatMap((si) =>
    all[si].items.map((item, ii) => ({
      name: item[0],
      description: item[1],
      si,
      ii,
    })),
  );
}

/** Mirrors the curated menu layout on the /menu page. */
export function buildFeaturedBlocks(
  sections: MenuSection[],
  drinksCombinedTitle: string,
): FeaturedBlock[] {
  return [
    { title: sections[0].title, entries: rowEntries(sections, 0) },
    { title: sections[1].title, entries: rowEntries(sections, 1) },
    { title: sections[2].title, entries: rowEntries(sections, 2) },
    { title: sections[3].title, entries: rowEntries(sections, 3) },
    { title: sections[4].title, entries: rowEntries(sections, 4) },
    { title: sections[6].title, entries: rowEntries(sections, 6) },
    { title: sections[8].title, entries: mergeEntries(sections, [7, 8, 9, 10, 11]) },
    { title: sections[12].title, entries: rowEntries(sections, 12) },
    { title: drinksCombinedTitle, entries: mergeEntries(sections, [13, 14, 15, 16]) },
  ];
}
