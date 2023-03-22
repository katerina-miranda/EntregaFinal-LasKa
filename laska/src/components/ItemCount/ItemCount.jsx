import { useState } from "react"

export const ItemCount = ({valInicial, stock}) => {
  const [contador, setContador] = useState(valInicial)
          //var   //modificar var   //estado inicial
  const restar = () => (contador > valInicial) && setContador(contador - 1) //operador ternario sin else
  const sumar = () => (contador < stock) && setContador(contador + 1) //contador = contador + 1
  return (
    <>
      <button className="btn btn-light" onClick={() => restar()}>-</button>
      {contador}
      <button className="btn btn-light" onClick={() => sumar()}>+</button>
    </>
  );
}
