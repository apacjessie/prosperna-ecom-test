import { Method, Product } from "@/lib/types";

async function callApi(
  href: string,
  method: Method,
  body?: BodyInit | Product | undefined
) {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body && (method === Method.POST || method === Method.PUT)) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(href, options);
  return await res.json();
}

export default callApi;
