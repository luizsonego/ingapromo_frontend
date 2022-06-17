import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import AdsVertical from "../../components/Ads/vertical";
import Card from "../../components/Card";

const Category = () => {
  let params = useParams();
  const { data, isLoading } = useQuery(
    ["coupons_category", params.slug],
    async () =>
      axios
        .get(
          `${process.env.REACT_APP_API}/v1/category/slug?slug=${params.slug}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          return res.data;
        })
  );

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <section className="container mx-auto pt-12 bg-white">
      <div class="text-center pb-12">
        <h1 class="font-bold text-lg md:text-2xl lg:text-4xl font-heading text-gray-900">
          {data?.name}
        </h1>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row gap-4">
        <div className="mt-6 lg:mt-0 lg:w-1/4 rounded-xl">
          <AdsVertical />
        </div>
        <div className="lg:w-2/3 rounded-xl">
          {data?.coupon?.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
