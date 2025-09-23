import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);


export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "Products"));
  return querySnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.name,         
      price: data.Precio,      
      imageUrl: data.imagen,   
    };
  });
};

