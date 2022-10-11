import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import styles from "../pages/styles/ItemCard.module.scss";
import UpdateProductCount from "./UpdateProductCount";

function ItemCard({ item, currentComponent }) {
    const [cartItems, setCartItems] = useContext(AppContext);
    const [cartItem, setCartItem] = useState({});
    const { itemId, itemName, itemPrice, isCartItem } = item;
    function addToCart(item) {
        setCartItem(item);
        cartItems.push(item);
        item.isCartItem = true;
        // setCartItems([...cartItems])
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
        setCartItem({ ...cartItem });
      }
    
    return (
    <div className={styles.container} key={itemId}>
        <h2>{itemName}</h2>
        <h3>${itemPrice}</h3>
        {currentComponent == "home" ? isCartItem ? <UpdateProductCount item={item} /> : 
        <button className={`${styles.addToCartButton} button`} onClick={()=>addToCart(item)}>Add to cart</button>:
        <UpdateProductCount item={item} />}
    </div>
    )
}
export default ItemCard;
