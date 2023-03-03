import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../component/Footer";
const Checkout = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const Cart = useSelector((state) => state.cart);
  return (
    <div className="px-14">
      <div>
        <h1 className="text-grey mt-[50px] className='cursor-pointer'">
          <span
            onClick={() => {
              navigate("/");
            }}>
            HOME/
          </span>{" "}
          <span className="text-dark">SHOPPING CART</span>
        </h1>
      </div>
      <div className="mt-[40px] ">
        <h1 className="font-bold text-[38px] font-Arimo ">Billing details</h1>
      </div>
      <div className="flex flex-col gap-[20px] mt-[50px] ">
        <div className="flex flex-col">
          <label htmlFor="FullName" className="text-darktext  text-[12px]">
            FullName<sup className="text-star">*</sup>
          </label>
          <input
            id="FullName"
            type="text"
            className="w-[600px] border-divider border-[2px] h-[30px] outline-none px-[20px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="StreetAddress" className="text-darktext text-[12px]">
            Street Address<sup className="text-star">*</sup>
          </label>
          <input
            id="StreetAddress"
            type="text"
            className="w-[600px] border-divider border-[2px] h-[30px] outline-none px-[20px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="T/C" className="text-darktext  text-[12px]">
            Town / City<sup className="text-star">*</sup>
          </label>
          <input
            id="T/C"
            type="text"
            className="w-[600px] border-divider border-[2px] h-[30px] outline-none px-[20px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Phone" className="text-darktext  text-[12px]">
            Phone<sup className="text-star">*</sup>
          </label>
          <input
            id="Phone"
            type="text"
            className="w-[600px] border-divider border-[2px] h-[30px] outline-none px-[20px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="Email" className="text-darktext  text-[12px]">
            Email address<sup className="text-star">*</sup>
          </label>
          <input
            id="Email"
            type="email"
            className="w-[600px] border-divider border-[2px] h-[30px] outline-none px-[20px]"
          />
        </div>
      </div>
      <div className="mt-[40px] ">
        <h1 className="font-bold text-[34px] font-Arimo ">Your Order</h1>
      </div>
      <div className="mt-[40px] ">
        <div className="flex flex-row py-[5px] justify-between border-divider border-[1px] px-[250px] h-[30px]">
          <p className="font-bold font-Arimo">Product</p>
          <p className="font-bold font-Arimo">Total</p>
        </div>
        {cart.length > 0
          ? cart.map((item) => {
              return (
                <div className="flex flex-row justify-between border-divider border-[1px] py-[5px] px-[250px] h-[30px]">
                  <p className="font-medium text-[14px] text-darktext font-Arimo">
                    {item.Description}
                  </p>
                  <p className="font-medium text-[14px]  text-darktext font-Arimo">
                    ${item.Price * item.quantity}
                  </p>
                </div>
              );
            })
          : ""}
         <div className="flex flex-row justify-between border-divider border-[1px] py-[5px] px-[250px] h-[30px]">
                  <p className="font-bold text-[16px] text-darktext font-Arimo">
                    Subtotal
                  </p>
                  <p className="font-bold text-[16px]  text-dark font-Arimo">
                  ${Cart.cartTotalAmount}
                  </p>
                </div>
      </div>
      <div className="flex flex-row mt-[40px] justify-between border-divider border-[1px] px-[20px] py-[10px] h-[140px]">
        <div className="bg-back pl-[10px] pt-[10px] w-[800px] text-[12px] text-darktext h-[45px]">
          <p>Cash on delivery.  Please contact us if you require assistance or wish to make alternate arrangements.</p>
        </div>
        <button className="bg-secondary h-[60px] w-[150px] mt-[40px] mr-[40px] text-white">PLACE ORDER</button>
      </div>
      <Footer/>
    </div>
  );
};

export default Checkout;
