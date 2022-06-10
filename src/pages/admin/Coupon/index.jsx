import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import CardAdmin from '../../../components/CardAdmin';
import NavBarAdmin from '../../../components/NavBarAdmin';
const Coupon = () => {

    const { isLoading, data } = useQuery(
        'coupon',
        async () =>
          axios.get(
            `${process.env.REACT_APP_API}/v1/coupon/view-my-coupons`,
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)}`,
              }
            }
          ).then(res => res.data.data));

          
    if (isLoading) {
        return (
            <h1>Carregando</h1>
        )
    }


    return (
        <div>
          <NavBarAdmin
            title="Cupons"
            link="/admin/cupom/criar"
            linkText="Cadastrar"
          />
            
            <div className="lg:w-full rounded-xl my-3 grid grid-cols-2 gap-2 my-3">
              {
                data?.map((item, index) => (
                  <CardAdmin
                    key={index}
                    uploadImage={true}
                    data={item}
                  />
                ))
              }
            </div>

        </div>
    )
}
export default Coupon;
