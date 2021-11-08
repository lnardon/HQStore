import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";
import ComicPriceStripe from "../../components/ComicPriceStripe";
import { ADD_TO_CART } from "../../actions/types";

function ComicCard({ product }) {
  const cart = useSelector((state) => state.cartReducer);
  const amountOfItem = cart.items.filter(
    (item) => item.product.id === product.id
  );
  const dispatch = useDispatch();
  return (
    <div className="comicCardContainer">
      <div className="coverCardContainer">
        {amountOfItem.length > 0 && (
          <span className="counterSpan">{amountOfItem[0].amount}</span>
        )}
        <img
          src={`${product.thumbnail.path}.${product.thumbnail.extension}`}
          alt="Comic Cover"
          className="comicCardCoverImage"
        />
      </div>

      <div className="comicInfo">
        <h2 className="comicTitle">{product.title}</h2>
        <div className="comicBuySection">
          {product.prices.map((info, index) => {
            return (
              <ComicPriceStripe
                type={info.type}
                price={info.price}
                key={index}
              />
            );
          })}
          <button
            className="ctaBtn"
            onClick={() => {
              dispatch({
                type: ADD_TO_CART,
                product,
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ComicCard;
