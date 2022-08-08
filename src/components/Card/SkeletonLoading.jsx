
const SkeletonLoading = () => {
  const arr = [1,2,3,4,5]
  return (
    <>
    {
      arr.map((item, index) => (
        <div key={index} className="animate-pulse w-11/12 h-40 mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden md:mx-5 mt-3">
          <div className="md:flex">
            <div className="md:shrink-0 p-3">
              <div className="h-44 w-full object-cover md:h-full md:w-44 rounded-lg">

              </div>
            </div>
            <div className="w-4/5 px-3 md:px-0 pb-3 md:pb-1">
            
            </div>
            <div className="md:shrink-0 px-2 pb-3 md:pb-0 flex flex-col items-center justify-center gap-2">

            </div>
          </div>
        </div>
      ))
    }
    </>
  )
}

export default SkeletonLoading