import { React, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.style.scss";

function Navigation() {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <Link className="logo" to={"/"}>
            <CrownLogo />
          </Link>
        </div>
        <div className="nav-link-container">
          <Link className="nav-link" to={"shop"}>
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              Sign Out{" "}
            </span>
          ) : (
            <Link className="nav-link" to={"auth"}>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
