import './App.css';
import 'react-toastify/dist/ReactToastify.css';

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//toastify
import { ToastContainer } from 'react-toastify';

//firebase
import { cargarBDD } from '../firebase/firebase'

//componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Contacto/Contacto';
import { Cart } from './Cart/Cart';

//context
import { DarkModeProvider } from '../context/DarkModeContext';

const App = () => {
  //cargarBDD()
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/accesorio/:nombre' element={<ItemDetailContainer/>}/>
          <Route path='/accesorios/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <ToastContainer/>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
