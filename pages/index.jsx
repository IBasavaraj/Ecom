import Link from 'next/link';
import { useContext, useState } from 'react';
import ItemCard from '../Components/ItemCard';
import { itemData } from '../Constants/productList';
import { AppContext } from '../Context/AppContext';
import { useRouter } from 'next/router';

export default function Home() {
  const [cartItems] = useContext(AppContext);
  const [cartItem, setCartItem] = useState({});
  const route = useRouter();
  function addToCart(item) {
    setCartItem(item);
    cartItems.push(item);
    item.isCartItem = true;
    setCartItem({ ...cartItem });
  }
  function routeToCart(){
    route.push("/cart");
  }
  return (
    <div>
      <button onClick={routeToCart}>cart</button>
      {itemData.map((item) => (
          <ItemCard key={item.itemId} item={item} currentComponent="home" cartItem={cartItem} setCartItem={setCartItem} addToCart={addToCart} />
      )
      )}
    </div>
  )
}
