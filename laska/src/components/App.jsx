import './App.css';
import Navbar from "./Navbar/Navbar";
import CartWidget from "./CartWidget/CartWidget";
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar/>
      <CartWidget cantCarrito={8}/>
      <ItemListContainer/>
    </>
  );
}

export default App;
