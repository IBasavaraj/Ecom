import Link from "next/link";
import UpdateProductCount from "./UpdateProductCount";

function ItemCard({ item, currentComponent, cartItem, setCartItem, addToCart }) {
    const { itemId, itemName, itemPrice, isCartItem } = item;
    
    return (<div key={itemId}>
        <h5>{itemName}</h5>
        <h1>${itemPrice}</h1>
        {/* {currentComponent == "home" && <Link href={{
                pathname: "./Cart",
                query: item,
            }}>
                <a>Add to cart</a>
            </Link>} */}
        {currentComponent == "home" && isCartItem ? <UpdateProductCount item={item} 
        cartItem={cartItem} setCartItem={setCartItem} /> : <button onClick={()=>addToCart(item)}>Add to cart</button>}
    </div>
    )
}
export default ItemCard;
