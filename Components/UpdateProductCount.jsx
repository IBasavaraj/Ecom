import styles from "../pages/styles/UpdateProductCount.module.scss"
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function UpdateProductCount({ item }) {
    const [cartItems, setCartItems] = useContext(AppContext)
    const { itemId, itemQuantity } = item;
    function productDecrement(itemId) {
        const item = cartItems.find((item) => item.itemId === itemId);
        if (parseInt(item.itemQuantity) === 1) {
            item.isCartItem=false;
            const index = cartItems.findIndex((item) => item.itemId === itemId);
            cartItems.splice(index, 1); 
        } 
        item.itemQuantity--;
        setCartItems([...cartItems])
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }
    function productIncrement(itemId) {
        const item = cartItems.find((item) => item.itemId === itemId);
        item.itemQuantity++;
        setCartItems([...cartItems])
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }
    return (
        <div className={styles.container} key={itemId}>
            <button className={`${styles.productUpdateCountButton} button`} onClick={() => productDecrement(itemId)}>-</button>
            <h4 className={styles.itemQuantity}>{itemQuantity}</h4>
            <button className={`${styles.productUpdateCountButton} button`} onClick={() => productIncrement(itemId)}>+</button>
        </div>
    )
}
export default UpdateProductCount;