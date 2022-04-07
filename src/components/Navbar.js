import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Logo from "../Images/vector/isolated-layout.svg";

const Navbar = (props) => {
  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
    props.showAlert("Logged Out Successfully", "success");
  };

  let location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="MY"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            My Companion
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/About" ? "active" : ""
                  }`}
                  to="/About"
                >
                  About
                </Link>
              </li>
            </ul>
            {localStorage.getItem("token") ? (
              <>
                <li className="nav-item dropdown  d-flex mx-4 ">
                  <Link
                    className=" dropdown-toggle"
                    To="/"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="far fa-user-circle"></i>
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" To="#">
                        How You doin'?
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" To="#">
                        Change Password
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        To="/"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <Link
                className={`text-decoration-none mx-2 nav-link ${
                  location.pathname === "/Login " ? "active" : ""
                }`}
                to="/Login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
