import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="hero">
      <div className="hero-content">
        <p className="hero-tag">THE NEW STANDARD OF STREETWEAR</p>

        <h1>
          DRESS
          <br />
          DIFFERENT.
        </h1>

        <p className="hero-description">
          Discover premium sneakers, clothing and accessories
          curated for those who refuse to blend in.
        </p>

        
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000"
          alt="Premium red sneaker"
        />
      </div>

<div className="hero-button-mobile">
  <button
    className="shop-button"
    onClick={() => navigate("/shop")}
  >
    EXPLORE COLLECTION
  </button>
</div>

      <div className="hero-bottom">
        <span>ROGUE FITS</span>
        <span>EST. 2026</span>
      </div>
    </main>
  );
}

export default Home;