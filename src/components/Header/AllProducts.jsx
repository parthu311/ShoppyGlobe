import React from "react";
import { useFetch } from "../../utilits/useFetchHook";
import Loading from "../../utilits/Loading";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-lg hover:shadow-xl transition p-4"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
