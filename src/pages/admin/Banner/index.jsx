import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Information from "../../../components/Information";
import NavBarAdmin from "../../../components/NavBarAdmin";

const columns = [
  {
    name: "Imagem",
    selector: "imageUrl",
  },
  {
    name: "Título",
    selector: "title",
  },
  {
    name: "Código",
    selector: "code",
  },
  {
    name: "Tipo",
    selector: "type",
  },
  {
    name: "Localização",
    selector: "location",
  },
  {
    name: "Loja",
    selector: "store_id",
  },
  {
    name: "Status",
    selector: "status",
  },
  {
    name: "Criado",
    selector: "created_at",
  },
];

function Banner() {
  const { data, isLoading } = useQuery(
    "banners",
    () =>
      axios
        .get(`${process.env.REACT_APP_API}/v1/banner`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem(
              process.env.REACT_APP_ACCESS_TOKEN
            )}`,
          },
        })
        .then((res) => {
          return res.data.data;
        }),
    {
      staleTime: 3000,
    }
  );

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBarAdmin title="Banner" link="criar" linkText="Novo" />

      <Information
        columns={columns}
        data={data}
        modalTitle="Upload de imagem"
        pathApi="banner"
        upload={true}
      />
    </div>
  );
}

export default Banner;
