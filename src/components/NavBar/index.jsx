import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

const menuOptions = [
  {
    name: 'Inicio',
    link: '/',
  },
  {
    name: 'Lojas',
    link: '/lojas',
  },
  {
    name: 'Categorias',
    link: '/categorias',
  },
  {
    name: 'Cupons',
    link: '/cupons',
  },
]

const NavBar = () => {
  const [show, setShow] = useState(null)
  const [profile, setProfile] = useState(false)
  const { data, isLoading } = useQuery(['user'], async () =>
    axios
      .get(`${process.env.REACT_APP_API}/v1/user/get-user`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem(
            process.env.REACT_APP_ACCESS_TOKEN,
          )}`,
        },
      })
      .then((res) => {
        return res.data.data
      }),
  )

  var isLogged = localStorage.getItem(process.env.REACT_APP_ACCESS_TOKEN)
  const userInfo = {
    name: data?.username,
    profilePic: `https://ui-avatars.com/api/?name=${data?.username}`,
  }
  show
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto')

  const logOut = () => {
    localStorage.removeItem(process.env.REACT_APP_ACCESS_TOKEN)
    setProfile(false)
    setShow(false)
  }

  return (
    <div className="bg-primary h-full w-full">
      <nav className="bg-primary shadow xl:block hidden">
        <div className="mx-auto container px-6 py-2 xl:py-0">
          <div className="flex items-center justify-between">
            <div className="inset-y-0 left-0 flex items-center xl:hidden">
              <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-100 focus:outline-none transition duration-150 ease-in-out">
                {/* 
                hidden on XL
                 */}
                {/* 
                CLOSE MENU
                 */}
                <div
                  className="hidden close-m-menu text-gray-700"
                  // onClick="MenuHandler(this,false)"
                >
                  <svg
                    aria-label="Close"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>

            {/* 
            Menu larger than XL
            */}
            <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
              <div className="flex items-center">
                <Logo />
              </div>
            </div>
            {/* 
            menu
            */}
            <div className="flex">
              <div className="hidden xl:flex md:mr-6 xl:mr-16">
                {menuOptions !== null &&
                  menuOptions.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
              {/* 
              Profile
               */}
              {isLogged && (
                <div className="hidden xl:flex items-center">
                  <div className="relative">
                    <div
                      className="flex items-center relative"
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded right-0 shadow top-0 mt-16 z-10">
                          <li className="my-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <Link to="/admin">
                              <div className="flex items-center">
                                <span className="ml-2">Painel</span>
                              </div>
                            </Link>
                          </li>
                          <li className="my-2 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                            <div className="flex items-center">
                              <span className="ml-2" onClick={logOut}>
                                Sair
                              </span>
                            </div>
                          </li>
                        </ul>
                      )}
                      <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src={userInfo.profilePic}
                          alt="logo"
                        />
                      </div>
                      <div className="ml-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* end navbar */}
      {/* manu navbar mobile */}
      <nav>
        <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-primary fixed top-0 z-40">
          {/* 
          logo menu
           */}
          <div className="w-24">
            <Logo />
          </div>
          {/* 
          Sandwich bar
          */}
          <div className="flex items-center">
            <div
              id="menu"
              className="text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? (
                ''
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-menu-2"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1={4} y1={6} x2={20} y2={6} />
                  <line x1={4} y1={12} x2={20} y2={12} />
                  <line x1={4} y1={18} x2={20} y2={18} />
                </svg>
              )}
            </div>
          </div>
        </div>
        {/* 
        NAVIGATION menu mobile
        */}
        <div
          className={
            show
              ? 'w-full xl:hidden h-full fixed z-40  transform  translate-x-0 top-0 overflow-hidden'
              : 'w-full xl:hidden h-full absolute z-40  transform -translate-x-full'
          }
        >
          <div
            className="bg-gray-800 opacity-50 w-full h-full"
            onClick={() => setShow(!show)}
          />
          <div className="w-64 z-40 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
            <div className="px-6 h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <Logo />
                      </div>
                      <div
                        id="cross"
                        className="text-gray-800"
                        onClick={() => setShow(!show)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <ul className="f-m-m">
                    {menuOptions !== null &&
                      menuOptions.map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className="cursor-pointer"
                        >
                          <li className="text-gray-800 pt-10">
                            <div className="flex items-center">
                              <p className="text-indigo-700 xl:text-base text-base ml-3">
                                {item.name}
                              </p>
                            </div>
                          </li>
                        </Link>
                      ))}
                    <hr className="mt-5" />
                    {isLogged && (
                      <Link to="/admin" className="cursor-pointer">
                        <li className="text-gray-800 pt-5">
                          <div className="flex items-center">
                            <p className="text-indigo-700 xl:text-base text-base ml-3">
                              Painel
                            </p>
                          </div>
                        </li>
                      </Link>
                    )}
                  </ul>
                </div>
                {/* 
                profile
                */}
                {isLogged && (
                  <div className="w-full pt-4">
                    <div className="border-t border-gray-300">
                      <div className="w-full flex items-center justify-between pt-1">
                        <div className="flex items-center">
                          <img
                            alt="profile-pic"
                            src={userInfo.profilePic}
                            className="w-8 h-8 rounded-md"
                          />
                          <p className=" text-gray-800 text-base leading-4 ml-2">
                            {userInfo.name}
                          </p>
                        </div>
                        <ul className="flex">
                          <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                            <div
                              className="w-6 h-6 md:w-8 md:h-8"
                              onClick={logOut}
                            >
                              sair
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
