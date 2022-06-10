import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data } = useQuery("list-categories", async () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/category`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res.data.data;
      })
  );

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Categorias
        </h1>
      </div>

      

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((category, index) => (
          <div key={index}>
            <Link to={`/categoria/${category.slug}`}>
              <div
                className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative"
              >
                <div className="w-full h-36 max-h-58">
                  {!category.imageFilePath ? (
                    <img
                    alt="sem imagem"
                    src={`https://ui-avatars.com/api/?name=${category.name}&background=random`}
                    className="object-center bg-cover object-cover w-full h-full hover:scale-105 hover:rotate-1 transition"
                  />
                  ) : (
                    <img
                    alt="sem imagem"
                    src={`https://ik.imagekit.io/500milhas/tr:w:500${category.imageFilePath}`}
                        className="object-center bg-cover object-cover w-full h-full hover:scale-105 hover:rotate-1 transition"
                        loading="lazy"
                  />
                )}
                  {/* {!category.imageFilePath ? (
                    <img
                      alt="sem imagem"
                      src={`https://ui-avatars.com/api/?name=${category.name}&background=random`}
                      className="object-center bg-cover object-cover w-full h-full hover:scale-105 hover:rotate-1 transition"
                    />
                  ) : (
                    <IKImage
                        className="object-center object-cover bg-cover w-full h-full hover:scale-105 hover:rotate-1 transition"
                        urlEndpoint="https://ik.imagekit.io/500milhas/cupom"
                        path={category?.imageFilePath}
                        loading="lazy"
                        alt={category.title}
                    />
                  )} */}
                </div>
              </div>
              <h5 className="text-lg text-gray-500 text-center mt-2 font-bold">
                {category.name}
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
