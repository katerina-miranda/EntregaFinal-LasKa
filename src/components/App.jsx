import './App.css';
import 'react-toastify/dist/ReactToastify.css';

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//toastify
import { ToastContainer } from 'react-toastify';

//firebase
//import { cargarBDD } from '../firebase/firebase'
//import { getProductos } from '../firebase/firebase'
//import { getProducto } from '../firebase/firebase';
//import { updateProducto, deleteProducto } from '../firebase/firebase';

//componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Contacto/Contacto';
import { Cart } from './Cart/Cart';

//context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CartProvider } from '../context/CartContext';

const App = () => {
  //cargarBDD()
  //getProductos()
  //getProducto("bSsgOvHRz1riOpJKN1Cv")
  /*updateProducto("bSsgOvHRz1riOpJKN1Cv", {
    "idCategoria": 4,
    "nombre": "pulsera",
    "marca": "Link To Love",
    "modelo": "Con Diamantes",
    "precio": 85900,
    "stock": 30,
    "img": "https://firebasestorage.googleapis.com/v0/b/react-laska-2023.appspot.com/o/pulsera-link-to-love-con-diamantes.jpg?alt=media&token=2f584824-4dff-432d-9971-883556c7ed6a"
  })*/
  //deleteProducto("bSsgOvHRz1riOpJKN1Cv")
  return (
    <BrowserRouter>
      <CartProvider>
        <DarkModeProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/accesorio/:id' element={<ItemDetailContainer/>}/>
            <Route path='/accesorios/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <ToastContainer/>
        </DarkModeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
