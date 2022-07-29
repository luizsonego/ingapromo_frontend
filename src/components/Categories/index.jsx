import { IKImage } from 'imagekitio-react'
import { Link } from 'react-router-dom'

const Categories = ({ data }) => {
  return (
    <>
      <div className="grid justify-center grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5 my-10 px-2 md:px-0">
        {data?.map((category, index) => (
          <Link to={`/categoria/${category.slug}`} key={index}>
            <div className="w-full bg-white rounded-full md:rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
              <div className="w-full h-58 min-h-58 max-h-58 md:h-32">
                {!category.imageFilePath ? (
                  <img
                    alt={category.name}
                    title={category.name}
                    src={`https://ui-avatars.com/api/?name=${category.name}`}
                    className="object-center object-cover w-full h-full hover:scale-105 hover:rotate-1 transition"
                  />
                ) : (
                  <IKImage
                    className="object-center object-cover w-full h-full hover:scale-105 hover:rotate-1 transition"
                    urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
                    path={category?.imageFilePath}
                    loading="lazy"
                    alt={category.title}
                  />
                )}
              </div>
            </div>
            <h5 className="text-lg text-gray-500 text-center mt-2 font-bold hidden md:block">
              {category.name}
            </h5>
          </Link>
        ))}
      </div>
      <div className="flex justify-center md:justify-end ">
        <button
          className="
        mb-3
        border
        md:border-2
        px-10
        py-2
        md:py-3
        rounded-md
        text-normal
        md:text-xl
        font-medium
        transition duration-300
        border-amber-500
        text-gray-500
        hover:border-primary
        hover:text-white
        hover:bg-amber-400"
        >
          <Link to="/categorias">Ver Todas as categorias</Link>
        </button>
      </div>
    </>
  )
}

export default Categories
