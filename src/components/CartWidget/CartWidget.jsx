import '../App.css';

//icono
import { IoIosCart } from 'react-icons/io';

//componentes 
import { Link } from 'react-router-dom';

//contexto
import { useCartContext } from '../../context/CartContext'
 
const CartWidget = () => {
  const {getItemQuantity} = useCartContext()
  return (
    <>
      <Link className='nav-link' to={'/cart'}>
        <button className='btn btn-dark boton rojo'><IoIosCart size='1.5rem' color='white'/></button>
        {getItemQuantity() > 0 && <span className='cantCarrito boton'>{getItemQuantity()}</span>}
      </Link>
    </>
  );
}

export default CartWidget;
