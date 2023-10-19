import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="mt-5 mx-4 justify-center md:mt-8 md:mx-10 lg:mx-20 xl:mx-auto max-w-[1200px]">
      {/* Nav content */}
      <Navbar />
      {/* Page content */}
      <div className="flex justify-center mt-10">
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  )
};

export default Layout;