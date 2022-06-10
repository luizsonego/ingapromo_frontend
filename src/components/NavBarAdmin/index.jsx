import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
const NavBarAdmin = (props) => {
  return (
    <>
      <Helmet>
        <title>{ props.title }</title>
      </Helmet>
    <div>
      <div className="mb-6 lg:my-12 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">{props.title} <small>{props.subtitle || ''}</small> </h4>
        </div>
        <div className="mt-6 md:mt-0">
          <Link to={-1} className="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 py-2 text-sm">Voltar</Link>
          {
            props.link && props.linkText && (
              <Link to={props.link} className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">{props.linkText}</Link>
            )
          }
        </div>
      </div>
    </div>
    </>
  )
}
export default NavBarAdmin;