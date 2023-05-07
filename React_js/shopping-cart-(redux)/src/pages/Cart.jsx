import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount();
  },[cart])

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
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items:{cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount:{totalAmount}</p>
            </div>
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
