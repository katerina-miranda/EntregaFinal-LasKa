import '../App.css'
import { Link } from "react-router-dom"

//componente
import { ItemList } from "../ItemList/ItemList"

//contexto
import { useCartContext } from '../../context/CartContext';

export const Cart = () => {
  const {carrito, totalPrice, emptyCart} = useCartContext()
  return(
    <>
      {carrito.length === 0 
        ? //Si carrito esta vacio
          <>
            <h2>No tenés accesorios en el carrito</h2>
            <Link className="nav-link" to={'/'}><button className="btn btn-dark boton">Continuar comprando</button></Link> 
          </>
        : //Si carrito tiene productos
          <div className="container cartContainer">
            <h1 className='h1 img'>Carrito de compras</h1>
            {<ItemList products={carrito} plantilla={'itemCart'}/>}
            <div className="divButtons">
              <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
              <button className="btn btn-danger boton" onClick={() => emptyCart()}>Vaciar Carrito</button>
              <Link className="nav-link" to={'/'}><button className="btn btn-dark boton">Continuar Comprando</button></Link> 
              <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark boton">Finalizar Compra</button></Link> 
            </div>
          </div>
      }
    </>
  )
};