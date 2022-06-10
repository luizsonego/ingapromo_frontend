import { IKImage } from "imagekitio-react";
import React from "react";
import { Link } from "react-router-dom";
import checkIsPercentageOrValue from "../../helpers/checkIsPercentageOrValue";
import checkStatus from "../../helpers/checkStatus";
import UploadImage from "../UploadImage";

function CardAdmin({ data, uploadImage }) {
  return (
    <>
      <div className="md:flex shadow-lg  mx-1 md:mx-auto my-4 max-w-lg md:max-w-1xl min-h-64 h-auto ">
        {!data.imageFilePath ? (
          <img
            alt="sem imagem"
            src={`https://ui-avatars.com/api/?name=${data.title}&background=random`}
            className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
          />
        ) : (
          <IKImage
            className="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
            urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
            path={data?.imageFilePath}
            loading="lazy"
            alt={data.title}
          />
        )}

        <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
          <div className="flex items-center">
            <h2 className="text-xl text-gray-800 font-medium mr-auto truncate w-10/12">
              {data.title || "sem titulo"}
            </h2>
            <p className="text-gray-800 font-semibold tracking-tighter">
              {checkIsPercentageOrValue(data.discount, data.discount_type)}
            </p>
          </div>
          <p className="text-sm text-gray-700 mt-4 h-32 break-all max-w-prose w-11/12">
            {data.description || "sem descrição"}
          </p>

          <hr />

          <div className="flex justify-end mx-4 mt-1 top-auto">
            <div className="rounded mr-auto ">{checkStatus(data.status)}</div>
          </div>

          <div className="flex items-center justify-end mt-4 top-auto">
            <Link to={`delete/${data.id}`}>
              <button className="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">
                Deletar
              </button>
            </Link>
            <Link to={`/admin/cupom/editar/${data.id}`}>
              <button className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">
                Editar
              </button>
            </Link>
            {uploadImage && (
              <>
                <UploadImage
                  id={data.id}
                  title={data.title}
                  shop={data.shop}
                  className="bg-primary text-white mx-2 px-4 py-2 rounded mr-auto "
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardAdmin;
