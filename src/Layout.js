import { Outlet } from "react-router-dom";
import SideBar from "./Components/SideBar";

function Layout() {
  return (
    <>
      <div className="layout">
          <SideBar />

        <div className="content">
          <Outlet /> {/* This will load the current route content */}
        </div>
      </div>
    </>
  );
}

export default Layout;
