import { useState } from "react";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  console.log(cartItems)
  return (
    <nav className="bg-red-500 py-5">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className="text-white font-bold text-lg ">
          <h1 className="text-2xl text-white hover:text-black transition-colors duration-300">
            {" "}
            ShoppyGlobe
          </h1>
        </div>

        <div className="flex-1  items-center justify-center space-x-8 text-white hidden md:flex">
          <Link to="/" className="hover:text-black font-bold">
            Home
          </Link>
          <Link to="/allproducts" className="hover:text-black font-bold">
            All Products
          </Link>
          <Link to="/aboutus" className="hover:text-black font-bold">
            About Us
          </Link>
        </div>

        <div className="relative text-white text-2xl">
          
          <Link to='/cart'><FontAwesomeIcon
            icon={faCartShopping}
            style={{ fontSize: "2rem" }}
            className="text-white hover:text-black transition-colors duration-300"
          /></Link>
          <div className="absolute top-0 left-7 bg-white text-black rounded-full text-xs w-5 h-5 flex items-center justify-center">
            {totalItems}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-red-500 text-center py-4`}
      >
        <Link to="/" className="block text-white py-2">
          Home
        </Link>
        <Link to="allproducts" className="block text-white py-2">
          All Products
        </Link>
        <Link to="about" className="block text-white py-2">
          About Us
        </Link>
      </div>
    </nav>
  );
}

export default Header;
