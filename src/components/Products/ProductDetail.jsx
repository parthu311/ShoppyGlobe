import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../utilits/useFetchHook";
import Loading from "../../utilits/Loading";
import { useDispatch } from "react-redux";
import { addItem } from "../../utilits/Store/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(
    `https://dummyjson.com/products/${id}`
  );
  const dispatch = useDispatch();

  if (loading)
    return <Loading/>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const {
    title,
    description,
    price,
    images,
    brand,
    category,
    discountPercentage,
    tags,
    warrantyInformation,
    shippingInformation,
    availabilityStatus,
  } = data;


  const handleAddToCart = () => {
    dispatch(addItem(data)); // Dispatch addItem action with the product data
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Title and Category */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-gray-500 uppercase">{category}</p>
      </div>

      {/* Images */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title}-${index}`}
            className="w-40 h-40 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-lg">{description}</p>
      </div>

      {/* Pricing and Discount */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <p className="text-lg font-bold">
          Price: <span className="text-blue-600">${price}</span>
        </p>
        <p className="text-lg font-bold">
          Discount:{" "}
          <span className="text-green-600">{discountPercentage}%</span>
        </p>
      </div>

      {/* Brand and Tags */}
      <div className="flex justify-between items-center border-t border-gray-200 pt-6 mb-6">
        <p>
          <strong>Brand:</strong> {brand}
        </p>
        <button 
        onClick={handleAddToCart} 
        className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <p>
          <strong>Warranty:</strong> {warrantyInformation}
        </p>
        <p>
          <strong>Shipping:</strong> {shippingInformation}
        </p>
        <p>
          <strong>Availability:</strong> {availabilityStatus}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
