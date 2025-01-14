import React, { useContext } from 'react'
import "../Pages/CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Items from "../Components/Items/Items.jsx"

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>
            Showing 1-12
          </span>
           out of 36 products
        
        </p>
        <div className="shopcategory-sort ">
          Sort by <img className='invert' src= {dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i)=>{
          if(props.category ===item.category){
            return <Items key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>
          }
          else{
            return null;
          }

        })}
      </div>
      <div className="shopcategory-loadmore">
       <button> Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory
