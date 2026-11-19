function Cart({ cart, setCart }) {
const increaseQuantity = (id) => {
setCart((currentCart) =>
currentCart.map((item) =>
item.id === id
? { ...item, quantity: item.quantity + 1 }
: item
)
);
};

const decreaseQuantity = (id) => {
setCart((currentCart) =>
currentCart.map((item) =>
item.id === id
? { ...item, quantity: Math.max(1, item.quantity - 1) }
: item
)
);
};

const removeItem = (id) => {
setCart((currentCart) =>
currentCart.filter((item) => item.id !== id)
);
};

const total = cart.reduce(
(sum, item) => sum + item.price * item.quantity,
0
);

return (
<main className="cart-page">
<div className="cart-heading">
<p>YOUR SELECTION</p>
<h1>SHOPPING CART</h1>
</div>

  {cart.length === 0 ? (
    <div className="empty-cart">
      <h2>Your cart is empty.</h2>
      <p>Discover something you love.</p>
    </div>
  ) : (
    <>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>
                ₦{item.price.toLocaleString("en-NG")}
              </p>

              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>

              <button
                className="remove-item"
                onClick={() => removeItem(item.id)}
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
  <h2>
    Subtotal: ₦{total.toLocaleString("en-NG")}
  </h2>

  <button
    className="checkout-button"
    onClick={() => window.location.href = "/checkout"}
  >
    PROCEED TO CHECKOUT
  </button>
</div>
    </>
  )}
</main>
);
}

export default Cart;