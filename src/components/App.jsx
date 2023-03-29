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
import { updateProducto } from '../firebase/firebase';

//componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Cart/Cart';
import { Contacto } from './Contacto/Contacto';
import { Checkout } from './Checkout/Checkout';
import { Footer } from './Footer/Footer';

//context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CartProvider } from '../context/CartContext';

const App = () => {
  //cargarBDD()
  //getProductos()
  //getProducto("bSsgOvHRz1riOpJKN1Cv")
  updateProducto("3ebHODfpi5WwIV8vzKwR", {
    "idCategoria": 2,
    "nombre": "collar",
    "marca": "Link To Love",
    "modelo": "Lazo",
    "precio": 80600,
    "stock": 30,
    "img": "https://firebasestorage.googleapis.com/v0/b/react-laska-2023.appspot.com/o/collar-link-to-love-con-diamantes.jpg?alt=media&token=333bbc12-4ea6-497c-92f8-405293ffd081"
  })
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
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
          <Footer/>
          <ToastContainer/>
        </DarkModeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
