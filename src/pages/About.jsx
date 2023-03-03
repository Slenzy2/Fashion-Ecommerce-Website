import React from "react";
import woman from "../Assets/woman.png";
import man from "../Assets/man.png";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import founder1 from "../Assets/founder1.png";
import testimonial1 from "../Assets/testimonial1.png";
import quote from "../Assets/quote.png";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[url('./Assets/about.jpg')] h-[340px]">
        <h1 className="text-white font-black text-[34px] font-display pt-[260px] pl-14">
          ABOUT NORTHSTAR
        </h1>
      </div>
      <div className="px-14 mt-[100px]">
        <div className="flex flex-row gap-[100px] ">
          <div className=" flex-1 relative ">
            <img src={woman} />
            <button
              className=" absolute bottom-[40px] left-[210px] bg-white text-blue w-[150px] h-[50px] rounded-[20px]"
              onClick={() => {
                navigate("/");
              }}>
              BUY NOW
            </button>
          </div>
          <div className=" flex-1 relative">
            <img src={man} />
            <button
              className=" absolute bottom-[40px] left-[210px] bg-white text-blue w-[150px] h-[50px] rounded-[20px]"
              onClick={() => {
                navigate("/");
              }}>
              BUY NOW
            </button>
          </div>
        </div>
        <div className="mt-[100px]">
          <h1 className="font-Arimo font-bold text-[34px] text-center">
            The Founders
          </h1>
        </div>
        <div className="flex flex-row justify-between mt-[100px]">
          <div className="flex flex-col gap-[10px]">
            <img src={founder1} />
            <h1 className="font-bold ">HM Jawad</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src={founder1} />
            <h1 className="font-bold ">Furqan Abid</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src={founder1} />
            <h1 className="font-bold ">Abdullah Ah</h1>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img src={founder1} />
            <h1 className="font-bold ">Abrar Khan</h1>
          </div>
        </div>
        <div className="mt-[100px]">
          <h1 className="font-Arimo font-bold text-[34px] text-center">
            Testimonials
          </h1>
        </div>
        <div className="flex flex-col mt-[100px] items-center ite gap-[100px]">
          <div className="flex flex-row gap-[20px] items-start">
            <div>
              <img src={testimonial1} />
            </div>
            <div className="flex flex-col gap-[30px]">
              <img src={quote} className="w-[22px]"/>
              <p className="text-darktext  font-semibold">
                Once we ordered some accessories items and we got <br></br>the products
                delivered in our doorstep, the customer support<br></br> was super
                helpful and they answered all my queries.
              </p>
              <p className="text-dark font-semibold text-[16px]">Stacy</p>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] items-start">
            <div>
              <img src={testimonial1} />
            </div>
            <div className="flex flex-col gap-[30px]">
              <img src={quote} className="w-[22px]"/>
              <p className="text-darktext  font-semibold">
              I ordered 5 shirts from them and received them in no time.<br></br> The customer support was awesome!
               
              </p>
              <p className="text-dark font-semibold text-[16px]">Tiffany</p>
            </div>
          </div>
          <div className="flex flex-row gap-[20px] items-start">
            <div>
              <img src={testimonial1} />
            </div>
            <div className="flex flex-col gap-[30px]">
              <img src={quote} className="w-[22px]"/>
              <p className="text-darktext  font-semibold">
              I got a wrong shirt so I contacted them and they happily<br></br> offered me a refund. I will surely shop from them again.
              </p>
              <p className="text-dark font-semibold text-[16px]">James</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
