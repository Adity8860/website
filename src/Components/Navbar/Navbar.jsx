import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart_icon.png";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <>
      <div className="navbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="nav-logo">
            <img src={logo} alt="logo" />
            <h4>Jupitar</h4>
          </div>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <li
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    setMenu("shop");
                  }}
                >
                  <Link style={{textDecoration: "none" , color: "black",padding:"1em 1em"}} to="/">Shop</Link>
                  {menu === "shop" ? <hr /> : <></>}
                </li>
                <li
                  className="nav-link active"
                  onClick={() => {
                    setMenu("mens");
                  }}
                >
                  <Link  style={{textDecoration: "none" , color: "black" ,padding:"1em 1em"}} to="/mens">Men</Link> {menu === "mens" ? <hr /> : <></>}
                </li>
                <li
                  className="nav-link active"
                  onClick={() => {
                    setMenu("womens");
                  }}
                >
                  <Link  style={{textDecoration: "none" , color: "black",padding:"1em 1em"}} to="/womens">Women</Link>
                  {menu === "womens" ? <hr /> : <></>}
                </li>
                <li
                  className="nav-link active"
                  onClick={() => {
                    setMenu("kids");
                  }}
                >
                  <Link  style={{textDecoration: "none" , color: "black",padding:"1em 1em"}} to="/kids">Kids</Link>
                  {menu === "kids" ? <hr /> : <></>}
                </li>
              </div>
            </div>
          </div>
          <div className="nav-card">
            <Link  to="/login"> <button type="button" className="btn btn-primary btn1">
             SignUp
            </button></Link>
           
            <Link to="/cart"><img style={{height:"2em", width:"2em", margin:"3px"}} src={cart} alt="cart" /></Link>
            <div className="nav-cart-count"> {getTotalCartItems()}</div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
