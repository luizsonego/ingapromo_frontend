import axios from "axios";
import { IKImage } from "imagekitio-react";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import CardAdmin from "../../../components/CardAdmin";
import NavBarAdmin from "../../../components/NavBarAdmin";
import UploadProfilePic from "../../../components/UploadProfilePic";
import { toSlugify } from "../../../helpers/stringToSlug";

const Company = () => {
  const { data } = useQuery("company", () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/store/get-store`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_ACCESS_TOKEN
          )}`,
        },
      })
      .then((res) => {
        return res.data.data;
      })
  );

  if (!data || data.length === 0 || !data) {
    return (
      <>
        <NavBarAdmin
          title="Empresa"
          link="/admin/empresa/criar"
          linkText="Cadastrar"
        />

        <h1>
          Você ainda nao cadastrou sua empresa, por fazor cadastre pelo botao
          abaixo
        </h1>
      </>
    );
  }

  return (
    <div>
      <NavBarAdmin
        title="Empresa"
        link="/admin/empresa/editar"
        linkText="Editar Empresa"
      />

      <div className="max-w-full mx-auto">
        <div className="px-3 py-2">
          <div className="flex flex-col gap-1 text-center">
            <div className="block mx-auto bg-center w-20 h-20 rounded-full border border-gray-400 shadow-lg">
              <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat relative bottom-0 -mb-10 shadow flex items-center justify-center">
                {!data.imageFilePath ? (
                  <img
                    alt="sem imagem"
                    src={`https://ui-avatars.com/api/?name=${data.name}&background=random`}
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                  />
                ) : (
                  <IKImage
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                    urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
                    path={data?.imageFilePath}
                    loading="lazy"
                    alt={data.title}
                  />
                )}

                <UploadProfilePic
                  id={data?.id}
                  title={toSlugify(data?.name)}
                  shop={data?.id}
                />
              </div>
            </div>

            <p className="font-serif font-semibold">{data?.name}</p>
            <span className="text-sm text-gray-400">
              {data?.city}, {data?.state}
            </span>
            <span className="text-sm text-gray-400">
              {data?.address}, {data?.number || "S/N"} - {data?.district} -{" "}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${data?.address}+${data?.number}+${data?.district}+${data?.city}+${data?.state}`}
                target="_blank"
                className="text-blue-500"
                rel="noreferrer"
              >
                <i className="fas fa-map-marker-alt"></i>
              </a>
            </span>
            <span className="text-sm text-gray-400">
              <a
                class="text-blue-600 after:content-['_↗']"
                href={data?.website}
                target="_blank"
                rel="noreferrer"
              >
                {data?.website}
              </a>
            </span>
            <span className="text-sm text-gray-400">{data?.youtube}</span>
            <span className="text-sm text-gray-400">{data?.email}</span>
          </div>

          <div className="flex justify-center items-center gap-2 my-3">
            <div className="font-semibold text-center mx-4">
              <p className="text-black">{data.coupon.length}</p>
              <span className="text-gray-400">Cupons</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 my-3">
            {data.whatsapp && (
              <div className="font-semibold text-center mx-4">
                <span className="text-gray-400">Whatsapp</span>
                <p className="text-black">{data.whatsapp}</p>
              </div>
            )}

            {data.instagram && (
              <div className="font-semibold text-center mx-4">
                <span className="text-gray-400">Instagram</span>
                <p className="text-black">{data?.instagram}</p>
              </div>
            )}

            {data.facebook && (
              <div className="font-semibold text-center mx-4">
                <span className="text-gray-400">Facebook</span>
                <p className="text-black">{data?.facebook}</p>
              </div>
            )}

            {data.twitter && (
              <div className="font-semibold text-center mx-4">
                <span className="text-gray-400">Twitter</span>
                <p className="text-black">{data?.twitter}</p>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button className="w-full py-2 border-b-2 border-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </button>
          </div>
          <Link to="/admin/cupom/criar">
            <button className="w-full py-2">+ Criar Cupom</button>
          </Link>

          <div className="grid grid-cols-2 gap-2 my-3">
            {data?.coupon.map((coupon, index) => {
              return (
                <CardAdmin key={index} data={coupon} uploadImage={false} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Company;
