import CartWidget from "../CartWidget/CartWidget";
import Secciones from "./Secciones/Secciones";
import Categorias from "./Categorias/Categorias";
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode";

//context
import { useDarkModeContext } from "../../context/DarkModeContext";

const Navbar = () => {
  const {darkMode} = useDarkModeContext()
  return (
    <nav className={`navbar navbar-expand-lg nav ${darkMode ? 'nav' : 'bg-light'}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Secciones/>
            <Categorias/>
          </ul>
          <CartWidget cantCarrito={30}/>
          <BotonDarkMode/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
