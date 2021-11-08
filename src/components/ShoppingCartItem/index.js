import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREASE_FROM_CART,
} from "../../actions/types";

import "./index.css";

const ShoppingCartItem = ({ item }) => {
  const dispatch = useDispatch();
  const amount = useSelector((state) =>
    state.cartReducer.items.filter(
      (cartItem) => cartItem.product.id === item.product.id
    )
  );
  return (
    <div className="shoppingCartItemContainer">
      <div className="itemCoverContainer">
        <img
          src={`${item.product.thumbnail.path}.${item.product.thumbnail.extension}`}
          alt="Cover"
          className="productCover"
        />
      </div>
      <div className="contentContainer">
        <div className="itemInfoContainer">
          <h2 className="comicCartTitle">{item.product.title}</h2>
          <h3 className="comicPrice">$ {item.product.prices[0].price}</h3>
        </div>
        <div className="itemAmountContainer">
          <div className="amountButtons">
            <button
              className="amountBtn"
              onClick={() =>
                dispatch({
                  type: ADD_TO_CART,
                  product: item.product,
                })
              }
            >
              +
            </button>
            <h4 className="amountDisplay">{amount[0].amount}</h4>
            <button
              className="amountBtn"
              onClick={() =>
                dispatch({
                  type: DECREASE_FROM_CART,
                  product: item.product,
                })
              }
            >
              -
            </button>
          </div>
        </div>
        <div className="itemDeleteContainer">
          <button
            className="removeBtn"
            onClick={() =>
              dispatch({
                type: REMOVE_FROM_CART,
                product: item.product,
              })
            }
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
