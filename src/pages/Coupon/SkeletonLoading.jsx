
const SkeletonLoading = () => {
  return (
    <section className="container mx-auto pt-12 md:pt-7">
      <div className="text-center text-lg md:text-3xl font-semibold my-7 h-10">
        Confira as instruções para uso do cupom
      </div>

        <div className="md:flex items-start justify-center py-5 md:py-12 2xl:px-20 md:px-6 px-4 bg-white">
          <div className="xl:w-2/6 lg:w-2/5 w-80">
            <div className="animate-pulse w-full h-48 bg-gray-200"></div>
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
              <div className="animate-pulse lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2 bg-gray-200 h-10 w-full"></div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-300">Desconto</p>
                <div className="flex items-center justify-center">
                  <div className="animate-pulse bg-gray-200 h-7 w-28"></div>
              </div>
            </div>
            <div className="py-4 border-b border-gray-200 flex items-center justify-between">
              <p className="text-base leading-4 text-gray-300">Validade</p>
              <div className="flex items-center justify-center">
                <div className="animate-pulse bg-gray-200 h-7 w-28"></div>
              </div>
            </div>
            <div className="animate-pulse bg-gray-200 w-full h-16 "></div>

            <div className="">
              <div className="animate-pulse bg-gray-200 h-5 w-28 mt-5"></div>
              <div className="animate-pulse bg-gray-200 h-7 w-28 mt-5"></div>
            </div>

          </div>
        </div>
    </section>
  )
}

export default SkeletonLoading