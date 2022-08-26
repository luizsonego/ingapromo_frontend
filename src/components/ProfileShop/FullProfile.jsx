import { Link } from "react-router-dom"

const FullProfile = ({data}) => {
  return (
    <>
    <div className=" mx-5 mx-auto py-16">
      <div className="mx-auto border border-gray-200/80 bg-white rounded-lg shadow-md overflow-hidden mt-3 mx-3 md:mx-3">
        <div className="md:flex">
          <div className="md:shrink-0 p-3 py-5 grid justify-items-center">
            {!data.imageUrl ? (
              <img
                alt="sem imagem"
                with="150"
                height="150"
                src="/assets/no-image.jpg"
                className="h-36 w-36 object-cover rounded-full"
              />
            ) : (
              <img
                alt="sem imagem"
                with="150"
                height="150"
                src={data?.imageUrl}
                className="h-36 w-36 object-cover rounded-full"
              />
            )}
          </div>

          <div className=" w-full md:w-4/5 px-3 md:px-0 pb-3 md:pb-1 mt-0 md:mt-5 md:ml-3">
            <h2 className="text-xl md:text-2xl text-gray-700 font-semibold text-center md:text-left">
              {data?.name} {/* //ICONE VERIFICADO */}
              <Link to={`/categoria/${data?.category}`}>
                <small className="text-sm">{data?.category}</small>
              </Link>
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
                {data.address}, {data.number}
              </div>
              <div className="text-xs text-gray-400/80 hover:text-gray-400">
                {data.district}, {data.city} -{' '}
                {data.state}
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-4 mt-3">
              <div className="text-xs text-gray-400/80 hover:text-gray-400">
                {data.facebook}
              </div>
              <div className="text-xs text-gray-400/80 hover:text-gray-400">
                {data.instagram}
              </div>
              <div className="text-xs text-gray-400/80 hover:text-gray-400">
                {data.twitter}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default FullProfile