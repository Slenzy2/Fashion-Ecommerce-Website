import React from "react";
// import pic1 from "../Assets/pic1.png";
import { Store } from "./product";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";


const Card = ({item}) => {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(add(item));
    // console.log(item);
  }
  return (
    <div >
     
          <div className="flex items-center flex-col" onClick={handleClick}>
            <img src={item.imgSrc} alt="" />
            <p className="font-display font-bold text-[16px]">
              {item.Description}
            </p>
            <p className="font-display font-bold text-[16px] text-blue">
              ${item.Price}.00
            </p>
          </div>
       
    </div>
  );
};

export default Card;
