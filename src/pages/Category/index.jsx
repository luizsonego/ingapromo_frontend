import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import AdsVertical from '../../components/Ads/vertical'
import Card from '../../components/Card'
import SkeletonLoading from '../../components/Card/SkeletonLoading'

const Category = () => {
  let params = useParams()
  const { data, isLoading } = useQuery(
    ['coupons_category', params.slug],
    async () =>
      axios
        .get(
          `${process.env.REACT_APP_API}/v1/category/slug?slug=${params.slug}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then((res) => {
          return res.data
        }),
  )

  return (
    <section className="container mx-auto pt-12 ">
      <div className="text-center pb-2 md:pb-5 pt-7 md:pt-0">
        <h1 className="font-bold text-xl md:text-2xl lg:text-4xl font-heading text-gray-900">
          {data?.name}
        </h1>
      </div>

      <div className="mx-auto flex flex-col lg:flex-row gap-2">
        <div className="mt-6 lg:mt-0 md:w-full md:w-2/6 rounded-xl">
          <AdsVertical />
        </div>

        <div className="lg:w-auto rounded-xl mx-2 md:mx-auto">
          {isLoading && (<SkeletonLoading />)}
          {data?.coupon?.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Category
