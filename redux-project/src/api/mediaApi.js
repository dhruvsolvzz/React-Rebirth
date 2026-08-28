import axios from "axios";

const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function fetchPhotos(query) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query: query,
      per_page: 20,
    },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_KEY}`,
    },
  });
  return response.data.results;
}

export async function fetchVideos(query) {
  const response = await axios.get("https://api.pexels.com/v1/videos/search", {
    params: {
      query: query,
      per_page: 20,
    },
    headers: {
      Authorization: PEXELS_KEY,
    },
  });
  return response.data.videos;
}




export async function fetchGifs(query) {
  const response = await axios.get(
    "https://api.giphy.com/v1/gifs/search",
    {
      params: {
        api_key: GIPHY_KEY,
        q: query,
        limit: 20,
        rating: "g",
      },
    }
  );

  return response.data.data;
}

