import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const ImagePlaceholder = ({image, ...rest}) => {
  const { data } = useQuery("image-placeholder", async () =>
    axios
      .get(`https://api.pexels.com/v1/search?query=${image}&per_page=1&locale=pt-BR`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "563492ad6f917000010000012101812ecbf64ff882475207b81f1420"
        },
      })
      .then((res) => {
        return res.data.photos[0].src.small;
      })
  );


  return (
    <img
      src={data}
      {...rest}
      alt={image}
    />
  )
}

export default ImagePlaceholder