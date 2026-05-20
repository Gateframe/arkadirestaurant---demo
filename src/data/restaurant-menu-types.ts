export type MenuItemRow = readonly [string, string];

export type MenuSection = {
  readonly title: string;
  readonly items: readonly MenuItemRow[];
};

export type FeaturedEntry = {
  readonly name: string;
  readonly description: string;
  readonly si: number;
  readonly ii: number;
};

export type FeaturedBlock = {
  readonly title: string;
  readonly entries: readonly FeaturedEntry[];
};
