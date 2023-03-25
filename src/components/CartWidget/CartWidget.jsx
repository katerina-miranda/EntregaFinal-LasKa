import '../App.css';
import { IoIosCart } from 'react-icons/io';

const CartWidget = ({cantCarrito}) => {
  return (
    <>
      <button className='btn btn-dark boton'><IoIosCart size='1.5rem' color='white'/></button>
      <p>{cantCarrito}</p>
    </>
  );
}

export default CartWidget;
