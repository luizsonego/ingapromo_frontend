import { IKImage } from 'imagekitio-react'
import { Link } from 'react-router-dom'

const Categories = (props) => {
  const { data } = props
  return (
    <div>
      <Link to={`/categoria/${data.slug}`}>
        <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
          <div
            className="w-full h-58 min-h-58 max-h-58"
            style={{ height: '180px' }}
          >
            {!data.imageFilePath ? (
              <img
                alt="sem imagem"
                src={`https://ui-avatars.com/api/?name=${data.name}&background=random`}
                className="object-center object-cover w-full h-full hover:scale-105 hover:rotate-1 transition"
              />
            ) : (
              <IKImage
                className="object-center object-cover w-full h-full hover:scale-105 hover:rotate-1 transition"
                urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
                path={data?.imageFilePath}
                loading="lazy"
                alt={data.title}
              />
            )}
          </div>
        </div>
        <h5 className="text-lg text-gray-500 text-center mt-2 font-bold">
          {data.name}
        </h5>
      </Link>
    </div>
  )
}

export default Categories
