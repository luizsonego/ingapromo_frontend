import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import AdsVertical from '../../components/Ads/vertical'
import Card from '../../components/Card'
import Categories from '../../components/Categories'

function Home() {
  const { data: couponsData } = useQuery('coupons-gest', async () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/coupon/get-all-coupons`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data.data),
  )

  const { data: categoriesData } = useQuery('categories-gest', async () =>
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

        <section className="container mx-auto pt-12 bg-white">
          {/* <div className="flex flex-row flex-wrap items-center justify-center"> */}
          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-5 gap-5  my-10">
            {categoriesData?.map((category, index) => (
              <Categories key={index} data={category} />
            ))}
          </div>
          {/* </div> */}
          {categoriesData?.length > 0 && (
            <div className="flex justify-end mr-3">
              <button className="mr-3 mb-3 border-2 px-10 py-3 rounded-md text-1xl font-medium  transition duration-300 border-gray-500 text-gray-500 hover:border-primary hover:text-black hover:bg-primary">
                <Link to="/categorias">Ver Todas as categorias</Link>
              </button>
            </div>
          )}
        </section>

        <section className="container mx-auto pt-12 bg-white">
          <div className="container mx-auto flex flex-col lg:flex-row gap-4">
            <div className="mt-6 lg:mt-0 lg:w-1/4 rounded-xl">
              <AdsVertical />
            </div>

            <div className="lg:w-2/3 rounded-xl mx-3 md:mx-auto">
              {couponsData?.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
