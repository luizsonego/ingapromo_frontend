
const SkeletonLoading = () => {
  const arr = [1,2,3,4,5]
  return (
    arr.map(item => (
      <div className="animate-pulse mx-auto  bg-gray-200 rounded-xl shadow-md overflow-hidden md:mx-5 mt-3 h-44">
        <div className="md:flex">

        <div className="md:shrink-0 p-3">
          <div className="h-44 w-44 bg-gray-200 object-cover md:h-full md:w-44 rounded-lg"
          />
        </div>

        <div className="w-full md:w-[60rem] px-3 md:px-0 pb-3 md:pb-1">
          
        </div>
      
      </div>
    </div>
    ))
    
  )
}

export default SkeletonLoading