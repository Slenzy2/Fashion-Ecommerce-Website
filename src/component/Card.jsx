import React from "react";
// import pic1 from "../Assets/pic1.png";
import { Store } from "../component/product";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { useNavigate} from "react-router-dom";
import { useState } from 'react';
import ProductDetails from "../pages/ProductDetails";
import { Link } from "react-router-dom";


const Card = ({ item ,itemIndex}) => {
  const dispatch = useDispatch();

  function Send(e) {
    e.preventDefault();
    dispatch(add(item));
  console.log(item);
  }
 
 

  return (
    <div>
      <Link to={`description/${itemIndex}`}>
      <div className="flex items-center flex-col" >
        <img src={item.imgSrc} alt="" />
        <p className="font-display font-bold text-[16px]">{item.Description}</p>
        <p className="font-display font-bold text-[16px] text-blue">
          ${item.Price}.00
        </p>
      </div>
      </Link>
    
    </div>
  );
};

export default Card;

// return (
//   <div >

//         <div className="flex items-center flex-col" onClick={handleClick}>
//           <img src={item.imgSrc} alt="" />
//           <p className="font-display font-bold text-[16px]">
//             {item.Description}
//           </p>
//           <p className="font-display font-bold text-[16px] text-blue">
//             ${item.Price}.00
//           </p>
//         </div>

//   </div>
