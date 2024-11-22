import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../utilits/Store/cartSlice";
import './cart.css';

function CartItem({ item }) {
  const dispatch = useDispatch();

  // Handle item removal from the cart
  const handleRemove = () => {
    dispatch(removeItem(item.id)); // Remove item by ID
  };

  // Handle increasing the quantity
  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 })); // Increment quantity
  };

  // Handle decreasing the quantity
  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 })); // Decrement quantity
    }
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
      <div className="cart-item-info">
        <h2>{item.title}</h2> {/* Product title */}
        <p>Price: ${item.price}</p> {/* Product price */}
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p> {/* Total price based on quantity */}

        {/* Quantity controls */}
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={handleDecrease}>
            -
          </button>
          <span className="quantity-display">{item.quantity}</span>
          <button className="quantity-btn" onClick={handleIncrease}>
            +
          </button>
        </div>

        <button className="remove-btn" onClick={handleRemove}>
          Remove
        </button> {/* Button to remove item from cart */}
      </div>
    </div>
  );
}

export default CartItem;
