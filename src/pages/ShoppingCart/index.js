import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Components && Style
import "./index.css";
import Header from "../../components/Header";
import ShoppingCartItem from "../../components/ShoppingCartItem";

function ShoppingCart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector((state) => state.cartReducer);
  // Gets the total amount of the cart based on the price and quantity
  useEffect(() => {
    let total = 0;
    cart.items.forEach((item) => {
      total += item.product.prices[0].price * item.amount;
    });
    setTotalAmount(total);
  }, [cart]);

  return (
    <div className="shoppingCartContainer">
      <Header />
      <div className="shoppingCartItemsListContainer">
        <div className="shoppingCartContentContainer">
          <Link to={"/"} className="backBtn">
            {`View All Comics`}
          </Link>
          {cart.items.map((item, index) => {
            return <ShoppingCartItem key={index} item={item} />;
          })}
        </div>
        <div className="totalAmountContainer">
          <h2 className="totalTitle">TOTAL:</h2>
          <h2 className="totalAmount">$ {totalAmount.toFixed(2)}</h2>
        </div>
      </div>
      <div className="buyBtnContainer">
        <button
          className="buyBtn"
          onClick={() =>
            alert(`Successful Purchase of $ ${totalAmount.toFixed(2)}`)
          }
        >
          Finish Purchase
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
