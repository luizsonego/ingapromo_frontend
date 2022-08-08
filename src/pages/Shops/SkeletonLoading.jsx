
const SkeletonLoading = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-5 md:pb-12 pt-7 md:pt-0">
        <h1 className="font-bold text-xl text-2xl md:text-4xl lg:text-5xl font-heading text-gray-800">
          Lojas
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <div className="animate-pulse bg-slate-200/[.08] rounded-xl shadow-md mt-3 p-1 md:p-5 flex-col grid justify-items-center ">
          <div className="h-24 md:w-24 bg-gray-200 object-cover rounded-full mx-auto"></div>
          <div className="h-7 w-11/12 bg-gray-200 my-2"></div>
          <div className="h-4 w-4/5 bg-gray-200 my-2"></div>
        </div>

        <div className="animate-pulse bg-slate-200/[.08] rounded-xl shadow-md mt-3 p-1 md:p-5 flex-col grid justify-items-center ">
          <div className="h-24 md:w-24 bg-gray-200 object-cover rounded-full mx-auto"></div>
          <div className="h-7 w-11/12 bg-gray-200 my-2"></div>
          <div className="h-4 w-4/5 bg-gray-200 my-2"></div>
        </div>
        <div className="animate-pulse bg-slate-200/[.08] rounded-xl shadow-md mt-3 p-1 md:p-5 flex-col grid justify-items-center ">
          <div className="h-24 md:w-24 bg-gray-200 object-cover rounded-full mx-auto"></div>
          <div className="h-7 w-11/12 bg-gray-200 my-2"></div>
          <div className="h-4 w-4/5 bg-gray-200 my-2"></div>
        </div>
        <div className="animate-pulse bg-slate-200/[.08] rounded-xl shadow-md mt-3 p-1 md:p-5 flex-col grid justify-items-center ">
          <div className="h-24 md:w-24 bg-gray-200 object-cover rounded-full mx-auto"></div>
          <div className="h-7 w-11/12 bg-gray-200 my-2"></div>
          <div className="h-4 w-4/5 bg-gray-200 my-2"></div>
        </div>
        <div className="animate-pulse bg-slate-200/[.08] rounded-xl shadow-md mt-3 p-1 md:p-5 flex-col grid justify-items-center ">
          <div className="h-24 md:w-24 bg-gray-200 object-cover rounded-full mx-auto"></div>
          <div className="h-7 w-11/12 bg-gray-200 my-2"></div>
          <div className="h-4 w-4/5 bg-gray-200 my-2"></div>
        </div>
        <div className="animate-pulse bg-slate-200/[.08] rounded-xl shadow-md mt-3 p-1 md:p-5 flex-col grid justify-items-center ">
          <div className="h-24 md:w-24 bg-gray-200 object-cover rounded-full mx-auto"></div>
          <div className="h-7 w-11/12 bg-gray-200 my-2"></div>
          <div className="h-4 w-4/5 bg-gray-200 my-2"></div>
        </div>
      </div>

    </section>
  )
}

export default SkeletonLoading