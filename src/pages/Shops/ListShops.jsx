import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

const ListShops = () => {
  const { data: listOfShops } = useQuery('list-store', async () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/store`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res.data
      }),
  )

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-5 md:pb-12 pt-7 md:pt-0">
        <h1 className="font-bold text-xl text-2xl md:text-4xl lg:text-5xl font-heading text-gray-800">
          Lojas
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {listOfShops?.data.map((shop, index) => (
          <div className="bg-white rounded-xl shadow-md mt-3 p-1 md:p-5 flex-col grid justify-items-center ">
            <Link to={`/loja/${shop?.id}`} key={index}>
              {!shop.imageUrl ? (
                <img
                  alt={shop.name}
                  title={shop.name}
                  with="150"
                  height="150"
                  src="/assets/no-image.jpg"
                  className="h-24 md:w-24  object-cover rounded-full mx-auto"
                />
              ) : (
                <img
                  alt={shop.name}
                  title={shop.name}
                  with="150"
                  height="150"
                  src={shop?.imageUrl}
                  className="h-24 md:w-24  object-cover rounded-full mx-auto"
                />
              )}
              <h2 className="text-lg text-center text-semibold text-gray-700 my-2 md:h-24 ">
                {shop?.name}
                <br />
                <small className="text-xs text-gray-400">
                  {shop?.category}
                </small>
              </h2>
              <h3 className="text-md text-center text-primary">
                {' '}
                {shop?.coupon.length} cupo
                {shop?.coupon.length <= 1 ? 'm' : 'ns'}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ListShops
