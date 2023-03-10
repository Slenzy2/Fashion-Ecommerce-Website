import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Store } from "../component/product.js";
import down from "../Assets/down.png";
import email from "../Assets/email.png"
import up from "../Assets/up.png"

import { useState } from "react";
import Footer from "../component/Footer";



function ProductDetails() {

 
  const { id } = useParams();


  const dispatch = useDispatch();

  function Send(e) {
    e.preventDefault();
    dispatch(add(Store[id]));
 
  }
 
  console.log(Store[id].imgSrc);
  const [show, setshow] = useState(false)
  const rating =[{
    imgSrc :"/ratings.png"
  },
  {
    imgSrc :"/ratings.png"
  },
  {
    imgSrc :"/ratings.png"
  },
  {
    imgSrc :"/ratings.png"
  },
  {
    imgSrc :"/ratings.png"
  },
]
  return (
    <div className="px-14">
      <div className="flex mt-[100px]">
        <div className="flex-1">
         <img src={Store[id].imgSrc} alt="" className="w-[500px] h-[650px]" />
         
        </div>
        <div className=" flex flex-1 gap-[20px] flex-col" >
          <div>
            <h1 className=" font-bold tracking-wide">
              <span className="text-grey ">HOME  /SHOP  /  WOMEN  /  </span>
              <span>SHOP</span>
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-[28px] ">{Store[id].Description}</h1>
          </div>
          <div className="flex items-start gap-[10px]">
            <div className="flex items-start" >
            {
              rating.map((item)=>{return(
                <img src={item.imgSrc} />
                ) })
            }
          </div>
            <span>
              <p className="text-[12px]">(15)</p>
            </span>
          </div>
          <div className="flex gap-[10px]">
           
              <h1 className="text-grey text-[20px] line-through">$69.00</h1>
              <h1 className="text-[20px]">${Store[id].Price}.00</h1>
          
          </div>
          <div><p className="text-grey font-display">{Store[id].Detail}</p></div>
          <div>
            <div>
              <button className="flex items-center justify-between border-divider border w-[200px] h-[50px] px-[10px]">
                Select Size
                <img src={show ? down : up} 
                onClick={()=>{
                 if (!show) {
                  setshow(true)
                 } else {
                  setshow(false)
                 }
                }}
                />
              </button>
            </div>
            <div style={{display:show ? "none":"block"}}>
            <div>
            <button className="flex items-center justify-between border-divider border w-[200px] h-[50px] px-[10px]">
                Small
               <p>S</p>
               
               
              </button>
            </div>

            <div>
            <button className="flex items-center justify-between border-divider border w-[200px] h-[50px] px-[10px]">
                Medium
               <p>M</p>
               
               
              </button>
            </div>

            <div>
            <button className="flex items-center justify-between border-divider border w-[200px] h-[50px] px-[10px]">
                Large
               <p>L</p>
               
               
              </button>
            </div>
            <div>
            <button className="flex items-center justify-between border-divider border w-[200px] h-[50px] px-[10px]">
                Extra Large
               <p>XL</p>
               
               
              </button>
            </div>
            </div> 
          </div>
          <div>
            <button className="bg-blue w-[150px] h-[50px] text-white" onClick={Send}>ADD TO CART</button>
          </div>
          <div>
          <p className="text-[14px]">Category  <span className="text-grey"> :Women,  Polo,  Casual</span></p>
          <p className="text-[14px]">Tags  <span className="text-grey"> :Modern,  Design,  Cotton</span></p>
          </div>
          <div className="flex gap-[30px] mt-[20px]">
            <img src={email}/>
            <img src={email}/>
            <img src={email}/>
            <img src={email}/>
          </div>
        </div>
      </div>
      <div className="flex">
        <div><h1>Description</h1></div>
        <div><h1>Review(0)</h1></div>
        </div>
      <Footer/>
    </div>
  );
}

export default ProductDetails;
