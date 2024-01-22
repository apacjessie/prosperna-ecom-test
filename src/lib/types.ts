export enum Method {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PUT = "put",
}

export interface Product {
  id: string;
  name: string;
  rating: number;
  image: string;
}
