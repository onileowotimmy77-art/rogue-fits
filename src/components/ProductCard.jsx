function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <p>{product.category}</p>

      <h3>{product.name}</h3>

      <p className="product-description">
        {product.description}
      </p>

      <h4>
        ₦{product.price.toLocaleString("en-NG")}
      </h4>
    </div>
  );
}

export default ProductCard;