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
      iconPath: "",
    },
  ],
  secondary: [
    {
      textkey: "brand",
      href: "/brand",
      iconPath: "",
    },
    {
      textkey: "stringset",
      href: "/stringset",
      iconPath: "",
    },
  ],
};
