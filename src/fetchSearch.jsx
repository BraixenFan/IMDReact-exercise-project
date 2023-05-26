async function fetchSearch({ queryKey }) {
  const { nameFilm } = queryKey[1];
  const res = await fetch(
    `https://imdb-api.com/en/API/SearchMovie/k_ijg7khx0/${nameFilm}`
  );

  if (!res.ok) throw new Error(`No results found for ${nameFilm}`);

  return res.json();
}

export default fetchSearch;
