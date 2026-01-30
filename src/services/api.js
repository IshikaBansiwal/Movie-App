const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";


export const searchMovies = async (
  searchTerm,
  page = 1,
  type = "",
  year = ""
) => {
  const params = new URLSearchParams({
    apikey: API_KEY,
    s: searchTerm,
    page: page.toString(),
    ...(type && type !== "all" && { type }),
    ...(year && year !== "all" && { y: year }),
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
};


export const getMovieDetails = async (imdbID) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  );

  const data = await response.json();

  if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data;
};
