import axios from 'axios'
import { IKImage } from 'imagekitio-react'
import { useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import ProfileSmall from '../../components/ProfileShop/small'
import checkIsPercentageOrValue from '../../helpers/checkIsPercentageOrValue'
import { fDate } from '../../helpers/dateConvertEpochToHuman'

const Coupon = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  const token = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)

  const { data: couponData, isLoading } = useQuery(['coupon', id], async () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/coupon/get-coupon?id=${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res.data
      }),
  )

  const postUseCoupon = async (dataForm) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API}/v1/coupons-consumer/use-coupon`,
      dataForm,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_ACCESS_TOKEN,
          )}`,
        },
      },
    )

    return response.data
  }

  const { isLoading: loadingUseCoupon, mutate } = useMutation(postUseCoupon, {
    onSuccess: () => {
      console.log('success')
      //Abrir modal mostrando o cupom usado com sucesso com link para o painel
      // navigate("/admin/banner");
    },
  })

  useEffect(() => {
    sessionStorage.removeItem('coupon')
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  const handleUseCoupon = () => {
    !token &&
      sessionStorage.setItem(
        'coupon',
        couponData.data.id,
      )(navigate('/cadastro'))

    couponForUser()
  }

  const couponForUser = () => {
    const couponId = id

    const data = {
      couponId,
    }
    mutate(data)
  }

  return (
    <div className="">
      <section className="container mx-auto pt-12 md:pt-7">
        <h1 className="text-center text-lg md:text-3xl font-semibold my-7">
          Confira as instruções para uso do cupom
        </h1>
        <div className="md:flex items-start justify-center py-5 md:py-12 2xl:px-20 md:px-6 px-4 bg-white">
          <div className="xl:w-2/6 lg:w-2/5 w-80">
            {!couponData?.data.imageFilePath ? (
              <img
                alt="sem imagem"
                src="/assets/no-image.jpg"
                className="w-full"
              />
            ) : (
              <IKImage
                className="w-full"
                urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
                path={couponData?.data.imageFilePath}
                loading="lazy"
                alt={couponData.data.title}
              />
            )}
          </div>

          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
              <h1 className=" lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
                {couponData?.data.title}
              </h1>
            </div>

            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800">Desconto</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600">
                  {checkIsPercentageOrValue(
                    couponData?.data.discount,
                    couponData?.data.discount_type,
                  )}
                </p>
              </div>
            </div>

            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-800">Validade</p>
              <div className="flex items-center justify-center">
                <p className="text-sm leading-none text-gray-600 mr-3">
                  {fDate(couponData?.data.end_date)}
                </p>
              </div>
            </div>

            {loadingUseCoupon ? (
              <button className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700">
                Aplicando cupom
              </button>
            ) : (
              <button
                onClick={handleUseCoupon}
                className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700"
              >
                Usar Cupom
              </button>
            )}

            <div>
              <p className="text-base lg:leading-tight leading-normal text-gray-600 mt-7">
                {couponData?.data.description}
              </p>
              <p className="text-base leading-4 mt-7 text-gray-600">
                Cupom: {couponData?.data.code}
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex items-start justify-center py-7">
          <div className="container">
            <ProfileSmall
              count={couponData?.count}
              data={couponData?.data.store}
              category={couponData?.data.category}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Coupon
