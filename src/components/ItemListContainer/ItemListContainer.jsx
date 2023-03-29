import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//firebase
import { getProductos } from '../../firebase/firebase';

//componentes
import { ItemList } from '../ItemList/ItemList';

//context
import { useDarkModeContext } from '../../context/DarkModeContext'

export const ItemListContainer = () => {
  const {darkMode} = useDarkModeContext()
  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams()

  useEffect(() => {
    if(idCategoria) {
      getProductos()
      .then(items => {
        const products = items.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(idCategoria))
        const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
        setProductos(productsList)
      })
    } else {
      getProductos()
      .then(items => {
        const products = items.filter(prod => prod.stock > 0)
        const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
        setProductos(productsList)
      })
    }
  }, [idCategoria])
  //[] cuando se renderiza
  //[prop] cuando se renderiza y cuando se actualiza
  return (
    <div className='row cardProductos' style={{marginTop: "20px"}} >
      <h1 className={`h1 ${darkMode ? 'blanco' : ''}`}>Accesorios Laska</h1>
      {productos}
    </div>
  );
} 