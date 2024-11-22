
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import './cart.css'

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);  // Get the cart items from the store

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />) // Pass each item to CartItem
        )}
      </div>
    </div>
  );
}

export default Cart;
