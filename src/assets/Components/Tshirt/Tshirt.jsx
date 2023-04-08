import React from "react";
import "./Tshirt.css";
const Tshirt = ({ tshirt,addToCart }) => {
  const { name, picture, price } = tshirt;
  console.log(name, picture, price);
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <h3>{price}</h3>
      <button onClick={addToCart} className="buy-btn">Buy Now</button>
    </div>
  );
};

export default Tshirt;
