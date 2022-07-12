import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../Footer";

function Layout() {
  return (
    <>
      <header className="top-0 z-50 bg-white shadow-sm">
        {/* <div className="container mx-auto px-4 py-8 flex items-center justify-between"> */}

          <NavBar />

        {/* </div> */}
      </header>
      {/* <NavigationCategory /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
