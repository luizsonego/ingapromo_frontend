import axios from 'axios'
import { useQuery } from 'react-query'
import AdsVertical from '../../components/Ads/vertical'
import Card from '../../components/Card'
import SkeletonLoading from '../../components/Card/SkeletonLoading'
import Categories from '../../components/Categories'

function Home() {
  const { data: couponsData, isLoading: couponsLoading } = useQuery('coupons-gest', async () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/coupon/get-all-coupons`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data.data),
  )

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery('categories-gest', async () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/category?per-page=5`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res.data.data
      }),
  )

  return (
    <>
      <main>
        {/* <MainSlider /> */}

        <section className="container mx-auto pt-12">
          <Categories data={categoriesData} loading={categoriesLoading} />
        </section>

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
      </main>
    </>
  )
}

export default Home
