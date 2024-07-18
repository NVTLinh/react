import React, { createContext, useState } from "react";

export const CardContext = createContext();

export default function CardContextProvider({ children }) {
    // logic
    const [cardProduct, setCardProduct] = useState([]);

    const addProductToCard = (product) => {
        // thêm sp vào giỏ
        setCardProduct([...cardProduct, product])
        alert('Thêm vào giỏ hàng thành công');
    }

    const removeProductToCard = (product) => {
        // xóa sp vào giỏ
        const itemLeft = cardProduct.filter(
            (item) => {
                return item.id !== product.id
            }
        )
        setCardProduct(itemLeft);
    }

    // view
    return <CardContext.Provider value={{cardProduct, addProductToCard, removeProductToCard}}>
        {children}
    </CardContext.Provider>

}