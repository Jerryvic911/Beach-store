import React, { useContext } from 'react';
import Header from '../../components/Header';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './cart-item';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount, getTotalItemsInCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalItems = getTotalItemsInCart();

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="text-center font-Montserrat text-3xl my-10 pt-[5rem]">
        <h1>Your cart items</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-5 px-5 ">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="text-center mt-10">
          <p className="text-xl font-semibold">Subtotal: ${totalAmount.toFixed(2)}</p>
          <button
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 mt-5"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
          <p>Amount of Items: {totalItems}</p>
        </div>
      ) : (
        <h1 className="text-center text-xl mt-10">Your cart is empty</h1>
      )}
      <div className="text-center mt-3">
        <button
          className="bg-gray-300 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-400 mb-7"
          onClick={() => navigate("/shop")}
        >
          Continue Shopping
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Cart;
