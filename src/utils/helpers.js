import { PLACEHOLDER_IMAGE } from "./constants";

export const getPosterUrl = (poster) => {
  return poster && poster !== "N/A" ? poster : PLACEHOLDER_IMAGE;
};

export const truncate = (str, length = 100) => {
  if (!str) return "";
  return str.length > length ? str.substring(0, length) + "..." : str;
};

export const formatRuntime = (runtime) => {
  if (!runtime || runtime === "N/A") return "N/A";
  const minutes = parseInt(runtime);
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};
