import styles from "./styles/Cart.module.scss";
import React from 'react';
import { useContext } from 'react';
import Summary from '../Components/Summary';
import { AppContext } from "../Context/AppContext"
import { useRouter } from "next/router";
import DisplayItems from "../Components/DisplayItems";

function Cart() {
    const [cartItems] = useContext(AppContext);
    const route = useRouter();
    function routeToHome() {
        route.push("/");
    }
    return (
        <div>
            <button className={`${styles.homeButton} button`} onClick={routeToHome}>Home</button>
            <div className={styles.container}>
                <div className={styles.cartItems}>
                    <DisplayItems displayItems={cartItems} currentComponent="cart"/>
                </div>
                <Summary cartItems={cartItems} />
            </div>
        </div>
    )
}

export default React.memo(Cart);