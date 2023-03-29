//componentes
import { ItemCount } from "../ItemCount/ItemCount";

//context
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCartContext } from "../../context/CartContext";

export const ItemCart = ({item}) => {
  const {darkMode} = useDarkModeContext()
  const {removeItem, addItem} = useCartContext()
  const onAdd = (cantidad) => { //agregar el producto al carrito
    addItem(item, cantidad)
  }
  return (
    <div className="card mb-3 cardCart boton">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.img} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded-start"/>
        </div>
        <div className="col-md-8">
          <div className={`card-body cardCartBody ${darkMode && 'cardBodyDark'}`}>
            <h5 className="card-title">{item.nombre} {item.modelo}</h5>
            <p className="card-text">Cantidad {item.cant}</p>
            <p className="card-text">Precio Unitario: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            <p className="card-text">Subtotal: ${new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
            <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd}/>
            <button className="btn btn-danger boton" onClick={() => removeItem(item.id)}>Eliminar Accesorio</button>
          </div>
        </div>
      </div>
    </div>
  );
};