import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDIsplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          {/* <img src={product.image} alt="" />
          <img src={product.image} alt="" /> */}
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            &#8377;{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            &#8377;{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Our unisex t-shirt is a wardrobe essential. Lightweight, soft, and
          stretchy, it’s perfect for all-day comfort. Whether you’re lounging at
          home or out with friends, this tee has you covered. Features:
          breathable fabric, flattering fit, and easy care. Available in
          multiple colors
        </div>
        <div className="productdispaly-right-size">
          <h1>Select Size</h1>
          <div className="productdispaly-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>
        <p className="productdispaly-right-category">
          <span>Category:</span> Women, T-shirt, Crop top
        </p>
        <p className="productdispaly-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDIsplay;
