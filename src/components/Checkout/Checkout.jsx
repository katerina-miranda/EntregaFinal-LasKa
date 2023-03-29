import '../App.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

//toastify
import { toast } from 'react-toastify';

//contexto
import { useCartContext } from '../../context/CartContext';
import { useDarkModeContext } from '../../context/DarkModeContext';

//firebase
import { createOrdenCompra, getProducto, updateProducto } from '../../firebase/firebase';

export const Checkout = () => {
  let navigate = useNavigate()
  const {darkMode} = useDarkModeContext()
  const {carrito, emptyCart, totalPrice} = useCartContext()
  const {register, formState: { errors }, handleSubmit} = useForm()
  const datosFormulario = React.useRef()

  const onSubmit = (data, e) => {
    console.log(data)
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
          <h2 className={`h1 centrar ${darkMode ? 'blanco' : ''}`}>Tu carrito está vacio</h2>
        </>
        :
        <div className="container" style={{marginTop: "20px"}}>
          <h1 className={`h1 ${darkMode ? 'blanco' : ''}`}>Verificación de compra</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Ingresá tu nombre</label>
              <input type="text" className="form-control boton" {...register('nombre', {
                required: true
              })}/>
              {errors.nombre?.type === 'required' && <p className="rojo">Se requiere completar este campo</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Ingresá tu email</label>
              <input type="email" className="form-control boton" {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
              })}/>
              {errors.email?.type === 'required' && <p className="rojo">Se requiere completar este campo</p>}
              {errors.email?.type === 'pattern' && <p className="rojo">El formato del email es incorrecto</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="celular" className="form-label">Ingresá tu teléfono</label>
              <input type="number" className="form-control boton" {...register('celular', {
                required: true
              })}/>
              {errors.celular?.type === 'required' && <p className="rojo">Se requiere completar este campo</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">Ingresá tu dirección</label>
              <input type="texto" className="form-control boton" {...register('direccion', {
                required: true
              })}/>
              {errors.direccion?.type === 'required' && <p className="rojo">Se requiere completar este campo</p>}
            </div>
            <button type="submit" className="btn btn-primary boton bottom">Finalizar Compra</button>
          </form>
        </div>
      }
    </>
  );
};