import React, { createContext, useEffect, useReducer } from "react";
import "./Cart.css";
import ContextCart from "./ContextCart";
import Products from "./Products";
import { reducer } from "./reducer";

export const Context = createContext();
const initialsValue = {
  item: Products,
  totalItem: 0,
  totalAmount: 0,
};

const Cart = () => {

  const [state, dispatch] = useReducer(reducer, initialsValue);   

  const removeItem = (id) => {
    return dispatch({
      type: "Remove_Item",
      payload: id,
    });
  };
  const increment = (id) => {
    return dispatch({
      type: "increment_item",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "decrement_item",
      payload: id,
    });
  };

  const deleteItem = (id) => {
    return dispatch({
      type: "Delete_Item",
      payload: id,
    });
  };
  
  useEffect(() => {
    dispatch({ type : "GET_TOTAL"})
  },[state.item]);

  return (
    <Context.Provider
      value={{ ...state, removeItem, deleteItem, increment, decrement}}
    >
      <ContextCart />
    </Context.Provider>
  );
};

export default Cart;
