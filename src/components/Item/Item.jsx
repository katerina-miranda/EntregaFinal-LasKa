import '../App.css';
import { Link } from "react-router-dom";

//context
import { useDarkModeContext } from "../../context/DarkModeContext";

export const Item = ({item}) => {
  const {darkMode} = useDarkModeContext()
  return (                                                      //CLASES DE BOOSTRAP
    <div className={`card cardProducto ${darkMode ? 'text-white bg-secondary' : 'border-light'}`}>
      <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`}/>
      <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
        <h5 className="card-title">{item.nombre} {item.modelo}</h5>
        <p className="card-text">{item.marca}</p>
        <p className="card-text">${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
        <button className="boton btn btn-dark"><Link className="nav-link" to={`/accesorio/${item.id}`}>Ver Producto</Link></button>
      </div>
    </div>
  );
}
