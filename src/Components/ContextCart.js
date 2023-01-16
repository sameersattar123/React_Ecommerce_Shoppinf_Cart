import React, { useContext } from 'react'
import {Scrollbars} from "react-custom-scrollbars"
import { Context } from './Cart'
import   Item  from './Item'
import arrow from "./Images/arrow (1).png"
import cart from "./Images/cart (1).png"
const ContextCart = () => {
    const {item , deleteItem , totalItem, totalAmount} = useContext(Context)

  return (
    <div>
       <header>
      <div className="continue-shopping">
        <img src={arrow} alt="arrow" className='arrow-icon' />
        <h3>Continue-Shopping</h3>
      </div>
      <div className="cart-icon">
        <img src={cart} alt="cart" />
        <p>7</p>
      </div>
    </header>
    <section className='main-cart-section'>
         <h1>Shopping Cart</h1>
         <p className='total-items'>you have <span className='total-items-count'>{totalItem}</span> items in cart </p>
            <div className="cart-items">
                <div className="cart-items-container">
                <Scrollbars>
                {
                  item.map((curElem)=>{
                    return <Item key={curElem.id} {...curElem} />
                  })
                }
                </Scrollbars>
                </div>
            </div>
            <div className="card-total">
              <h3>
              Cart Total :<span>{totalAmount}rs</span>
              </h3>
              <button>checkout</button>
              <button className='clear-cart' onClick={()=> deleteItem()}>Clear Cart</button>
            </div>
    </section>
    </div>
  )
}

export default ContextCart;
