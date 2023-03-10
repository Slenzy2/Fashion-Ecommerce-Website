import React from "react";
import Card from "./Card";
import { Store } from "../component/product";

const Cards = () => {
  return (
    <div className=" mt-20 pl-14 pr-14 grid grid-cols-4 gap-10">
      {Store.map((item,index) => {
        return <Card item={item} itemIndex={index} key={item.id} />;
      })}
    </div>
  );
};

export default Cards;
