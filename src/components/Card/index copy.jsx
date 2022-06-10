import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";

function Card({ data }) {
  return (
    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl h-auto">
      {!data.imageFilePath ? (
        <img
          alt="sem imagem"
          with="200"
          height="200"
          src="https://ui-avatars.com/api/?name=sem+imagem&background=cccccc&color=ddd"
          className="h-44 max-h-44sm:h-full w-full sm:w-3/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
        />
      ) : (
        <IKImage
          className="h-44 max-h-44sm:h-full w-full sm:w-3/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
          urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
          path={data?.imageFilePath}
          loading="lazy"
          alt={data.title}
          with="200"
          height="200"
        />
      )}

      <div className="relative sm:w-8/12 pl-0 p-5 h-58">
        <div className="space-y-2">
          <div className="space-y-2">
            <h4 className="text-2xl font-semibold text-cyan-900">
              {data?.title}
            </h4>
            <p className="text-gray-600">{data?.description}</p>
          </div>

          <div className="space-x-2 items-center sm:absolute bottom-5 left-0">
            <p className="font-semibold text-sm text-gray-400">
              Válido Até - {data?.validate}
            </p>
          </div>

          <div className="space-x-2 sm:absolute  bottom-5 right-0">
            <Link to={`/cupom/${data?.id}`}>
              <div className="bg-gray-300 rounded-md p-2 flex items-center justify-center">
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
  );
}

export default Card;
