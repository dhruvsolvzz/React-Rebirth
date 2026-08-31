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


const ResultGrid = () => {
    const dispatch = useDispatch()
  const { query, activeTab, error, loading , results } = useSelector((store) => {
    return store.search;
  });

  useEffect(() => {
    
    if (!query.trim()) return;
    const getData = async () => {
      let data=[];
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
            title: item.user.name || "video",
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
      dispatch(setResults(data))
    };
    getData();
  }, [query, activeTab]);
  return <div>
   {results.map((elem) => (
  <h1 key={elem.id}>{elem.title}</h1>
))}
  </div>;
};

export default ResultGrid;
