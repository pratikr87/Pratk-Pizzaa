import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; 
import Badge from "@mui/material/Badge"; 
import Logo from "../assets/pizzaLogo.png";
import "../styles/Navbar.css";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const { cartItems } = useCart();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className={`leftSide ${openLinks ? "open" : "close"}`}>
        <img src={Logo} alt="Pizza Logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cartLink">
          <Badge
            badgeContent={cartItems.length}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "#000000",
                color: "white",
              },
            }}
          >
            <ShoppingCartIcon style={{ color: "white" }} />
          </Badge>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
