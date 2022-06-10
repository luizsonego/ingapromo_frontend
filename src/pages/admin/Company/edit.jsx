import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import NavBarAdmin from '../../../components/NavBarAdmin';

const inputClass = 'bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2';

const CompanyEdit = () => {
  let navigate = useNavigate()
  const [postalCode, setPostalCode] = useState('')

  const {register, handleSubmit, setValue} = useForm();

  const { data } = useQuery('company', () => axios.get(`${process.env.REACT_APP_API}/v1/store/get-store`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)}`,
        }
      }
    ).then(res => res.data.data));

    //update
    const putCompany = async (dataForm) => {
      const response = await axios.put(
        `${process.env.REACT_APP_API}/v1/store/update?id=${data.id}`,
        dataForm,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)}`
          }
        })
  
      return response.data
    }
    const { isLoading, mutate } = useMutation(putCompany, {
      onSuccess: (data) => {
        navigate('/admin/empresa')
      }
    })

    const handleSubmitCompany = (data) => {
      mutate(data);
    };



    if(!data || data.length === 0 || data === undefined) {
      navigate('/admin/empresa')
    }

  useEffect(() => {
    setValue('name', data.name)
    setValue('email', data.email)
    setValue('address', data.address)
    setValue('phone', data.phone)
    setValue('whatsapp', data.whatsapp)
    setValue('website', data.website)
    setValue('latitude', data.latitude)
    setValue('longitude', data.longitude)
    setValue('district', data.district)
    setValue('city', data.city)
    setValue('state', data.state)
    setValue('country', data.country)
    setValue('number', data.number)
    setPostalCode(data.postal_code)
  }, [data, setValue])

  const handleFetchCep = async (e) => {
    await axios.get(`https://brasilapi.com.br/api/cep/v2/${e.target.value}`).then(res => {
      setValue('address', res.data?.street)
      setValue('city', res.data?.city)
      setValue('state', res.data?.state)
      setValue('district', res.data?.neighborhood)
      setValue('latitude', res.data?.location.coordinates.latitude)
      setValue('longitude', res.data?.location.coordinates.longitude)
    })
  };

if(isLoading) {
  return (
    <>
    <NavBarAdmin
        title="Editar Empresa"
        />
    <h1>Carregando</h1>
        </>
  )
}

  return (
    <div>
      <NavBarAdmin
        title="Editar Empresa"
      />
      
      <form onSubmit={handleSubmit(handleSubmitCompany)}>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Nome do estabelecimento</lable>
          <input
            aria-label="Nome do estabelecimento"
            type="text"
            {...register("name")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">CEP</lable>
          <input
            aria-label="CEP"
            type="text"
            onBlur={handleFetchCep}
            value={postalCode}
            onChange={e => setPostalCode(e.target.value)}
            // {...register("postal_code")}
            className={inputClass}
            />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Endereço</lable>
          <input
            aria-label="Endereço"
            type="text"
            {...register("address")}
            className={inputClass}
            />
        </div>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Numero</lable>
          <input
            aria-label="numero"
            type="text"
            {...register("number")}
            className={inputClass}
            />
        </div>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Cidade</lable>
          <input
            aria-label="cidade"
            type="text"
            {...register("city")}
            className={inputClass}
            />
        </div>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Bairro</lable>
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
          <lable className="text-sm font-medium leading-none text-gray-800">Estado</lable>
          <input
            aria-label="estado"
            type="text"
            {...register("state")}
            className={inputClass}
            />
        </div>


        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Telefone</lable>
          <input
            aria-label="Telefone"
            type="text"
            {...register("phone")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Whatsapp</lable>
          <input
            aria-label="Whatsapp"
            type="text"
            {...register("whatsapp")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Website</lable>
          <input
            aria-label="Website"
            type="text"
            {...register("website")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">latitude</lable>
          <input
            aria-label="Latitude"
            type="text"
            {...register("latitude")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">longitude</lable>
          <input
            aria-label="Longitude"
            type="text"
            {...register("longitude")}
            className={inputClass}
          />
        </div>

        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Categoria</lable>
          <select className={inputClass} name="address">
            <option value="">Selecione uma categoria</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
          </select>
        </div>

        <div className="mt-8">
          <button aria-label="Criar minha empresa" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
            Salvar
          </button>
        </div>


      </form>
    </div>
  )
}
export default CompanyEdit;