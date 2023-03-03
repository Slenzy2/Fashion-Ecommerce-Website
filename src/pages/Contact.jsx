import React from "react";
import Footer from "../component/Footer";

const Contact = () => {
  return (
    <div>
      <div className="bg-[url('./Assets/cont.png')] h-[340px]">
        <h1 className="text-white font-black text-[34px] font-display pt-[260px] pl-14">
          CONTACT US
        </h1>
      </div>
      <div className="flex  pt-[120px] px-14 items-start gap-[70px]">
        <div className="flex-[2]">
          <div>
            <h1 className="font-bold font-diaplay text-[34px] text-darktext ">
              We would love to hear from you.
            </h1>
            <p className="font-light text-grey mt-[50px]">
              If you have any query or any type of suggestion, you can contact
              us here. We would love to hear from you.
            </p>
          </div>
          <div className="mt-[60px]">
            <div className="flex gap-[20px]">
              <div className="flex flex-col text-grey">
                <label htmlFor="Email" className="text-grey font-medium">Name</label>
                <input
                  id="Email"
                  type="email"
                  className="border-divider border-[1px] w-[400px] h-[60px] text-grey outline-none px-[20px]"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Name" className="text-grey font-medium">Email</label>
                <input
                  id="Name"
                  type="email"
                  className="border-divider border-[1px] w-[400px] h-[60px] outline-none px-[20px]"
                />
              </div>
            </div>
            <div className="mt-[50px]">
              <label htmlFor="Text" className="text-grey font-medium">Text</label>
              <input
                id="Text"
                type="text"
                className="border-divider border-[1px] w-[820px] h-[200px] outline-none px-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="flex-[1]">
          <div>
            <h1 className="font-bold text-darktext text-[22px] font-display">
              Visit Us
            </h1>
            <p className="font-light mt-[20px] text-grey">
              UET Lahore, Punjab, Pakistan<br></br> Phone: +923039898987
            </p>
          </div>
          <div className="mt-[50px]">
            <h1 className="font-bold text-darktext text-[22px] font-display">
              Get In Touch
            </h1>
            <p className="font-light mt-[20px] text-grey">
              You can get in touch with us on this provided<br></br> email.
            
            </p>
            <p className="font-light mt-[20px] text-grey">  Email: hmjawad087@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
};

export default Contact;
