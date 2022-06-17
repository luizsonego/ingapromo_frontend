import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
import checkIsPercentageOrValue from "../../helpers/checkIsPercentageOrValue";
import { fDate, fEndDate } from "../../helpers/dateConvertEpochToHuman";

function Card({ data }) {
  return (
    <>
      {/* <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-5 my-3"> */}
      <div className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:mx-5 mt-3">
        <div className="md:flex">
          <div className="md:shrink-0">
            <span className="w-full value-discount bg-primary">
              <span className="text-white text-lg font-bold">
                {checkIsPercentageOrValue(data.discount, data.discount_type)}
              </span>
            </span>
            {!data.imageFilePath ? (
              <img
                alt="sem imagem"
                with="200"
                height="200"
                src="/assets/no-image.jpg"
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            ) : (
              <IKImage
                className="h-48 w-full object-cover md:h-full md:w-48"
                urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
                path={data?.imageFilePath}
                loading="lazy"
                alt={data.title}
                with="200"
                height="200"
              />
            )}
          </div>
          <div className="pb-1">
            <span className="w-full value-discount bg-red">
              <span className="text-white text-lg font-bold">
                expira {fEndDate(data?.end_date)}
              </span>
            </span>
            {/* <div class="px-8 pt-3 uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {data?.title}
            </div> */}
            <Link
              to={`/cupom/${data?.id}`}
              className="px-8 block mt-3 text-lg leading-tight font-medium text-black hover:underline"
            >
              {data?.title}
            </Link>
            <p className="mt-2 px-8 text-slate-500">{data?.description}</p>

            <hr className="mt-8" />
            <div className="">
              <div className="h-16 flex justify-between items-center px-8">
                <div>
                  <p className="font-semibold text-sm text-gray-400">
                    Válido Até - {fDate(data?.end_date)}{" "}
                  </p>
                </div>
                <div className="">
                  <Link to={`/cupom/${data?.id}`}>
                    <div className="bg-secondary hover:bg-primary rounded-md p-2 flex items-center justify-center">
                      Ver cupom
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
