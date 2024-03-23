import { INavLink } from "./models/INavlink";

export type LinkTextKeyType = "guitars" | "brands";

export const primaryNavLinks: INavLink[] = [
  {
    href: "/guitar",
    textKey: "guitars",
  },
];

export const secondaryNavLinks: INavLink[] = [
  {
    href: "/brand",
    textKey: "brands",
  },
];

export const adminOnlyNavLinks: INavLink[] = [];
