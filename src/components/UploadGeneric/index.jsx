import axios from "axios";
import { IKContext, IKUpload } from "imagekitio-react";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toSlugify } from "../../helpers/stringToSlug";

const UploadGeneric = ({ title, uriApi, uriApiUpload, invalidateQueries }) => {
  const queryClient = useQueryClient();
  const publicKey = process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = process.env.REACT_APP_IMAGEKIT_URL_ENDPOINT;
  const authenticationEndpoint = `${process.env.REACT_APP_API}${process.env.REACT_APP_IMAGEKIT_URL_AUTHENTICATION}`;
  const uploadApiEndpoint = `${process.env.REACT_APP_API}/v1/${uriApiUpload}`;
  const titleImage = toSlugify(title);
  const folder = `coupons/${uriApi}`;

  const putImage = async (dataForm) => {
    const response = await axios
      .put(uploadApiEndpoint, dataForm, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_ACCESS_TOKEN
          )}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("err", err);
      });

    return response;
  };

  const { mutate } = useMutation(putImage, {
    onSuccess: () => {
      queryClient.invalidateQueries(invalidateQueries);
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
        <IKUpload
          fileName={`${titleImage}`}
          onSuccess={onSuccess}
          onError={onError}
          useUniqueFileName={false}
          folder={folder}
        />
      </IKContext>
    </>
  );
};

export default UploadGeneric;
