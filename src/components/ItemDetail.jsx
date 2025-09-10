import ItemCount from "./ItemCount";
const ItemDetail = ({ item}) => {
  const handleAdd = (quantity) => {
    console.log(`Agregaste ${quantity} unidades al carrito`);
  }
  return (
    <div className="item-detail">
      <img src={item.imageUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount stock={10} initial={1} onAdd={handleAdd} />
    </div>
  );
}

export default ItemDetail;
