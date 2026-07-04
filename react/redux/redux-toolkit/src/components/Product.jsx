import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { products } from "../data/products";

function Product() {
  const dispatch = useDispatch();

  return (
    <section className="products-section">
      <div className="section-header">
        <h2>Products</h2>
        <p>{products.length} items available</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-icon">
              {product.name.charAt(0)}
            </div>
            <h3>{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Product;
