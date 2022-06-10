import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import NavBarAdmin from "../../../components/NavBarAdmin";

const inputClass =
  "bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2";

const CompanyCreate = () => {
  let navigate = useNavigate();
  const [postalCode, setPostalCode] = useState("");
  const { register, handleSubmit, setValue } = useForm();

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
      .then((res) => res.data.data)
  );

  const { data: dataCategory } = useQuery("categ", () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/category`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_ACCESS_TOKEN
          )}`,
        },
      })
      .then((res) => {
        return res.data.data.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        });
      })
  );

  if (data) {
    navigate("/admin/empresa");
  }

  const postCompany = async (dataForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/v1/store/create`,
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

  const { isLoading, mutate } = useMutation(postCompany, {
    onSuccess: (data) => {
      navigate("/admin/empresa");
    },
  });

  const handleSubmitUser = (data) => {
    mutate(data);
  };

  const handleFetchCep = async (e) => {
    await axios
      .get(`https://brasilapi.com.br/api/cep/v2/${e.target.value}`)
      .then((res) => {
        setValue("address", res.data?.street);
        setValue("city", res.data?.city);
        setValue("state", res.data?.state);
        setValue("district", res.data?.neighborhood);
        setValue("latitude", res.data?.location.coordinates.latitude);
        setValue("longitude", res.data?.location.coordinates.longitude);
      });
  };

  return (
    <div>
      <NavBarAdmin title="Criar Empresa" />

      <form onSubmit={handleSubmit(handleSubmitUser)}>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Nome do estabelecimento
          </lable>
          <input
            aria-label="Nome do estabelecimento"
            type="text"
            {...register("name")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            CEP
          </lable>
          <input
            aria-label="CEP"
            type="text"
            onBlur={handleFetchCep}
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            // {...register("postal_code")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Endereço
          </lable>
          <input
            aria-label="Endereço"
            type="text"
            {...register("address")}
            className={inputClass}
          />
        </div>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Numero
          </lable>
          <input
            aria-label="numero"
            type="text"
            {...register("number")}
            className={inputClass}
          />
        </div>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Cidade
          </lable>
          <input
            aria-label="cidade"
            type="text"
            {...register("city")}
            className={inputClass}
          />
        </div>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Bairro
          </lable>
          <input
            aria-label="bairro"
            // value={district}
            // onChange={e => setDistrict(e.target.value)}
            type="text"
            {...register("district")}
            className={inputClass}
          />
        </div>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Estado
          </lable>
          <input
            aria-label="estado"
            type="text"
            {...register("state")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Telefone
          </lable>
          <input
            aria-label="Telefone"
            type="text"
            {...register("phone")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Whatsapp
          </lable>
          <input
            aria-label="Whatsapp"
            type="text"
            {...register("whatsapp")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Website
          </lable>
          <input
            aria-label="Website"
            type="text"
            {...register("website")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            latitude
          </lable>
          <input
            aria-label="Latitude"
            type="text"
            {...register("latitude")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            longitude
          </lable>
          <input
            aria-label="Longitude"
            type="text"
            {...register("longitude")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">
            Categoria
          </lable>
          <select className={inputClass} name="address">
            {dataCategory.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
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
export default CompanyCreate;
