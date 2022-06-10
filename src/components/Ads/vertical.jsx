import axios from "axios";
import { IKImage } from "imagekitio-react";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";


const AdsVertical = () => {
  const { data: bannerAds, isLoading } = useQuery("banners-ads", async () =>
  axios
    .get(`${process.env.REACT_APP_API}/v1/banner/banners-ads`, {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        type: 1,
        location: 1
      }
    })
    .then((res) => {
      return res.data.data;
    }).catch((err) => { 
      console.log(err);
    })
);

  if (isLoading) { 
    return <div>Loading...</div>;
  }

  return (
    <>
      {bannerAds?.map((data, index) => (
        <div className="flex justify-center my-2" key={index}>
          <Link to="#" >

            <div className="overflow-hidden rounded-xl h-72 w-72 ">
          {!data.imageFilePath ? (
            <img
            alt="sem imagem"
            src="https://ui-avatars.com/api/?name=sem+imagem&background=cccccc&color=ddd"
            className=" bg-cover"
              />
            ) : (
              <IKImage
                className=" bg-cover"
                urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
                path={data?.imageFilePath}
                loading="lazy"
                    alt={data.title}
                />
                )}
                </div>
          </Link>
          <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3 hidden">
            {" "}
            {data.title}{" "}
          </p>
        </div>
      ))}
    </>
  );
};

export default AdsVertical;
