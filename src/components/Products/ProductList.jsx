import { Link } from "react-router-dom";
import Loading from "../../utilits/Loading";
import { useFetch } from "../../utilits/useFetchHook";
import './product.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utilits/Store/cartSlice";

function ProductList() {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  if (loading) return <Loading />;
  if(error) return <p>Error : {error}</p>

  const filteredProducts = data.products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatch the action to add the product to the cart
  };

  return (
    <>
    <div className="product-list-container">
      <h1 className="title">Product List</h1>
      {/* search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={() => console.log('Search!')}>
          Search
        </button>
        </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">
                {product.description.substring(0, 50)}...
              </p>
              <p className="product-price">Price: ${product.price}</p>
              <Link to={`/products/${product.id}`}  className="details-button">
                View Details
              </Link>
              <button
                    className="add-to-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ProductList;
