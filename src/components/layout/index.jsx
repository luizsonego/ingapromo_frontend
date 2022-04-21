import { Link, Outlet } from 'react-router-dom';
import NavigationCategory from '../Category/Navigation';
import Footer from '../Footer';

function Layout() {
  return (
    <>
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      	<div className="container mx-auto px-4 py-8 flex items-center">
      		{/* <Logo /> */}
      		<div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden lg:flex items-center">
            <input className="w-full border-0 border-l border-gray-10 bg-transparent font-semibold text-sm pl-4" type="text" placeholder="Estou buscando por..." />
            <svg className="ml-auto h-5 px-4 text-gray-500 svg-inline--fa fa-search fa-w-16 fa-9x" ariaHidden="true" focusable="false" dataPrefix="far" dataIcon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
          </div>
      
      <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
        <span className="font-bold md:text-xl">xx - xxxx-xxx</span>
        <span className="font-semibold text-sm text-gray-400">Suporte 24/7</span>
      </div>
      
      <nav className="contents">
        <ul className="ml-4 xl:w-48 flex items-center justify-end">
          <li className="ml-2 lg:ml-4 relative inline-block">
            <Link className="" to="">
              <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">3</div>
              <svg className="h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-heart fa-w-16 fa-9x" ariaHidden="true" focusable="false" dataPrefix="far" dataIcon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
            </Link>
          </li>
          
          <li className="ml-2 lg:ml-4 relative inline-block">
            <Link className="" to="">
              <svg className="h-9 lg:h-10 p-2 text-gray-500 svg-inline--fa fa-user fa-w-14 fa-9x" ariaHidden="true" focusable="false" dataPrefix="far" dataIcon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
            </Link>
          </li>
          
        </ul>
      </nav>
      
      {/* <div className="ml-4 hidden sm:flex flex-col font-bold">
        <span className="text-xs text-gray-400">Your Cart</span>
        <span>$2,650,59</span>
      </div> */}
      </div>
      <NavigationCategory />
      </header>
      <Outlet />
      <Footer />
    </>
  )
  }

  export default Layout;