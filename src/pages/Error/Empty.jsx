function ErrorEmpty() {
  return (
    <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img
              className="px-4 hidden md:block"
              src="https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png"
              alt=""
            />
            <img
              className="md:hidden"
              src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
              alt=""
            />
            <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
              OOPS!{' '}
            </h1>
            <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
              Não encontramos nenhum item para listar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorEmpty
