import axios from "axios";
import { useState } from "react";

import {storage, db} from "../firebase/config"
export const NewProduct = () => {
  const [Delivery, setDelivery] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [image, setImage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState("");

  const upload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "upload");
    // try {
    //   const res = await axios.post(
    //     "https://api.cloudinary.com/v1_1/dsnscuero/image/upload",
    //     data
    //   );
    //   if (res.data) {
    //     alert("added");
    //     window.location.reload();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dsnscuero/image/upload",
      data
    );

    console.log(res);
    setImageSrc(res.data.url);
    await axios.post("http://localhost:5000/api/products/addItem", {
      desc: description,
      price,
      discount,
      freeDelivery: [Delivery + "", deliveryPrice],
      imgSrc: imageSrc,
    });
    if (res.data) {
      alert("added");
      window.location.reload();
    } else {
      alert("not added");
    }
  };
  return (
    <div>
      <form onSubmit={upload}>
        <div>
          <input
            type="checkbox"
            onChange={() => {
              setDelivery(!Delivery);
            }}
          />
          <label>Delivery</label>

          {Delivery && (
            <input
              type="text"
              placeholder="delivery price"
              onChange={(e) => {
                setDeliveryPrice(e.target.value);
              }}
            />
          )}
        </div>
        <div>
          <input
            type=" text"
            placeholder=" description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type=" text"
            placeholder="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type=" text"
            placeholder=" discount"
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
      <img src={image && URL.createObjectURL(image)} alt="" width="100" />
    </div>
  );
};

export default NewProduct;
