import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="pt-5 px-4 justify-center md:pt-6 md:px-10 lg:px-20 xl:mx-auto max-w-[1900px]">
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