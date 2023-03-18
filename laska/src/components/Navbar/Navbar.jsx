import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";
import Categorias from "./Categorias/Categorias";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Secciones/>
            <Categorias/>
          </ul>
        </div>
        <CartWidget cantCarrito={9}/>
      </div>
      <ItemListContainer/>
    </nav>
  );
}

export default Navbar;
