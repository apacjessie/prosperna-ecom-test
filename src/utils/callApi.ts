import { Method, Product } from "@/lib/types";

async function callApi(
  href: string,
  method: Method,
  body?: BodyInit | Product | undefined
) {
  const options: RequestInit = {
    method,
  };

  if (body) {
    if (method === Method.POST || method === Method.PUT) {
      if (body instanceof FormData) {
        options.body = body;
      } else {
        options.headers = {
          ...options.headers,
          "Content-Type": "application/json",
        };
        options.body = JSON.stringify(body);
      }
    } else {
      options.body = body as BodyInit;
    }
  }

  const res = await fetch(href, options);
  return await res.json();
}

export default callApi;
