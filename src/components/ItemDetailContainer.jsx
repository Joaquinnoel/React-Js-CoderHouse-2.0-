import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const getItem = () => {
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Khamrah",
        description: "Perfume muy bueno, duradero y fresco",
        price: 100000,
        imageUrl: '/khamrah.jpg',
      });
    }, 2000);
  });
};

function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((producto) => setItem(producto));
  }, []);

  return (
    <div className="item-detail-container">
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <p>Cargando la Mejor Eleccion para vos....</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;

        