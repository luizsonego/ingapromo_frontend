import { IKImage } from 'imagekitio-react';
import { Link } from 'react-router-dom';
import checkIsPercentageOrValue from '../../helpers/checkIsPercentageOrValue';
import { fDate, fEndDate } from '../../helpers/dateConvertEpochToHuman';

function Card({ data }) {
  return (
    <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-5 mt-1">
      <div className="md:flex">
        <div className="md:shrink-0 p-3">
          {!data.imageFilePath ? (
            <img
              alt="sem imagem"
              with="150"
              height="150"
              src="/assets/no-image.jpg"
              className="h-44 w-full object-cover md:h-full md:w-44 rounded-lg"
            />
          ) : (
            <IKImage
              className="h-44 w-full object-cover md:h-full md:w-44"
              urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
              path={data?.imageFilePath}
              loading="lazy"
              alt={data.title}
              with="150"
              height="150"
            />
          )}
        </div>

        <div className=" w-full md:w-4/5 px-3 md:px-0 pb-3 md:pb-1">
          {data?.store === undefined ? null : (
            <p className="px-2 pt-3 text-sm text-gray-600 text-lg font-semibold md:text-left text-center">
              Cupom {data?.store.name}
            </p>
          )}
          <h1 className="px-2 block mt-3 text-xl leading-tight font-medium text-gray-800 ">
            {data?.title}
          </h1>
          <p className="mt-2 px-2 text-slate-500">{data?.description}</p>
        </div>

        <div className="md:shrink-0 px-2 pb-3 md:pb-0 flex flex-col items-center justify-center gap-2">
          <p>
            Vence {fEndDate(data?.end_date)}
          </p>
          <h3 className="text-lg font-bold ">
            Desconto de{' '}
            {checkIsPercentageOrValue(data.discount, data.discount_type)}
          </h3>
          <Link to={`/cupom/${data?.id}`}>
            {/* <div className="bg-primary text-white font-semibold hover:bg-secondary rounded-md py-2 px-10 flex items-center justify-center"> */}
            <div className="button-get-coupon">Quero o cupom</div>
          </Link>
          <small className="text-gray-400 ">
            Válido Até - {fDate(data?.end_date)}{' '}
          </small>
        </div>
      </div>
    </div>
  )
}

export default Card
