import '../App.css'
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//toastify
import { toast } from "react-toastify";

//context
import { useDarkModeContext } from "../../context/DarkModeContext";

export const Contacto = () => {
  let navigate = useNavigate()
  const {darkMode} = useDarkModeContext()
  const {register, formState: { errors }, handleSubmit} = useForm()
  const onSubmit = (data) => {
    console.log(data)
    toast.success('¡Gracias por contactarnos! Vamos a responderte apenas veamos tu mensaje.')
    navigate('/')
  }
  return (
    <div className="container" style={{marginTop: "20px"}}>
      <h1 className={`h1 ${darkMode ? 'blanco' : ''}`}>Contactanos</h1>
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
          <label htmlFor="mensaje" className="form-label">Escribí un comentario</label>
          <textarea className="form-control boton" {...register('mensaje', {
            required: true,
            maxLength: 100
          })} rows={3} defaultValue={""}/>
          {errors.mensaje?.type === 'required' && <p className="rojo">Se requiere completar este campo</p>}
          {errors.mensaje?.type === 'maxLength' && <p className="rojo">El campo debe tener menos de 100 carácteres</p>}
        </div>
        <button type="submit" className="btn btn-primary boton bottom">Enviar</button>
      </form>
    </div>
  );
};