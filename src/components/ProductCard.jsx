import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.title} className="card-img" />
      <h3 className="card-title">{product.title}</h3>
      <p className="card-price">${product.price}</p>
      <Link className="card-btn" to={`/item/${product.id}`}>
        Ver detalle
      </Link>
    </div>
  );
};

export default ProductCard;


