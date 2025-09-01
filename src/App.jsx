import './components/NavBar.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a NoelStore,Una de las mejores paginas del pais¡" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
