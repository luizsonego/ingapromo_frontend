
const FeaturedBrands = () => {
    return (
        <section className="container mx-auto pt-12">
      
      <div className="relative flex items-end font-bold">
        <h2 className="text-2xl">Featured Brands</h2>
        <a href className="ml-10 flex items-center text-gray-400">
          <span className="text-sm">All Offers</span>
          <svg className="ml-3 h-3.5 svg-inline--fa fa-chevron-right fa-w-8 fa-9x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" ><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
        </a>
        <div className="ml-auto flex">
          <a href className="h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
            <svg className="h-3 text-gray-700 svg-inline--fa fa-chevron-left fa-w-8 fa-3x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" ><path fill="currentColor" d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
          </a>
          <a href className="ml-1.5 h-6 w-6 flex items-center justify-center rounded-md bg-gray-100">
            <svg className="h-3 text-gray-700 svg-inline--fa fa-chevron-right fa-w-8 fa-3x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" ><path fill="currentColor" d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
          </a>
        </div>
      </div>
      
      <div className="mt-10">
        <ul className="-m-3.5 flex">
          <li className="product m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
          <li className="product2 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
          <li className="product4 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
          <li className="product3 m-3.5 h-48 w-1/4 bg-cover rounded-xl"></li>
        </ul>
      </div>
    </section>
    
    )
}

export default FeaturedBrands;