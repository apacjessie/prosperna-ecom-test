async function fetchJson(href: string, method: Method) {
  const res = await fetch(href, { method });

  return await res.json();
}

export default fetchJson;
