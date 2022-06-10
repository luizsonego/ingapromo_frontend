import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import NavBarAdmin from "../../../components/NavBarAdmin";

const inputClass =
  "bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2";

const CategoryCreate = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const postCategory = async (dataForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/v1/category/create`,
      dataForm,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data;
  };

  const { isLoading, mutate } = useMutation(postCategory, {
    onSuccess: (data) => {
      navigate("/admin/categorias");
    },
  });

  const handleSubmitCategory = (data) => {
    mutate(data);
  };

  return (
    <div>
      <NavBarAdmin title="Criar Categoria" />

      <form onSubmit={handleSubmit(handleSubmitCategory)}>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Categoria
          </lable>
          <input
            aria-label="Categoria"
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
export default CategoryCreate;
