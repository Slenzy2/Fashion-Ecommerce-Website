import React from "react";
import close from "../Assets/close.png";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  remove,
  increaseQuantity,
  decreaseQuantity,
  Subtotal,
  total,
} from "../redux/cartSlice";
import {  useNavigate } from "react-router-dom";

// const list= [{Product},{Price},{Quantity},{Total}]

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const Cart = useSelector((state) => state.cart);

  const handleRemove = (i) => {
    dispatch(remove(i));
  };

  const increment = (item) => {
    dispatch(increaseQuantity(item));
  };
  const decrement = (item) => {
    dispatch(decreaseQuantity(item));
  };

  console.log(Cart.cartTotalAmount);

  useEffect(() => {
    dispatch(Subtotal());
  }, [Cart, dispatch]);

  return (
    <div>
      <div className="px-14 ">
        <div>
          <h1 className="text-grey mt-[50px]">
          <span className="cursor-pointer"
            onClick={() => {
              navigate("/");
            }}>
            HOME/
          </span><span className="text-dark cursor-pointer">SHOPPING CART</span>
          </h1>
        </div>
        <div>
          <div>
            <div className="grid grid-cols-4   border-b-[1px] gap-[150px] border-divider pl-[180px] h-[50px] mt-[100px]">
              <h1 className="font-bold text-[18px] pt-[15px]">Product</h1>
              <h1 className="font-bold text-[18px] pt-[15px]">Price</h1>
              <h1 className="font-bold text-[18px] pt-[15px]">Quantity</h1>
              <h1 className="font-bold text-[18px] pt-[15px]">Total</h1>
            </div>
            {cart.length > 0
              ? cart.map((item) => {
                  return (
                    <div className="grid grid-cols-4 border-b-[1px] gap-[150px]  border-divider pl-[180px] h-[60px] mt-[40px] font-display relative">
                      <img
                        src={close}
                        className="absolute left-0 mt-[20px]"
                        onClick={() => {
                          handleRemove(item);
                        }}
                      />
                      <h1 className="font-bold text-[16px]  text-grey pt-[15px]">
                        {item.Description}
                      </h1>
                      <h1 className="font-medium text-[18px] text-grey pt-[15px]">
                        ${item.Price}
                      </h1>
                      <div className="flex items-center gap-[5px]">
                        <button
                          onClick={() => {
                            decrement(item.id);
                          }}>
                          -
                        </button>
                        <p className="font-bold text-[18px]  w-[50px] h-[40px] py-[5px] px-[18px] mt-[7px]  text-grey border-[2px] outline-none border-divider">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() => {
                            increment(item.id);
                          }}>
                          +
                        </button>
                      </div>
                      <h1 className="font-medium text-[18px] text-grey pt-[15px]">
                        ${item.Price * item.quantity}
                      </h1>
                    </div>
                  );
                })
              : ""}
          </div>

          <div className="mt-[100px]">
            <div>
              <h1 className="font-display text-[34px] font-black">Cart Totals</h1>
            </div>
            <div className="flex justify-between font-display w-[440px] mt-[20px] border-b-[2px] border-grey h-[40px]">
              <h1 className=" text-[18px] font-medium text-grey ">Subtotal</h1>
              <p className="font-medium text-[18px]">${Cart.cartTotalAmount}</p>
            </div>
            <div className="flex justify-between font-display w-[440px] mt-[20px] border-b-[2px] border-grey h-[40px]">
              <h1 className=" text-[18px] font-medium text-grey ">
                Shipping Fee
              </h1>
              <p className="font-medium text-grey text-[18px]">FREE!!!</p>
            </div>
            <div className="flex justify-between font-display w-[440px] mt-[20px]  h-[40px]">
              <h1 className="text-grey text-[18px] font-semibold ">Total</h1>
              <p className="font-medium  text-[18px]">
                ${Cart.cartTotalAmount}
              </p>
            </div>
            <div>
              <button className="  w-[280px] bg-secondary text-white h-[50px]" onClick={()=>{navigate("/checkout")}}>
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
