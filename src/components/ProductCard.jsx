import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="item-detail">
      <img src={product.imageUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button>Ver Detalle</button>
      </Link>
    </div>
  );
}

export default ProductCard;

