import { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };
 return (
    <div className="itemcount">
      <div className="controls">
        <button className="btn" onClick={decrease}>-</button>
        <span className="count">{count}</span>
        <button className="btn" onClick={increase}>+</button>
      </div>
      <button className="add-btn" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

