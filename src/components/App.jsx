import './App.css';
import 'react-toastify/dist/ReactToastify.css';

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//toastify
import { ToastContainer } from 'react-toastify';

//componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Contacto/Contacto';

//context
import { DarkModeProvider } from '../context/DarkModeContext';

const App = () => {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/accesorio/:nombre' element={<ItemDetailContainer/>}/>
          <Route path='/accesorios/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
        <ToastContainer/>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;
