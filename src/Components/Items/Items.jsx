import React from "react";
import "../Items/Items.css";
const Items = (props) => {
  return (
    <div className="product">
      <img src={props.image} alt="" />

      <p>{props.name}</p>
      <div >
        <div className="item-prices">
          <div className="new-prices">&#8377;{props.new_price}</div>
          <div className="old-prices">&#8377;{props.old_price}</div>
        </div>
        <a href={props.link}></a>
      </div>
    </div>
  );
};

export default Items;
