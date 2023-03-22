import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/accesorio/:nombre' element={<ItemDetailContainer/>}/>
        <Route path='/accesorios/:idCategoria' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
