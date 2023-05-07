import { useSelector,useDispatch } from "react-redux";
import {toast} from "react-hot-toast"

const Product = ({item}) => {
  
  const {cart}=useSelector((state)=>state)
  const dispatch=useDispatch();

  const addToCart=()=>{
    dispatch(add(item));
    toast.success("Item added to cart")
  }

  const removeFromCart=()=>{
    dispatch(remove(item.id));
    toast.success("Item remove from cart")
  }

  return(
    <div>
      <div>
        <p>{item.title}</p>
      </div>
      <div>
        <p>{item.description}</p>
      </div>
      <div>
        <img src={item.image}/>
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      <button>
        {
          cart.some((p)=>p.id==item.id) ?
          (
            <button
            onClick={removeFromCart}
            >
             Remove Item
            </button>
          )
          :
          (
            <button
            onClick={addToCart}
            >
              Add to Cart
            </button>
          )
          
        }
      </button>
    </div>
  )
};

export default Product;
