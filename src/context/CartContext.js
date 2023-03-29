import { useContext, createContext, useState } from 'react';

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = (props) => {
  const [carrito, setCarrito] = useState([])

  //agregar producto
  const addItem = (producto, cantidad) => {
    if(isInCart(producto.id)) { //reemplazo la cantidad de productos
      const indice = carrito.findIndex(prod => prod.id === producto.id)
      const aux = [...carrito]
      aux[indice].cant = cantidad
      setCarrito(aux)
    } else { //creo el objeto producto en el carrito con los datos ingresados
      const prodCart = {
        ...producto,
        cant: cantidad
      }
      /*
        const aux [...carrito]
        aux.push(prodCart)
        setCarrito(aux)
      */
      setCarrito([...carrito, prodCart])
    }
  }

  //si existe producto en el carrito
  const isInCart = (id) => {
    //si existe, me lo devuelve. si no existe, me retorna undefined
    return carrito.find(prod => prod.id === id)
  }

  //cantidad total de productos en el carrito
  const getItemQuantity = () => {
    return carrito.reduce((acum, prod) => acum += prod.cant, 0)
  }

  //eliminar producto
  const removeItem = (id) => {
    setCarrito(carrito.filter(prod => prod.id !== id))
  }

  //precio total de la compra
  const totalPrice = () => {
    return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
  }

  //vaciar carrito
  const emptyCart = () => {
    setCarrito([])
  }
  return (
    <CartContext.Provider value={{carrito, addItem, getItemQuantity, removeItem, totalPrice, emptyCart}}>
      {props.children}
    </CartContext.Provider>
  )
}