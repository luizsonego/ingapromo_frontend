import React from "react";

const ShopByCategory = () => {
  return (
    <button className="bg-yellow-400 hover:bg-gray-700 font-bold uppercase px-4 xl:px-6 py-2 xl:py-3 rounded flex-shrink-0 flex items-center">
      <svg
        className="h-8 p-1 svg-inline--fa fa-bars fa-w-14 fa-9x"
        aria-hidden="true"
        focusable="false"
        data-prefix="fal"
        data-icon="bars"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"
          className=""
        ></path>
      </svg>
      <span className="ml-4">Por Categorias</span>
    </button>
  );
};

export default ShopByCategory;
