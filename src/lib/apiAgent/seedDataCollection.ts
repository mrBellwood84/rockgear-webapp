import { IBrand } from "../../models/brand/IBrand";
import { IGuitar } from "../../models/guitar/IGuitar";
import { IStringset } from "../../models/stringset/IStringset";

export const brandSeedData: IBrand[] = [
  {
    id: "921a888c-22b5-43fa-9c3a-4893ea1a8310",
    name: "Duesenberg",
    comment: [
      {
        id: "b0c53746-4e31-4dfe-b2ee-0a5352070995",
        code: "en",
        text: "Best Guitars ever made",
      },
      {
        id: "fdfb7640-c69a-474a-83ef-3121cba7b4a2",
        code: "no",
        text: "Beste guitarene som finnes",
      },
    ],
  },
  {
    id: "0dc1df7b-f9fd-4f04-a241-c86953e6bcd3",
    name: "Charvel",
    comment: [
      {
        id: "a60745fa-0154-4941-83fd-a9d53ea61be2",
        code: "en",
        text: "A good heavy metal guitar brand owned by Fender",
      },
      {
        id: "350c5112-11ca-4b2c-adad-4194f7ddbcc2",
        code: "no",
        text: "Gode guitarer for metall, eid av Fender",
      },
    ],
  },
  {
    id: "05de4299-8710-4e3c-81ed-38bbd04919fc",
    name: "ErnieBall",
    comment: [
      {
        id: "8b36b5cb-714e-464a-87b2-3ba8355909fd",
        code: "en",
        text: "Good and reliable string for a reasonable price",
      },
      {
        id: "c7599b2a-7fd8-4f35-938c-d03e57fdd6bf",
        code: "no",
        text: "Gode og pålitelige strenger til en fornuftige priser",
      },
    ],
  },
  {
    id: "2001741b-08a7-4503-919a-929cfc47d910",
    name: "Elexir",
    comment: [
      {
        id: "05402519-3a9e-4607-8d1a-ce14b912d20c",
        code: "en",
        text: "Brand for high quality strings",
      },
      {
        id: "95168ba8-2aae-4f4d-a27d-5811ab52338b",
        code: "no",
        text: "Strenger med ekstra høy kvalitet",
      },
    ],
  },
];

export const stringsetSeedData: IStringset[] = [
  {
    id: "f68e35a0-7f78-4b53-a309-f424458f52aa",
    brand: {
      id: "05de4299-8710-4e3c-81ed-38bbd04919fc",
      name: "ErnieBall",
      comment: [
        {
          id: "8b36b5cb-714e-464a-87b2-3ba8355909fd",
          code: "en",
          text: "Good and reliable string for a reasonable price",
        },
        {
          id: "c7599b2a-7fd8-4f35-938c-d03e57fdd6bf",
          code: "no",
          text: "Gode og pålitelige strenger til en fornuftige priser",
        },
      ],
    },
    name: "Regular slinky",
    gauges: "10 - 46",
    comments: [
      {
        id: "6bedb6b2-6dab-4851-a183-89ca904c8f85",
        code: "en",
        text: "Classic string set uset by many famous guitarists",
      },
      {
        id: "d783609a-68e1-4d66-90bf-fd280b74dccd",
        code: "",
        text: "En kassisker som er brukt av en rekke kjente gitarister",
      },
    ],
  },
  {
    id: "deeec163-878d-435d-a4d1-54c3d41dbf68",
    brand: {
      id: "05de4299-8710-4e3c-81ed-38bbd04919fc",
      name: "ErnieBall",
      comment: [
        {
          id: "8b36b5cb-714e-464a-87b2-3ba8355909fd",
          code: "en",
          text: "Good and reliable string for a reasonable price",
        },
        {
          id: "c7599b2a-7fd8-4f35-938c-d03e57fdd6bf",
          code: "no",
          text: "Gode og pålitelige strenger til en fornuftige priser",
        },
      ],
    },
    name: "Skinny Top Heavy Bottom",
    gauges: "10 - 52",
  },
  {
    id: "7daba0f2-eae9-4115-ac11-c8d9031523b4",
    brand: {
      id: "2001741b-08a7-4503-919a-929cfc47d910",
      name: "Elexir",
      comment: [
        {
          id: "05402519-3a9e-4607-8d1a-ce14b912d20c",
          code: "en",
          text: "Brand for high quality strings",
        },
        {
          id: "95168ba8-2aae-4f4d-a27d-5811ab52338b",
          code: "no",
          text: "Strenger med ekstra høy kvalitet",
        },
      ],
    },
    name: "NANOWEB Custom Light Phosphor Bronze",
    gauges: "11-52",
    comments: [
      {
        id: "f596fc80-2dbb-41eb-a133-ddb7497c3ed3",
        code: "en",
        text: "Accustic stringset with a bright and smooth sound",
      },
      {
        id: "b99b4efe-44c1-46f3-b8f2-0210f1f49094",
        code: "no",
        text: "Akkustisk strengesett for en lys og myk lyd",
      },
    ],
  },
];

export const guitarSeedData: IGuitar[] = [
  {
    id: "9be01b81-2cc9-4165-92bf-a095934052f7",
    brand: {
      id: "921a888c-22b5-43fa-9c3a-4893ea1a8310",
      name: "Duesenberg",
      comment: [
        {
          id: "b0c53746-4e31-4dfe-b2ee-0a5352070995",
          code: "en",
          text: "Best Guitars ever made",
        },
        {
          id: "fdfb7640-c69a-474a-83ef-3121cba7b4a2",
          code: "no",
          text: "Beste guitarene som finnes",
        },
      ],
    },
    model: "DoubleCat",
    serialNumber: "abc123",
    nickname: "Harley",
    description: [
      {
        id: "ef3aa5f4-1be4-4d77-93c6-5c91445236c9",
        code: "en",
        text: "Semi hollow guitar. Got a strong deep sound for heavy raging",
      },
      {
        id: "b2ccca9a-3ac6-4d71-9788-f29435f8588d",
        code: "no",
        text: "Delvis hul gitar. Har en kraftig mørk lyd",
      },
    ],
  },
  {
    id: "a1b10332-426f-454f-b247-c5b1df10c64d",
    brand: {
      id: "921a888c-22b5-43fa-9c3a-4893ea1a8310",
      name: "Duesenberg",
      comment: [
        {
          id: "b0c53746-4e31-4dfe-b2ee-0a5352070995",
          code: "en",
          text: "Best Guitars ever made",
        },
        {
          id: "fdfb7640-c69a-474a-83ef-3121cba7b4a2",
          code: "no",
          text: "Beste guitarene som finnes",
        },
      ],
    },
    model: "Dragster",
    serialNumber: "abc123",
    description: [
      {
        id: "fc1ac04c-682c-44b0-be46-53cf2646ff58",
        code: "en",
        text: "Semi hollow guitar. Got a strong deep sound for heavy raging",
      },
      {
        id: "515be812-29a7-430d-8df6-e48ed05f7d4e",
        code: "no",
        text: "Delvis hul gitar. Har en kraftig mørk lyd",
      },
    ],
  },
  {
    id: "fe85639b-bde2-4bce-8eb3-399e2657f91c",
    brand: {
      id: "0dc1df7b-f9fd-4f04-a241-c86953e6bcd3",
      name: "Charvel",
      comment: [
        {
          id: "a60745fa-0154-4941-83fd-a9d53ea61be2",
          code: "en",
          text: "A good heavy metal guitar brand owned by Fender",
        },
        {
          id: "350c5112-11ca-4b2c-adad-4194f7ddbcc2",
          code: "no",
          text: "Gode guitarer for metall, eid av Fender",
        },
      ],
    },
    model: "PRO-MOD DK24 HH 2PT CB",
    serialNumber: "abc123",
    nickname: "Black Razor",
  },
];
