import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Nav content */}
      <div className="flex m-5 justify-between">
        <div>
          <Link to="/">logo</Link>
        </div>
        <div>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <Link to="/about">About us</Link>
        </div>
        <div>
          <Link to="/process">Our process</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <Link to="/contact">Contact us</Link>
        </div>
      </div>
      {/* Page content */}
      <div className="flex justify-center mt-10">
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;