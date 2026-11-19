import { useState } from "react";

function Checkout({ cart, setCart }) {
  const [order, setOrder] = useState(null);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = 3000;
  const total = subtotal + deliveryFee;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const customer = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
    };

    const newOrder = {
      orderNumber: "RF-" + Date.now().toString().slice(-8),
      customer,
      items: [...cart],
      subtotal,
      deliveryFee,
      total,
      status: "Pending Payment",
    };

    setOrder(newOrder);
    setCart([]);
  };

  if (order) {
    return (
      <main className="checkout-page">
        <div className="checkout-heading">
          <p>ROGUE FITS</p>
          <h1>ORDER CONFIRMED</h1>
          <span>Your order has been received.</span>
        </div>

        <div className="checkout-summary">
          <h2>THANK YOU, {order.customer.fullName.toUpperCase()}</h2>

          <p>Order Number: {order.orderNumber}</p>
          <p>Status: {order.status}</p>

          <h3>Delivery Information</h3>
          <p>{order.customer.address}</p>
          <p>{order.customer.city}, {order.customer.state}</p>
          <p>{order.customer.phone}</p>
          <p>{order.customer.email}</p>

          <h3>Order Total</h3>
          <h2>₦{order.total.toLocaleString("en-NG")}</h2>

          <p>Payment has not yet been made.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-heading">
        <p>ALMOST YOURS</p>
        <h1>CHECKOUT</h1>
        <span>Complete your details to place your order.</span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty.</h2>
          <p>Add products before proceeding to checkout.</p>
        </div>
      ) : (
        <div className="checkout-container">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>DELIVERY INFORMATION</h2>

            <label>Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              required
            />

            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>
            <input
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
            />

            <label>Delivery Address</label>
            <textarea
              name="address"
              placeholder="Enter your full delivery address"
              required
            />

            <label>City</label>
            <input
              name="city"
              type="text"
              placeholder="Enter your city"
              required
            />

            <label>State</label>
            <input
              name="state"
              type="text"
              placeholder="Enter your state"
              required
            />

            <button type="submit">
              PLACE ORDER
            </button>
          </form>

          <div className="checkout-summary">
            <h2>YOUR ORDER</h2>

            {cart.map((item) => (
              <div className="checkout-item" key={item.id}>
                <span>{item.name} × {item.quantity}</span>
                <span>
                  ₦{(item.price * item.quantity).toLocaleString("en-NG")}
                </span>
              </div>
            ))}

            <div className="checkout-total">
              <p>
                Subtotal
                <span>₦{subtotal.toLocaleString("en-NG")}</span>
              </p>

              <p>
                Delivery
                <span>₦{deliveryFee.toLocaleString("en-NG")}</span>
              </p>

              <h3>
                Total
                <span>₦{total.toLocaleString("en-NG")}</span>
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Checkout;