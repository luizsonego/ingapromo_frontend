import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Information from '../../../components/Information'
import NavBarAdmin from '../../../components/NavBarAdmin'

const columns = [
  {
    name: 'Cupom',
    selector: 'coupon',
    subSelector: 'title',
  },
  {
    name: 'Codigo do cupom',
    selector: 'coupon',
    subSelector: 'code',
  },
  {
    name: 'Codigo de uso',
    selector: 'code',
  },
  {
    name: 'Usuario',
    selector: 'consumer',
    subSelector: 'name',
  },
]

const CouponsClients = () => {
  const [search, setSearch] = useState('')

  const { data } = useQuery('coupons-clients', () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/coupons-consumer/coupons-clients`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_ACCESS_TOKEN,
          )}`,
        },
      })
      .then((res) => {
        return res.data.data
      }),
  )

  const filteredCouponsCode =
    search.length > 0 ? data.filter((item) => item.code.includes(search)) : data

  return (
    <>
      <NavBarAdmin title="Usado por clientes" />
      <input
        name="search"
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />{' '}
      {filteredCouponsCode.length} resultado
      {filteredCouponsCode.length > 1 ? 's' : ''}
      <Information
        columns={columns}
        data={filteredCouponsCode}
        upload={false}
        actions={false}
        details={false}
      />
    </>
  )
}

export default CouponsClients
