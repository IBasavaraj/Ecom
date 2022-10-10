import styles from "../pages/styles/ItemCard.module.scss";
import UpdateProductCount from "./UpdateProductCount";

function ItemCard({ item, currentComponent, cartItem, setCartItem, addToCart }) {
    const { itemId, itemName, itemPrice, isCartItem } = item;
    
    return (
    <div className={styles.container} key={itemId}>
        <h2>{itemName}</h2>
        <h3>${itemPrice}</h3>
        {currentComponent == "home" ? isCartItem ? <UpdateProductCount item={item} 
        cartItem={cartItem} setCartItem={setCartItem} /> : 
        <button className={`${styles.addToCartButton} button`} onClick={()=>addToCart(item)}>Add to cart</button>:<UpdateProductCount item={item} 
        cartItem={cartItem} setCartItem={setCartItem} />}
    </div>
    )
}
export default ItemCard;
