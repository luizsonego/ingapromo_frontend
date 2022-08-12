
const SkeletonLoading = () => {
  const arr = [1,2,3]
  return (
    arr.map(item => (
      <div className="animate-pulse flex bg-gray-200 w-full h-44 justify-center my-2 mx-5 md:mx-0" >
        <div className="overflow-hidden rounded-xl shadow-md"></div>
      </div>
    ))
    
  )
}

export default SkeletonLoading