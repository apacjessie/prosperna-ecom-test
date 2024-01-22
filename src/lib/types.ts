export enum Method {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
}

export enum PriceSort {
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

export enum Gender {
  ALL = "All",
  MEN = "Men",
  WOMEN = "Women",
}

export enum Category {
  TSHIRTS = "tshirts",
  SHIRTS = "shirts",
  SWEATERS = "sweaters",
  JACKETS = "jackets",
  DRESS = "dress",
}

export interface Product {
  id: string;
  name: string;
  rating: number;
  image: string;
  price: number;
  category: Category;
  gender: "men" | "women";
}
