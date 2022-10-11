import styles from "./styles/Cart.module.scss";
import React, { useEffect } from 'react';
import { useContext } from 'react';
import ItemCard from '../Components/ItemCard';
import Summary from '../Components/Summary';
import { AppContext } from "../Context/AppContext"
import { useRouter } from "next/router";

function Cart() {
    const [cartItems, setCartItems] = useContext(AppContext);
    const route = useRouter();
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems"));
        setCartItems(items);
    }, [])
    function routeToHome() {
        route.push("/");
    }

    return (
        <div>
            <button className={`${styles.homeButton} ${"button"}`} onClick={routeToHome}>Home</button>
            <div className={styles.container}>
                <div className={styles.cartItems}>
                    {cartItems?.map((item) => <div key={item.itemId}>
                        <ItemCard
                            item={item} currentComponent="cart" />
                    </div>)}
                </div>
                <Summary cartItems={cartItems} />
            </div>
        </div>
    )
}

export default React.memo(Cart);