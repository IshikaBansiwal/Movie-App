import { API_BASE_URL, API_KEY } from "../utils/constants";

/**
 * Search movies by title
 * @param {string} searchTerm - Movie title to search
 * @param {number} page - Page number (default: 1)
 * @param {string} type - Movie type filter (default: '')
 * @param {string} year - Year filter (default: '')
 * @returns {Promise<Object>} Search results
 */
export const searchMovies = async (
  searchTerm,
  page = 1,
  type = "",
  year = "",
) => {
  // TODO: Implement API call
  // Build URL with query parameters
  // Handle response
  // Throw error if Response is "False"
  throw new Error("searchMovies not implemented");
};

/**
 * Get movie details by IMDb ID
 * @param {string} imdbID - IMDb ID of the movie
 * @returns {Promise<Object>} Movie details
 */
export const getMovieDetails = async (imdbID) => {
  // TODO: Implement API call
  // Fetch movie by ID with plot=full
  // Handle response
  // Throw error if Response is "False"
  throw new Error("getMovieDetails not implemented");
};
