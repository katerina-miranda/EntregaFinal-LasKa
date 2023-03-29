import '../../App.css';
import { Link } from "react-router-dom";
import React from 'react';

const Categorias = React.memo(() => {
  return (
    <li className="nav-item dropdown">
      {<Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <button className="btn btn-dark boton">Accesorios</button>
      </Link>}
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to={"/accesorios/1"}>Anillos</Link></li>
        <li><Link className="dropdown-item" to={"/accesorios/2"}>Collares</Link></li>
        <li><Link className="dropdown-item" to={"/accesorios/3"}>Pendientes</Link></li>
        <li><Link className="dropdown-item" to={"/accesorios/4"}>Pulseras</Link></li>
      </ul>
    </li>
  );
})

export default Categorias;
