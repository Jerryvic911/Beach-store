import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";

export function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="mb-10 pl-10 w-[25rem]">
      <div className="relative group">
        <Link to={`/product/${id}`}>
          <img
            className="w-[18rem] h-[20rem] object-cover"
            src={productImage}
            alt={productName}
          />
        </Link>
        <button
          onClick={() => addToCart(id)}
          className="hidden absolute top-6 right-24 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-7 px-4 py-2 shadow-lg group-hover:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="size-6 icon shadow-lg cursor-pointer relative right-[15px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {cartItemAmount > 0 }
        </button>
      </div>
      <h1 className="pt-1 font-semibold text-lg">{productName}</h1>
      <h2 className="text-[#5a5753] text-base font-semibold mt-1">${price}</h2>
    </div>
  );
}
