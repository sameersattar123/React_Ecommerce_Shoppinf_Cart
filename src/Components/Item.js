import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Context } from "./Cart";


const Item = ({id , img , title , description , price , quantity}) => {
    const {removeItem , increment , decrement} = useContext(Context)

    return (
    <div>
      <div className="items-info">
        <div className="product-img">
          <img
            src={img}
            alt={title}
          />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <AiOutlineMinus className="fa-minus minus" onClick={() => decrement(id)} />
          <input type="text" placeholder={quantity} />
          <AiOutlinePlus className="fa-plus add" onClick={() => increment(id)} />
        </div>
        <div className="price">
          <h3>{price}</h3>
        </div>

        <div className="remove-item">
          <BsFillTrashFill className="remove" onClick={()=> removeItem(id)} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Item;
