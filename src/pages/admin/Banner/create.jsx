import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import NavBarAdmin from "../../../components/NavBarAdmin";

const inputClass =
  "bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2";

function CreateBanner() {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const { data: dataStore } = useQuery(
    "store",
    () =>
      axios
        .get(`${process.env.REACT_APP_API}/v1/store/get-shop-for-admin`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem(
              process.env.REACT_APP_ACCESS_TOKEN,
            )}`,
          },
        })
        .then((res) => {
          return res.data.data?.map((item) => {
            return {
              label: item.name,
              value: item.id,
            };
          });
        }),
    {
      staleTime: 3000,
    },
  );

  const postBanner = async (dataForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/v1/banner/create`,
      dataForm,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );

    return response.data;
  };

  const { isLoading, mutate } = useMutation(postBanner, {
    onSuccess: () => {
      navigate("/admin/banner");
    },
  });

  const handleSubmitCategory = (data) => {
    mutate(data);
  };

  return (
    <div>
      <NavBarAdmin title='Criar Banner' />

      <form onSubmit={handleSubmit(handleSubmitCategory)}>
        <div>
          <label className='text-sm font-medium leading-none text-gray-800'>
            Titulo
          </label>
          <input
            aria-label='title'
            type='text'
            {...register("title")}
            className={inputClass}
          />
        </div>
        <div>
          <label className='text-sm font-medium leading-none text-gray-800'>
            link
          </label>
          <input
            aria-label='link'
            type='text'
            {...register("link")}
            className={inputClass}
          />
        </div>
        <div>
          <lable className='text-sm font-medium leading-none text-gray-800'>
            Loja
          </lable>
          <select className={inputClass} {...register("store_id")}>
            {dataStore && dataStore?.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className='text-sm font-medium leading-none text-gray-800'>
            status
          </label>
          <input
            aria-label='status'
            type='text'
            {...register("status")}
            className={inputClass}
          />
        </div>
        <div>
          <label className='text-sm font-medium leading-none text-gray-800'>
            start_date
          </label>
          <input
            aria-label='start_date'
            type='text'
            {...register("start_date")}
            className={inputClass}
          />
        </div>
        <div>
          <label className='text-sm font-medium leading-none text-gray-800'>
            end_date
          </label>
          <input
            aria-label='end_date'
            type='text'
            {...register("end_date")}
            className={inputClass}
          />
        </div>

        {/* tipo */}
        <div className='grid w-auto grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2 my-5'>
          <div>
            <input
              id='type-1'
              className='peer hidden'
              type='radio'
              value='1'
              {...register("type")}
            />
            <label
              htmlFor='type-1'
              className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
            >
              Quadrado
            </label>
          </div>
          <div>
            <input
              id='type-2'
              className='peer hidden'
              type='radio'
              value='2'
              {...register("type")}
            />
            <label
              htmlFor='type-2'
              className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
            >
              Horizontal
            </label>
          </div>
        </div>

        {/* localização */}
        <div className='grid w-auto grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2 my-5'>
          <div>
            <input
              id='location-1'
              className='peer hidden'
              type='radio'
              value='1'
              {...register("location")}
            />
            <label
              htmlFor='location-1'
              className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
            >
              Lateral
            </label>
          </div>

          <div>
            <input
              id='location-2'
              className='peer hidden'
              type='radio'
              value='2'
              {...register("location")}
            />
            <label
              htmlFor='location-2'
              className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
            >
              Topo
            </label>
          </div>

          <div>
            <input
              id='location-3'
              className='peer hidden'
              type='radio'
              value='3'
              {...register("location")}
            />
            <label
              htmlFor='location-3'
              className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
            >
              Bottom
            </label>
          </div>

          <div>
            <input
              id='location-4'
              className='peer hidden'
              type='radio'
              value='4'
              {...register("location")}
            />
            <label
              htmlFor='location-4'
              className='block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white'
            >
              Super topo
            </label>
          </div>
        </div>

        <div className='mt-8'>
          {isLoading ? (
            <button
              aria-label='Criar minha empresa'
              className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'
            >
              Salvando
            </button>
          ) : (
            <button
              aria-label='Criar minha empresa'
              className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'
            >
              Salvar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateBanner;
