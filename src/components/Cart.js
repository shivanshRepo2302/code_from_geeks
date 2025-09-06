import React, { useState, useEffect } from 'react';

function getCartFromStorage() {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
}

const Cart = () => {
  const [cartItems, setCartItems] = useState(getCartFromStorage());
  const [checkout, setCheckout] = useState(false);
  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    setCartItems(getCartFromStorage());
  }, []);

  const handleRemove = (id) => {
    const newCart = cartItems.filter(item => item.id !== id);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => setCheckout(true);

  const handleOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  if (orderPlaced) {
    return (
      <div style={{ padding: 32 }}>
        <h1>Thank you for your order!</h1>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map(item => (
              <li key={item.id} style={{ marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>
                  <strong>{item.name}</strong> x {item.quantity}
                </span>
                <span>
                  ₹{item.price * item.quantity}
                  <button
                    onClick={() => handleRemove(item.id)}
                    style={{
                      marginLeft: 16,
                      background: '#e53935',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 4,
                      padding: '4px 10px',
                      cursor: 'pointer',
                      fontSize: '0.95rem'
                    }}
                  >
                    Remove
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          {!checkout && (
            <button onClick={handleCheckout} style={{ background: '#1976d2', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 20px', cursor: 'pointer', fontSize: '1rem' }}>
              Proceed to Checkout
            </button>
          )}
        </>
      )}

      {checkout && cartItems.length > 0 && (
        <form onSubmit={handleOrder} style={{ marginTop: 24 }}>
          <h2>Checkout</h2>
          <div style={{ marginBottom: 16 }}>
            <label>
              Shipping Address:
              <textarea
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
                style={{ width: '100%', minHeight: 60, marginTop: 8, borderRadius: 4, border: '1px solid #ccc', padding: 8 }}
              />
            </label>
          </div>
          <button type="submit" style={{ background: '#43a047', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 20px', cursor: 'pointer', fontSize: '1rem' }}>
            Place Order
          </button>
        </form>
      )}
    </div>
  );
};

export default Cart;