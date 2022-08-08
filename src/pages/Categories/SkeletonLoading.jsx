
const SkeletonLoading = () => {

  
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">

      <div className="text-center pb-12">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Categorias
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">


        <div className="animate-pulse w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
          <div className="w-full h-36 max-h-58">
            <div className="w-full"></div>
          </div>
        </div>
        <div className="animate-pulse w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
          <div className="w-full h-36 max-h-58">
            <div className="w-full bg-green-700"></div>
          </div>
        </div>
        <div className="animate-pulse w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
          <div className="w-full h-36 max-h-58">
            <div className="w-full bg-green-700"></div>
          </div>
        </div>
        <div className="animate-pulse w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
          <div className="w-full h-36 max-h-58">
            <div className="w-full bg-green-700"></div>
          </div>
        </div>
        


      </div>

    </section>
  )
}

export default SkeletonLoading