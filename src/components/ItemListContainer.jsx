import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000); // simula un fetch
    });

    getProducts.then((res) => setItems(res));
  }, []);

  return (
    <div classname="item-list">
      {items.length > 0 ? (
        items.map((p) => <ProductCard key={p.id} product={p} />)
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
