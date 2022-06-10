import axios from "axios";
import { IKContext, IKUpload } from "imagekitio-react";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toSlugify } from "../../helpers/stringToSlug";

function UploadProfilePic({ id, title, shop }) {
  const queryClient = useQueryClient();
  const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
  const authenticationEndpoint = `${process.env.REACT_APP_API}${process.env.REACT_APP_IMAGEKIT_URL_AUTHENTICATION}`;

  const titleImage = toSlugify(title);
  const folder = `coupons/${shop}`;

  const putImage = async (dataForm) => {
    const response = await axios.put(
      `${process.env.REACT_APP_API}/v1/store/upload-image?id=${id}`,
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
      queryClient.invalidateQueries("company");
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
        <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0 "></div>
        <label className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-edit"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
            <line x1="16" y1="5" x2="19" y2="8" />
          </svg>
          <p className="text-xs text-gray-100">Editar Imagem</p>
          <IKUpload
            fileName={`imagem-perfil_${titleImage}`}
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

export default UploadProfilePic;
