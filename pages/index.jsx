import styles from "./styles/Home.module.scss"
import { useContext, useEffect, useState } from 'react';
import DisplayItems from "../Components/DisplayItems"
import { itemData } from '../Constants/productList';
import { AppContext } from '../Context/AppContext';
import { useRouter } from 'next/router';

export default function Home() {
  const [cartItems] = useContext(AppContext)
  const [homeItems, setHomeItems] = useState([]);
  const route = useRouter();

  useEffect(() => {
    if (localStorage.getItem("cartItems") !== null) {
      const remainingItems = itemData.filter(product => {
        return !cartItems.some(item => {
          return product.itemId === item.itemId;
        });
      });
      setHomeItems([...cartItems, ...remainingItems]);
    } else {
      setHomeItems(itemData);
    }
  }, [cartItems]);

  function routeToCart() {
    route.push("/cart");
  }

  return (
    <div className={styles.homeContainer}>
      <button className={`${styles.cartButton} button`} onClick={routeToCart}>cart</button>
      <div className={styles.itemsContainer}>
        <DisplayItems displayItems={homeItems} currentComponent="home"/>
      </div>
    </div>
  )
}
