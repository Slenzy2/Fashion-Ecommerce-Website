import React from "react";
import account from "../Assets/account.png";
import Cart from "../Assets/cart.png";
import hamburger from "../Assets/hamburger.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((item) => {
    return item.cart.value;
  });
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between pt-10 pr-14 pl-14 h-32">
      <div>
        <h1 className="font-display text-5xl">NorthStar</h1>
      </div>
      <div className="flex gap-7 font-Arimo font-bold text-[14px] mr-80 pt-[20px]">
        <p
          onClick={() => {
            navigate("/");
          }}>
          HOME
        </p>
        <p
          onClick={() => {
            navigate("/about");
          }}>
          ABOUT
        </p>
        <p
          onClick={() => {
            navigate("/contact");
          }}>
          CONTACT US
        </p>
      </div>
      <div className="flex items-center gap-5">
        <img src={account} alt="nav-icons" />
        <div className="relative "  onClick={()=>{
            navigate("/cart")
          }}>
          <img src={Cart} alt="nav-icons" />
          <div className="absolute bottom-3 left-3 bg-blue rounded-full w-4 h-4" ><p className="ml-1 text-xs  text-white">{cart.length}</p></div>
        </div>

        <img src={hamburger} alt="nav-icons" />
      </div>
    </div>
  );
};

export default Header;
