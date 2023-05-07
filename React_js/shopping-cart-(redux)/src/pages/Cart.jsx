import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      {cart.length > 0 ? (
        <div> 
          <div>
            {
              cart.map((item,index)=>(
                <CartItem key={item.id} item={item} itemIndex={index}/>
              ))
            }
          </div>
          <div>
            
          </div>
        </div>
      ) : (
        <div>
          <h2>Cart Empty!</h2>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
