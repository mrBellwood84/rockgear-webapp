import { v4 } from "uuid";
import { IBrand } from "../../models/brand/IBrand";

export const brandSeedData: IBrand[] = [
  {
    id: v4(),
    name: "Duesenberg",
    comment: [
      {
        id: v4(),
        code: "en",
        text: "Best Guitars ever made",
      },
      {
        id: v4(),
        code: "no",
        text: "Beste guitarene som finnes",
      },
    ],
  },
  {
    id: v4(),
    name: "Charvel",
    comment: [
      {
        id: v4(),
        code: "en",
        text: "A good heavy metal guitar brand owned by Fender",
      },
      {
        id: v4(),
        code: "no",
        text: "Gode guitarer for metall, eid av Fender",
      },
    ],
  },
  {
    id: v4(),
    name: "ErnieBall",
    comment: [
      {
        id: v4(),
        code: "en",
        text: "Good and reliable string for a reasonable price",
      },
      {
        id: v4(),
        code: "no",
        text: "Gode og pålitelige strenger til en fornuftige priser",
      },
    ],
  },
  {
    id: v4(),
    name: "Boss",
    comment: [
      {
        id: v4(),
        code: "en",
        text: "King of the hill when it comes to effect pedals",
      },
      {
        id: v4(),
        code: "no",
        text: "Kongen på haugen for effektpedaler ",
      },
    ],
  },
];
