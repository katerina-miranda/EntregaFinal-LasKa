import React from 'react';
import { useNavigate } from 'react-router-dom';

//toastify
import { toast } from 'react-toastify';

//contexto
import { useCartContext } from '../../context/CartContext';

//firebase
import { createOrdenCompra, getProducto, updateProducto } from '../../firebase/firebase';

export const Checkout = () => {
  const {carrito, emptyCart, totalPrice} = useCartContext()
  const datosFormulario = React.useRef()
  let navigate = useNavigate()

  const consultarFormulario = (e) => {
    e.preventDefault()
    const datForm = new FormData(datosFormulario.current)
    const cliente = Object.fromEntries(datForm)
    const aux = [...carrito]
    aux.forEach(prodCarrito => {
      getProducto(prodCarrito.id).then(prodBDD => {
        prodBDD.stock -= prodCarrito.cant //descuento del stock la cantidad comprada
        updateProducto(prodCarrito.id, prodBDD)
      })
    })
    createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
      toast.success(`¡Muchas gracias por tu compra! Tu orden de compra con el ID: ${ordenCompra.id} con un precio final de $${new Intl.NumberFormat('de-DE').format(totalPrice())} se realizó exiosamente.`)
      emptyCart()
      e.target.reset()
      navigate('/')
    })
  }
  return (
    <>
      {carrito.length === 0
        ?
        <>
          <h2>Tu carrito está vacio</h2>
        </>
        :
        <div className="container" style={{marginTop: "20px"}}>
          <form onSubmit={consultarFormulario} ref={datosFormulario}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Ingresá tu nombre</label>
              <input type="text" className="form-control boton" name="nombre"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Ingresá tu email</label>
              <input type="email" className="form-control boton" name="email"/>
            </div>
            <div className="mb-3">
              <label htmlFor="repEmail" className="form-label">Repetí tu email</label>
              <input type="email" className="form-control boton" name="repEmail"/>
            </div>
            <div className="mb-3">
              <label htmlFor="celular" className="form-label">Ingresá tu teléfono</label>
              <input type="number" className="form-control boton" name="celular"/>
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Ingresá tu dirección</label>
              <input type="texto" className="form-control boton" name="direccion"/>
            </div>
            <button type="submit" className="btn btn-primary boton">Finalizar Compra</button>
          </form>
        </div>
      }
    </>
  );
};