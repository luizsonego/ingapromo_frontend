
const SkeletonLoading = () => {
  return (
    <div className="grid justify-center grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5 my-10 px-2 md:px-0">
      
      <div className="animate-pulse w-full bg-gray-200 rounded-full md:rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
        <div className="w-full h-58 min-h-58 max-h-58 md:h-32"></div>
      </div>
      <div className="animate-pulse w-full bg-gray-200 rounded-full md:rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
        <div className="w-full h-58 min-h-58 max-h-58 md:h-32"></div>
      </div>
      <div className="animate-pulse w-full bg-gray-200 rounded-full md:rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
        <div className="w-full h-58 min-h-58 max-h-58 md:h-32"></div>
      </div>
      <div className="animate-pulse w-full bg-gray-200 rounded-full md:rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
        <div className="w-full h-58 min-h-58 max-h-58 md:h-32"></div>
      </div>
      <div className="animate-pulse w-full bg-gray-200 rounded-full md:rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row relative">
        <div className="w-full h-58 min-h-58 max-h-58 md:h-32"></div>
      </div>


    </div>
  )
}

export default SkeletonLoading