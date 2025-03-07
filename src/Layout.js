import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./Components/SideBar";

function Layout() {

  const location = useLocation();
  return (
    <>
      <div
        id="main-container"
        style={{ overflowY: "auto", height: "100vh", overflowX: "hidden" }}
      >

        {location.pathname !== "/" && <SideBar />}
        <Outlet /> {/* This will load the current route content */}
      </div>
    </>
  );
}

export default Layout;
