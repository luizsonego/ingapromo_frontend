import axios from "axios";
import { useQuery } from "react-query";
import Information from "../../../components/Information";
import LoadingAdmin from "../../../components/LoadingAdmin";
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
    "admin-categories",
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
        .finally(() => {})
  );

  if (isLoading) {
    return (<LoadingAdmin />);
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
