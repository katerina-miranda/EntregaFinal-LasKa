import '../App.css'
import { Link } from "react-router-dom"

//componente
import { ItemList } from "../ItemList/ItemList"

export const Cart = () => {
  const carrito = [
    {id: 1, nombre: "Anillo", modelo: "1", img: 'anillo-fino-icon.jpg', precio: 400, cantidad: 5 },
    {id: 2, nombre: "Collar", modelo: "2", img: 'anillo-fino-icon.jpg', precio: 300, cantidad: 2 },
    {id: 3, nombre: "Pulsera", modelo: "3", img: 'anillo-fino-icon.jpg', precio: 500, cantidad: 3 },
  ]
  return(
    <>
      {carrito.length === 0 
        ? //Si carrito esta vacio
          <>
            <h2>Carrito vacio</h2>
            <Link className="nav-link" to={'/'}><button className="btn btn-dark boton">Continuar comprando</button></Link> 
          </>
        : //Si carrito tiene productos
          <div className="container cartContainer">
            {<ItemList products={carrito} plantilla={'itemCart'}/>}
            <div className="divButtons">
              <p>Resumen de la compra: precio total</p>
              <button className="btn btn-danger boton">Vaciar Carrito</button>
              <Link className="nav-link" to={'/'}><button className="btn btn-dark boton">Continuar Comprando</button></Link> 
              <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark boton">Finalizar Compra</button></Link> 
            </div>
          </div>
      }
    </>
  )
};