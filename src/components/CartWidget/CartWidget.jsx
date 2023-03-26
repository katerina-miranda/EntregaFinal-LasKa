import '../App.css';

//icono
import { IoIosCart } from 'react-icons/io';

//componentes 
import { Link } from 'react-router-dom';

const CartWidget = ({cantCarrito}) => {
  return (
    <>
      <Link className='nav-link' to={'/cart'}><button className='btn btn-dark boton'><IoIosCart size='1.5rem' color='white'/></button></Link>
      <p>{cantCarrito}</p>
    </>
  );
}

export default CartWidget;
