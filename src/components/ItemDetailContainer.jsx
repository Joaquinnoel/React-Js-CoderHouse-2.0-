import { useParams } from "react-router-dom";
import products from "../data/products";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const { id } = useParams();
  const item = products.find((p) => p.id === parseInt(id));

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>Producto no encontrado</p>}
    </div>
  );
}

export default ItemDetailContainer;


        