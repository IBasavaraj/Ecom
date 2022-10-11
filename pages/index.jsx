import styles from "./styles/Home.module.scss"
import { useContext, useEffect, useState } from 'react';
import ItemCard from '../Components/ItemCard';
import { itemData } from '../Constants/productList';
import { AppContext } from '../Context/AppContext';
import { useRouter } from 'next/router';

export default function Home() {
  const [cartItems, setCartItems] = useContext(AppContext);
  const [cartItem, setCartItem] = useState({});
  const route = useRouter();

//  function addToCart(item) {
//     setCartItem(item);
//     cartItems.push(item);
//     item.isCartItem = true;
//     localStorage.setItem("cartItems", JSON.stringify(cartItems))
//     setCartItem({ ...cartItem });
//   }
  function routeToCart(){
    console.log(itemData);
    route.push("/cart");
  }
  return (
    <div className={styles.homeContainer}>
      <button className={`${styles.cartButton} ${"button"}`} onClick={routeToCart}>cart</button>
      <div className={styles.itemsContainer}>
      {itemData.map((item) => (
          <ItemCard key={item.itemId} item={item} currentComponent="home" />)
      )}
      </div>    
    </div>
  )
}
