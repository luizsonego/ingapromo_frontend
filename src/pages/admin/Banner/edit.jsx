import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import NavBarAdmin from '../../../components/NavBarAdmin';

const inputClass = 'bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2';

const EditBanner = () => {
  const { id } = useParams();
  let navigate = useNavigate()
  
	const { register, handleSubmit, setValue } = useForm();

    const { data } = useQuery('banner', () => axios.get(`${process.env.REACT_APP_API}/v1/banner/view?id=${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)}`,
        }
      }
		).then(res => {
			setValue('title', res.data.data.title)
			setValue('link', res.data.data.link)
			setValue('status', res.data.data.status)
			setValue('start_date', res.data.data.start_date)
			setValue('end_date', res.data.data.end_date)
			setValue('type', res.data.data.type)
      setValue('location', res.data.data.location)
		return res.data.data
    }));
    
    //update
    const putBanner = async (dataForm) => {
		const response = await axios.put(
			`${process.env.REACT_APP_API}/v1/banner/update?id=${data.id}`,
			dataForm,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)}`
				}
			})

		return response.data
	}
	const { isLoading, mutate } = useMutation(putBanner, {
		onSuccess: (data) => {
			navigate('/admin/banner')
		}
	})
	const Submit = (data) => {
		mutate(data);
  };
  

	if(isLoading) {
		return <h1>Carregando...</h1>
  }
  
  
  return (
		<>
			<NavBarAdmin title={`Editar Banner: ${data?.title}`} />

			<form onSubmit={handleSubmit(Submit)}>
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
        {/* <div>
          <lable className='text-sm font-medium leading-none text-gray-800'>
            Loja
          </lable>
          <select className={inputClass} {...register("store_id")}>
            {dataStore && dataStore?.map((item) => (
              <option value={item.value}>{item.label}</option>
            ))}
          </select>
        </div> */}
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
        <div className="my-5">
        <label className='text-sm font-medium leading-none text-gray-800'>
          Tipo de banner
        </label>
        <div className='grid w-auto grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2'>
          <div>
          <label
              className='block select-none rounded-xl p-2 text-center bg-blue-500 font-bold text-white'
            >
              {data?.type}
            </label>
          </div>
        </div>
        </div>
        {/* localização */}
        <div className="my-5">
        <label className='text-sm font-medium leading-none text-gray-800'>
          Posição do banner
        </label>
        <div className='grid w-auto grid-cols-4 space-x-2 rounded-xl bg-gray-200 p-2'>
          <div>
          <label
              className='block select-none rounded-xl p-2 text-center bg-blue-500 font-bold text-white'
            >
              {data?.location}
            </label>
          </div>
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
		</>
  )
}

export default EditBanner