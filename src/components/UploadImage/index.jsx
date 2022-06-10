import axios from "axios";
import { IKContext, IKUpload } from "imagekitio-react";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toSlugify } from "../../helpers/stringToSlug";

function UploadImage({ id, title, shop }) {
  const queryClient = useQueryClient();
  const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
  const authenticationEndpoint = `${process.env.REACT_APP_API}${process.env.REACT_APP_IMAGEKIT_URL_AUTHENTICATION}`;

  const titleImage = toSlugify(title);
  const folder = `coupons/${shop}/${id}`;

  const putImage = async (dataForm) => {
    const response = await axios.put(
      `${process.env.REACT_APP_API}/v1/coupon/upload-image?id=${id}`,
      dataForm,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_ACCESS_TOKEN
          )}`,
        },
      }
    );

    return response.data;
  };
  const { mutate } = useMutation(putImage, {
    onSuccess: () => {
      queryClient.invalidateQueries("coupon");
    },
    onError: (error) => {
      console.log("err", error);
    },
  });

  const onError = (err) => {
    console.log("err", err);
  };
  const onSuccess = (res) => {
    const imageUrl = res.url;
    const imageThumbnailUrl = res.thumbnailUrl;
    const imageName = res.name;
    const imageFilePath = res.filePath;
    const dataImage = {
      imageUrl,
      imageThumbnailUrl,
      imageName,
      imageFilePath,
    };
    mutate(dataImage);
  };

  return (
    <>
      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticationEndpoint={authenticationEndpoint}
        transformationPosition="path"
      >
        <label className="cursor-pointer mx-3">
          <span className="h-6 px-4 mb-4 md:mb-0 rounded-full flex items-center justify-center bg-blue-500 ">
            <span className="text-xs text-white font-normal">
              Upload Imagem
            </span>
          </span>
          <IKUpload
            fileName={`${titleImage}`}
            onSuccess={onSuccess}
            onError={onError}
            useUniqueFileName={false}
            folder={folder}
            className="hidden"
          />
        </label>
      </IKContext>
    </>
  );
}

export default UploadImage;
