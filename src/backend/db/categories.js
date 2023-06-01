import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "oversize",
  },
  {
    _id: uuid(),
    categoryName: "winterWear",
  },
  {
    _id: uuid(),
    categoryName: "figurine",
  },
  {
    _id: uuid(),
    categoryName: "stickers",
  },
];
