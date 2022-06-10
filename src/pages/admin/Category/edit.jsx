import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import NavBarAdmin from "../../../components/NavBarAdmin";

const inputClass =
  "bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2";

const EditCategory = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  const { data } = useQuery("category", () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/category/view?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_ACCESS_TOKEN
          )}`,
        },
      })
      .then((res) => {
        setValue("name", res.data.data.name);
        return res.data.data;
      })
  );

  //update
  const putCategory = async (dataForm) => {
    const response = await axios.put(
      `${process.env.REACT_APP_API}/v1/category/update?id=${data.id}`,
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
  const { isLoading, mutate } = useMutation(putCategory, {
    onSuccess: (data) => {
      navigate("/admin/categorias");
    },
  });
  const Submit = (data) => {
    mutate(data);
  };

  return (
    <div>
      <NavBarAdmin title="Editar Categoria" />

      <form onSubmit={handleSubmit(Submit)}>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Nome da Categoria
          </lable>
          <input
            aria-label="Nome do estabelecimento"
            type="text"
            {...register("name")}
            className={inputClass}
          />
        </div>

        <div className="mt-8">
          {isLoading ? (
            <button
              aria-label="Criar minha empresa"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Salvando
            </button>
          ) : (
            <button
              aria-label="Criar minha empresa"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Salvar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
