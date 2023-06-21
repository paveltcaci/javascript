import React, {useContext, useState} from 'react';
import {ShopContext} from "src/context/shop-context.jsx";


// eslint-disable-next-line react-hooks/rules-of-hooks
const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
const totalAmount = getTotalCartAmount();
const DeliveryCalculator = () => {
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleInputChange = (e) => {
        const price = parseFloat(e.target.value);
        setDeliveryPrice(price);
        setTotalPrice(calculateTotalPrice(price));
    };

    const calculateTotalPrice = (deliveryPrice) => {

        return deliveryPrice + totalAmount ;
    };


}
export default DeliveryCalculator;
