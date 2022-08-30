import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";

function Navigation() {
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
          <Link className="nav-link" to={"auth"}>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
