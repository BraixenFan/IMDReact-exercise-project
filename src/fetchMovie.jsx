const fetchMovie = async ({ queryKey }) => {
  const id = queryKey[1];
  const apiRes = await fetch(`https://search.imdbot.workers.dev/?tt=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

export default fetchMovie;
