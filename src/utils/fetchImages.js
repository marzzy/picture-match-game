import { useState, useEffect } from "react";
import { createApi } from "unsplash-js";
import { getRandomInt } from './math';

const api = createApi({
  accessKey: process.env.NEXT_PUBLIC_API_ACCESS_KEY
});

export function useFetchImage(searchTerm ,count=4) {
  const [data, setPhotosResponse] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
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
  }, [searchTerm, count]);

  return {
    photos: data,
    isLoading,
    errorMessage
  }
}
