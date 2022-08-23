import {
    faBuilding,
    faCircleArrowDown,
    faDollar,
    faGripHorizontal, faTicket
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const SideBar = ({ access = 'guess' }) => {
  const [show, setShow] = useState(false);

//     const logOut = () => {
//     localStorage.removeItem(process.env.REACT_APP_ACCESS_TOKEN)
//   }

  const menuOptions = [
    {
      name: 'Dashboard',
      link: '/admin',
      icon: faGripHorizontal,
      access_given: access === 'shop' || 'admin' ? true : false,
    },
    {
      name: 'Empresa',
      link: 'empresa',
      icon: faBuilding,
      access_given: access === 'shop' ? true : false,
    },
    {
      name: 'Cupons',
      link: 'cupom',
      icon: faTicket,
      access_given: access === 'shop' ? true : false,
    },
    {
      name: 'Cupons de cliente',
      link: 'cupom-cliente',
      icon: faDollar,
      access_given: access === 'shop' ? true : false,
    },
    {
      name: 'Categorias',
      link: 'categorias',
      icon: faCircleArrowDown,
      access_given: access === 'admin' ? true : false,
    },
    {
      name: 'Banner',
      link: 'banner',
      icon: faCircleArrowDown,
      access_given: access === 'admin' ? true : false,
    },
    {
      name: 'Empresas',
      link: 'empresas',
      icon: faCircleArrowDown,
      access_given: access === 'admin' ? true : false,
    },
    {
      name: 'Cupons',
      link: 'manage-coupons',
      icon: faCircleArrowDown,
      access_given: access === 'admin' ? true : false,
    },
    {
      name: 'Cupons',
      link: 'meus-cupons',
      icon: faBuilding,
      access_given: access === 'customer' ? true : false,
    },
  ]

//   const menuFooter = [
//     {
//       name: 'Settings',
//       link: '/settings',
//       access_given: true,
//     },
//     {
//       name: 'Sair',
//       link: '',
//       icon: <FontAwesomeIcon icon={faSignOutAlt} onClick={() => logOut()} />,
//       access_given: true,
//     },
//   ]

  return (
    <>
                    {/* Sidebar starts */}
                    <div className="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
                        <div className="h-16 w-full flex items-center px-8">
                            <Logo />
                        </div>
                        <ul ariaOrientation="vertical" className=" py-6">
                        {menuOptions.map((option, index) => {
                            return (
                                option.access_given && (
                                    <Link to={option.link} key={index}>
                                      <li
                                        className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none"
                                        key={index}
                                      >
                                        <div className="flex items-center">
                                          {option.icon && <FontAwesomeIcon icon={option.icon} />}
                                          <span className="ml-2 xl:text-base md:text-2xl text-base">{option.name}</span>
                                        </div>
                                      </li>
                                    </Link>
                                  )
                            )
                        })}
                        </ul>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="flex items-center justify-between px-8">
                                        <div className="h-16 w-full flex items-center">
                                            <Logo />
                                        </div>
                                        <div id="closeSideBar" className="flex items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    </div>
                                    <ul ariaOrientation="vertical" className=" py-6">
                                        {menuOptions.map((option, index) => {
                                            return (
                                                option.access_given && (
                                                    <Link to={option.link} key={index}>
                                                        <li
                                                        className="pl-6 cursor-pointer text-white text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none"
                                                        key={index}
                                                        >
                                                        <div className="flex items-center">
                                                            {option.icon && <FontAwesomeIcon icon={option.icon} />}
                                                            <span className="ml-2 xl:text-base md:text-2xl text-base">{option.name}</span>
                                                        </div>
                                                        </li>
                                                    </Link>
                                                    )
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-600 ml-3 mt-3 visible lg:hidden absolute" onClick={() => setShow(!show)}>
                        {show ? (
                            " "
                        ) : (
                            <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={4} y1={8} x2={20} y2={8} />
                                <line x1={4} y1={16} x2={20} y2={16} />
                            </svg>
                        )}
                    </div>
    </>
  )
}

export default SideBar
