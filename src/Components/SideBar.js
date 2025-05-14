import { NavLink, Link, useNavigate } from "react-router-dom";
import adminLogo from "../assets/admin-logo.jpg";

function SideBar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <div className="sidebar">
        <ul className="menu">
          <li>
            <NavLink to="/Dashboard">
              <i className="fa fa-users icon"></i> User List
            </NavLink>
          </li>
          <li>
            <NavLink to="/AddEvent">
              <i className="fa fa-calendar icon"></i> Post Event
            </NavLink>
          </li>
          <li>
            <NavLink to="/AddCategory">
              <i className="fa fa-layer-group icon"></i> Post Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/AddGallary">
              <i className="fa fa-image icon"></i> Add Gallary
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactList">
              <i className="fa fa-address-book icon"></i> Contact List
            </NavLink>
          </li>
        </ul>

        <hr />

        <div className="auth-section">Authentication</div>

        <ul className="menu">
          <li>
            <button onClick={handleLogout} className="logout-button">
              <i className="fa fa-sign-out-alt icon"></i> Log Out
            </button>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <header className="header-admin">
          <div className="header-title">
            <h5>Admin</h5>
          </div>
          <div className="admin-profile">
            <Link to="/UserProfile" className="account">
              <img src={adminLogo} alt="user_logo" className="admin-avtar" />
              <span className="username">
                Event Management <br /> Admin
              </span>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default SideBar;
