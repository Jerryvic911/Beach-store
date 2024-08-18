import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from '../products';
import Header from '../components/Header';

const ProductDetail = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.id === Number(id));
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  const handleAddToCart = (itemId, productName) => {
    addToCart(itemId);
    alert(`Item "${productName}" added to cart!`);
  };

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  return (
    <div>
      <Header />
      <div className="mt-[6rem] flex flex-col md:flex-row p-5">
        <img className=" w-[30rem] h-[24rem] object-cover" src={product.productImage} alt={product.productName} />
        <div className="pl-5 mt-5 md:mt-0">
          <h1 className="font-Montserrat font-semibold text-3xl">{product.productName}</h1>
          <h2 className="font-jerry font-normal text-lg text-[#5a5753] mt-2">${product.price}</h2>
          <p className="mt-4">{product.productInfo}</p>
          <button
            className="bg-blue-600 text-white w-[6rem] h-[3rem] rounded-md hover:bg-blue-300 mt-4"
            onClick={() => handleAddToCart(product.id, product.productName)}
          >
            Add to cart {cartItemAmount > 0 }
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
