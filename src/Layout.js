import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./Components/SideBar";

function Layout() {
  const location = useLocation();
  return (
    <>
      <div className="layout">
        {location.pathname !== "/Login" && <SideBar />}
        <div className="content">
          <Outlet /> {/* This will load the current route content */}
        </div>
      </div>
    </>
  );
}

export default Layout;
