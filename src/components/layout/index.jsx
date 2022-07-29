import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import Footer from '../Footer'

function Layout() {
  return (
    <>
      <header className="top-0 z-50">
        {/* <div className="container mx-auto px-4 py-8 flex items-center justify-between"> */}

        <NavBar />

        {/* </div> */}
      </header>
      <div className="mt-10 md:mt-1">
        {/* <NavigationCategory /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default Layout
