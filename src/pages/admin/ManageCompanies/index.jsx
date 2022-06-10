import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Information from '../../../components/Information';
import NavBarAdmin from '../../../components/NavBarAdmin';

const columns = [
  {
    name: 'Nome',
    selector: 'name',
  }, {
    name: "Telefone",
    selector: 'phone',
  }, {
    name: 'Cidade',
    selector: 'city',
  }, {
    name: "Criado",
    selector: 'created_at',
  }, {
    name: "Status",
    selector: 'status',
  }
]

const ManageCompanies = () => {
	const { data, isLoading } = useQuery(
    "companies",
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
          return res.data.data;
        }),
    {
      staleTime: 3000,
    },
	);

  if (isLoading) { 
    return <div>Loading...</div>;
  }
	
  return (
		<>
      <NavBarAdmin title='Empresas' link='criar' linkText='Novo' />
      
      <Information columns={columns} data={data} modalTitle="Upload de imagem" link='banner' />

    </>
  )
}

export default ManageCompanies