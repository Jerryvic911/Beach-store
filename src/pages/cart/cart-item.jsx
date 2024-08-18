import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount, deleteCartItem } = useContext(ShopContext);

  const itemTotal = price * cartItems[id];

  return (
    <div className="flex items-center justify-between p-5 border-b border-gray-200">
      <Link to={`/product/${id}`}>
      <img className="w-[18rem] h-[10rem] object-cover rounded-md" src={productImage} alt={productName} />
      </Link>
      <div className="flex-1 ml-5">
        <p className="font-semibold text-lg">{productName}</p>
        <p className="text-gray-600">${price}</p>
        <p className="text-gray-800">Total: ${itemTotal.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-400"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          className="text-center w-[5rem] bg-gray-100 border border-gray-300 rounded-md"
          type="number"
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button
          className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-400"
          onClick={() => addToCart(id)}
        >
          +
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
          onClick={() => deleteCartItem(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;

