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
    name: "Categoria",
    selector: "name",
  },
];
function CategoryAdmin() {
  const { data, isLoading } = useQuery(
    "categories",
    () =>
      axios
        .get(`${process.env.REACT_APP_API}/v1/category`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          return res.data.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {}),
    {
      staleTime: 3000,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBarAdmin title="Categorias" link="criar" linkText="Novo" />

      <Information
        columns={columns}
        data={data}
        pathApi="category"
        modalTitle="Upload de imagem"
        upload={true}
      />
    </div>
  );
}

export default CategoryAdmin;
