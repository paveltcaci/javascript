import React,{useContext, useState} from 'react'
import "./cart.css"
import {PRODUCTS} from "../../products";
import {ShopContext} from "../../context/shop-context";
import {CartItem} from "./cart-item";
import { useNavigate } from "react-router-dom";


export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const [shippingCost, setShippingCost] = useState(0)
    const totalAmount = getTotalCartAmount();
    const totalAmount1 = getTotalCartAmount() + shippingCost;
    const navigate = useNavigate()

    const handleShippingCostChange = (event) => {
        const cost = Number(event.target.value);
        setShippingCost(cost);
    };

    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />;
                    }
                })}
            </div>

            {totalAmount > 0 ? (
                <div className="checkout">
                        <p>Subtotal: ${totalAmount}</p>

                        <input
                            type="number"
                            placeholder="Shipping Cost"
                            value={shippingCost}
                            onChange={handleShippingCostChange}
                        />
                        <p>Total: ${totalAmount1}</p>

                    <button onClick={() => navigate("/")}> Continue Shopping </button>
                    <button
                        onClick={() => {
                            checkout();
                            navigate("/checkout");
                        }}
                    >
                        {" "}
                        Checkout{" "}
                    </button>
                </div>
            ) : (
                <h1> Your Shopping Cart is Empty</h1>
            )}
        </div>
    );
};
