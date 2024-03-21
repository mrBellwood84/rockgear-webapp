export interface INavLink {
  textkey: string;
  href: string;
  iconPath: string;
}

export const navlinks_user: { primary: INavLink[]; secondary: INavLink[] } = {
  primary: [
    {
      textkey: "guitar",
      href: "/guitar",
      iconPath: "/graphic/drawer/guitar.png",
    },
  ],
  secondary: [
    {
      textkey: "brand",
      href: "/brand",
      iconPath: "/graphic/drawer/brand.png",
    },
    {
      textkey: "stringset",
      href: "/stringset",
      iconPath: "/graphic/drawer/stringset.png",
    },
  ],
};
