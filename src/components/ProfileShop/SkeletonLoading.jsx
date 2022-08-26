
const SkeletonLoading = () => {
  return (
    <section className="mx-10">
      <div className=" mx-5 mx-auto py-16 ">
        <div className="mx-auto border border-gray-200/80 bg-slate-200/[.08] rounded-lg shadow-md overflow-hidden mt-3 mx-3 md:mx-3">
          <div className="md:flex">
            <div className="md:shrink-0 p-3 py-5 grid justify-items-center">
              <div alt="sem imagem" with="150" height="150" className="h-36 w-36 object-cover rounded-full bg-gray-200 animate-pulse" />
            </div>
            <div className=" w-full md:w-4/5 px-3 md:px-0 pb-3 md:pb-1 mt-0 md:mt-5 md:ml-3 ">
              <div className="text-xl md:text-2xl text-gray-700 font-semibold text-center md:text-left h-10 bg-gray-200 animate-pulse"></div>
              <div className="flex md:flex-row flex-col gap-4 my-5 h-7 bg-gray-200 animate-pulse">
                <div className="text-base text-gray-400/80 hover:text-gray-400 text-center md:text-left "></div>
              </div>
              <div className="flex md:flex-row flex-col gap-4 mt-3 my-5 h-4 bg-gray-200 animate-pulse">
                <div className="text-xs text-gray-400/80 hover:text-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkeletonLoading