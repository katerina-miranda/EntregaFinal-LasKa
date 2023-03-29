import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Contacto = () => {
  let navigate = useNavigate() //ubicacion actual de mi componente
  const datosFormulario = React.useRef() //creo la referencia
  const consultarFormulario = (e) => {
    e.preventDefault()
    console.log(datosFormulario.current) //consulto el estado actual del formulario
    const datForm = new FormData(datosFormulario.current) //genero un objeto iterator de esos datos
    console.log(datForm)
    const contacto = Object.fromEntries(datForm) //transfroma en un objeto literal
    console.log(contacto)
    e.target.reset() //reseteo el formulario
    toast.success("¡Gracias por contactarnos! Vamos a responderte apenas veamos tu mensaje.")
    navigate("/") //redirijo a la pagina inicial
  }
  return (
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
          <label htmlFor="celular" className="form-label">Ingresá tu teléfono</label>
          <input type="number" className="form-control boton" name="celular"/>
        </div>
        <div className="mb-3">
          <label htmlFor="consulta" className="form-label">Escribí un comentario</label>
          <textarea className="form-control boton" name="consulta" rows={3} defaultValue={""}/>
        </div>
        <button type="submit" className="btn btn-primary boton">Enviar</button>
      </form>
    </div>
  );
};
