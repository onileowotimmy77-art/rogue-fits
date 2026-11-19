import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("rogueFitsCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const [notification, setNotification] = useState("");
  const notificationTimer = useRef(null);

  useEffect(() => {
    localStorage.setItem("rogueFitsCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    return () => clearTimeout(notificationTimer.current);
  }, []);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setNotification(`${product.name} added to your bag.`);

    clearTimeout(notificationTimer.current);

    notificationTimer.current = setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      {notification && (
        <div className="cart-notification">
          <span className="notification-check">✓</span>

          <div>
            <strong>ADDED TO BAG</strong>
            <p>{notification}</p>
          </div>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} />}
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/shop"
          element={<Shop cart={cart} addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/checkout"
          element={
            <Checkout cart={cart} setCart={setCart} />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;