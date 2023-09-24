import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import { getRandomInt } from './math';

const api = createApi({
  accessKey: process.env.NEXT_PUBLIC_API_ACCESS_KEY
});

function fetchData(setIsLoading, setPhotosResponse, setErrorMessage, searchTerm, count) {
  setIsLoading(true);
  // TODO: add caching strategies for repatitive inputs
  api.search
    .getPhotos({ query:searchTerm, orientation: "squarish", per_page: count, page: getRandomInt(10)+1 })
    .then(result => {
      const arrayOfPhotoDetails = result.response.results.reduce((res, currentPhoto) => [
        ...res,
        {
          id: currentPhoto.id,
          url: currentPhoto.urls.small,
          width:currentPhoto.width || 100,
          height:currentPhoto.height || 100,
          alt: currentPhoto.alt_description || currentPhoto.description || searchTerm,
        }], [])
      setPhotosResponse(arrayOfPhotoDetails);
      if (result.errors) {
        setErrorMessage(result.errors[0]);
      }
      setIsLoading(false);
    })
    .catch(() => {
      console.log("something went wrong!");
    });
}

export function useFetchImage(searchTerm ,count=4, beforeFetch) {
  const [data, setPhotosResponse] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    beforeFetch();
    fetchData(setIsLoading, setPhotosResponse, setErrorMessage, searchTerm, count);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, count]);

  function fetchNewPhotos() {
    beforeFetch();
    fetchData(setIsLoading, setPhotosResponse, setErrorMessage, searchTerm, count);
  }

  return {
    photos: data,
    isLoading,
    errorMessage,
    fetchNewPhotos
  }
}
