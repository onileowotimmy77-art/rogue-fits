import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop({ addToCart }) {
return (
<main className="shop-page">
<div className="shop-heading">
<p>CURATED FOR YOUR STYLE</p>
<h1>OUR COLLECTION</h1>
<span>Discover pieces that make a statement.</span>
</div>

  <div className="product-grid">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        addToCart={addToCart}
      />
    ))}
  </div>
</main>
);
}

export default Shop;