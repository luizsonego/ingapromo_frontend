import axios from "axios"
import { useQuery } from "react-query"
import AdsVertical from "../../components/Ads/vertical"
import Card from "../../components/Card"
import SkeletonLoading from "../../components/Card/SkeletonLoading"

const AllCoupons = () => {
  const { data: couponsData, isLoading: couponsLoading } = useQuery('all-coupons-gest', async () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/coupon`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data.data),
  )
  return (
    <section className="container mx-auto pt-12">
          <div className="mx-auto flex flex-col lg:flex-row gap-2">
            <div className="mt-6 lg:mt-0 md:w-full md:w-2/6 rounded-xl">
              <AdsVertical />
            </div>

            <div className="lg:w-auto rounded-xl mx-2 md:mx-auto">
              {couponsLoading && (<SkeletonLoading />)}
              {couponsData?.map((item) => (
                <Card data={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>
  )
}

export default AllCoupons