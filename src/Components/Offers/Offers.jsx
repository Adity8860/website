import React from 'react'
import "../Offers/Offers.css"
import exclusive_img from "../Assets/exclusive_image.png" 

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>Only on Best seller product</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img style={{height: "height: 56vh",marginLeft:"18em"}} src={exclusive_img} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
