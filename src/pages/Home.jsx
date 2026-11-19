import { useNavigate } from "react-router-dom";
import products from "../data/products";

function Home({ addToCart }) {
  const navigate = useNavigate();

  const featuredProduct = products[0];

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">
            THE NEW STANDARD OF STREETWEAR
          </p>

          <h1>
            DRESS
            <br />
            DIFFERENT.
          </h1>

          <p className="hero-description">
            Discover premium sneakers, clothing and accessories
            curated for those who refuse to blend in.
          </p>

          <button
            className="shop-button hero-shop-button"
            onClick={() => navigate("/shop")}
          >
            EXPLORE COLLECTION
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1786033879319-9b5743136616?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Premium red sneaker"
          />
        </div>

      
      </section>

      <section className="featured-section">
        <div className="featured-heading">
          <div>
            <p>HANDPICKED FOR YOU</p>
            <h2>FEATURED PRODUCT</h2>
          </div>

          <button onClick={() => navigate("/shop")}>
            VIEW ALL PRODUCTS →
          </button>
        </div>

        {featuredProduct && (
          <div className="featured-product">
            <div className="featured-image">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
              />
            </div>

            <div className="featured-details">
              <p>{featuredProduct.category}</p>

              <h2>{featuredProduct.name}</h2>

              <span>{featuredProduct.description}</span>

              <h3>
                ₦{featuredProduct.price.toLocaleString("en-NG")}
              </h3>

              <button
                onClick={() => addToCart(featuredProduct)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;