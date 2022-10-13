import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import AdsVertical from "../../components/Ads/vertical";
import Card from "../../components/Card";
import SkeletonLoading from "../../components/Card/SkeletonLoading";

const AllCoupons = () => {
  const [page, setPage] = useState(1); //"http://localhost:8000/v1/coupon/index?page=1"
  const [linkPagination, setLinkPagination] = useState([]);
  const { data, isLoading } = useQuery(
    ["all-coupons-gest", page],
    () =>
      axios
        .get(`${process.env.REACT_APP_API}/v1/coupon/index/?page=${page}`, {
          headers: { "Content-Type": "application/json" },
        })
        .then((response) => {
          setLinkPagination([response.data._link, response.data._meta]);
          return response.data.data;
        }),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );


  return (
    <section className="container mx-auto pt-12">
      <div className="mx-auto flex flex-col lg:flex-row gap-2">
        <div className="mt-6 lg:mt-0 md:w-full md:w-2/6 rounded-xl">
          <AdsVertical />
        </div>
        <div className="lg:w-auto rounded-xl mx-2 md:mx-auto">
          {isLoading && <SkeletonLoading />}
          {data?.map((item) => (
            <Card data={item} key={item.id} />
          ))}

          <div className="flex justify-center items-center gap-3 mt-12">
            <button
              className="bg-primary px-7 py-3 rounded"
              onClick={() => {
                window.scrollTo({ top: 0 });
                setPage((old) => Math.max(old - 1, 1))
              }}
              disabled={page === 1}
            >
              {'< Página Anterior'}
            </button>
            <span>Página Atual: {page}</span>
            <button
              className="bg-primary px-7 py-3 rounded"
              onClick={() =>{
                window.scrollTo({ top: 0 });
                setPage((old) => (linkPagination[1].pageCount ? old + 1 : old))
              }}
              // disabled={
              //   linkPagination[0].last.href
              // }
            >
              {'Próxima Página >'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCoupons;
