import { Link } from 'react-router-dom'

const classIcon = 'mr-2 h-4 w-4 fill-gray-500/80'
const ProfileSmall = ({ data, count }) => {
  return (
    <div className="mx-auto border border-gray-200/80 bg-white rounded-lg shadow-md overflow-hidden mt-3 mx-3 md:mx-0">
      <div className="md:flex">
        <div className="md:shrink-0 p-3 py-5 grid justify-items-center">
          {!data.image ? (
            <img
              alt="sem imagem"
              with="150"
              height="150"
              src="/assets/no-image.jpg"
              className="h-36 object-cover rounded-full"
            />
          ) : (
            <img
              alt="sem imagem"
              with="150"
              height="150"
              src={data?.image}
              className="h-36 object-cover rounded-full"
            />
          )}
        </div>
        <div className=" w-full md:w-4/5 px-3 md:px-0 pb-3 md:pb-1 mt-0 md:mt-5 md:ml-3">
          <h2 className="text-xl md:text-2xl text-gray-700 font-semibold text-center md:text-left">
            <Link
              to={`/loja/${data.id}`}
              title={`Acessar página de ${data?.name}`}
              alt={`Acessar página de ${data?.name}`}
            >
              {data?.name} {/* //ICONE VERIFICADO */}
            </Link>
            <small className="text-sm">{data?.category}</small>
          </h2>

          <div className="flex md:flex-row flex-col gap-4">
            <div className="text-base text-gray-400/80 hover:text-gray-400 text-center md:text-left">
              {data.website}
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4 mt-3">
            <div className="text-xs text-gray-400/80 hover:text-gray-400">
              {data.phone}
            </div>
            <div className="text-xs text-gray-400/80 hover:text-gray-400">
              {data.whatsapp}
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4 mt-3">
            <div className="text-xs text-gray-400/80 hover:text-gray-400">
              {data.district}, {data.city} - {data.state}
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4 mt-3 md:mb-3">
            <div className="grid justify-items-center">
              <Link
                to={`/loja/${data.id}`}
                className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                title={`Ver todos os cupons de ${data?.name}`}
                alt={`Ver todos os cupons de ${data?.name}`}
              >
                <div className="flex flex-row items-center justify-center">
                  <svg
                    className="mr-3 fill-gray-500/95"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
                  </svg>

                  <span className="font-bold text-gray-600"> {count} </span>
                </div>

                <div className="mt-2 text-sm text-gray-400">
                  Cupons cadastrados
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSmall
