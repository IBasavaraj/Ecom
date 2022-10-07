import Link from "next/link";

function ItemCard({ item, currentComponent }) {
    const { itemId, itemName, itemPrice } = item;
    return (<div key={itemId}>
            <h5>{itemName}</h5>
            <h1>${itemPrice}</h1>
            {currentComponent == "home" && <Link href={{
                pathname: "./Cart",
                query: item,
            }}>
                <a>Add to cart</a>
            </Link>}
        </div>
    )
}
export default ItemCard;
