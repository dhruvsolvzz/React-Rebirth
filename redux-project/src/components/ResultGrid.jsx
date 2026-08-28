import { useDispatch, useSelector } from "react-redux";
import { fetchGifs, fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setLoading,
  setResults,
  setError,
  setQuery,
} from "../redux/features/searchSlice";
import axios from "axios";
import { useEffect } from "react";
import { store } from "../redux/store";

const ResultGrid = () => {
  const { query, activeTab, error, loading } = useSelector((store) => {
    return store.search;
  });

  useEffect(() => {
    if (!query.trim()) return;
    const getData = async () => {
      let data;
      if (activeTab == "Photos") {
        // isko bolte hein normalizationnnnn
        let response = await fetchPhotos(query);
        data = response.map((item) => {
          return {
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          };
        });
      }
      if (activeTab == "Videos") {
        const response = await fetchVideos(query);
        data = response.map((item) => {
          return {
            id: item.id,
            type: "video",
            title: item.use.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          };
        });
      }
      if (activeTab == "GIFs") {
        const response = await fetchGifs(query);
         data = response.map((item) => {
          return {
            id: item.id,
            type: "GIFs",
            title: item.slug|| "GIFs",
            thumbnail: item.images.downsized.url,
            // src: item.url,
          };
        });
      }
      console.log(data);
    };
    getData();
  }, [query, activeTab]);
  return <div></div>;
};

export default ResultGrid;
