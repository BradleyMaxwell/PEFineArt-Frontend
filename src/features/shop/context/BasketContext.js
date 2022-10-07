import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import axios from "axios";

const BasketContext = createContext({})

export function useBasket () { // hook for using the basket
    return useContext(BasketContext)
}

export function BasketProvider({ children }) {

    // an item in the basket will be an object made up of { item, printSize (if print), framing (if has framing), quantity }

    const [basket, setBasket] = useLocalStorage('shopping-basket', []) // state where the basket items will be stored in local storage

    function increaseQuantity (item) {
        setBasket(currentBasket => {
            if (getProductType(item) === 'Print') {
                if (currentBasket.find(basketItem => (basketItem.id === item.id) && (basketItem.print.size === item.print.size) && (basketItem.framing === item.framing))) { // if exact print item is already in basket
                    return currentBasket.map(basketItem => {
                        if ((basketItem.id === item.id) && (basketItem.print.size === item.print.size) && (basketItem.framing === item.framing)) {
                            return { ...basketItem, quantity: basketItem.quantity + item.quantity }
                        } else {
                            return basketItem
                        }
                    })
                } else {
                    return [ ...currentBasket, item]
                }

            } else {
                if (currentBasket.find(basketItem => basketItem.id === item.id) == null) { // add the product to the basket if it is not there
                    return [ ...currentBasket, { ...item, quantity: 1 }]
                } else {
                    return currentBasket
                }
            }
        })
    }

    function decreaseQuantity (item) {
        setBasket(currentBasket => {
            if (currentBasket.find(basketItem =>
                basketItem.id === item.id 
                && basketItem.print === item.print
                && basketItem.framing === item.framing
            )?.quantity === 1) { // remove item from basket if quantity is 1
                return currentBasket.filter(basketItem => (
                    basketItem.id === item.id 
                    && basketItem.print === item.print
                    && basketItem.framing === item.framing) === false)
            } else { // find matching item in current basket and decrease quantity
                return currentBasket.map(basketItem => {
                    if (basketItem.id === item.id && basketItem.print === item.print && basketItem.framing === item.framing) {
                        return { ...basketItem, quantity: basketItem.quantity - 1 }
                    } else {
                        return basketItem
                    }
                })
            }
        })
    }

    function removeFromBasket (item) {
        setBasket(currentBasket => {
            return currentBasket.filter(basketItem => ( // set the basket to the same basket but without the item
                basketItem.id === item.id 
                && basketItem.print === item.print
                && basketItem.framing === item.framing) === false)
        })
    }
    
    function getTotal () {
        let total = 0
        for (let i = 0; i < basket.length; i++) {
            const currentItem = basket[i]
            let price = currentItem.print.unitPrice
            if (currentItem.print.framingPrice && currentItem.framing !== 'None') { // only include framing price if framing is available and selected
                price += currentItem.print.framingPrice
            }
            total += price * currentItem.quantity
        }
        return total
    }

    function emptyBasket () {
        setBasket([])
    }

    function getProductType (item) {
        if (item.print.size) { // only prints have print size
            return 'Print'
        }
        return 'Original'
    }

    return <BasketContext.Provider value={{ basket, getTotal, increaseQuantity, decreaseQuantity, removeFromBasket, emptyBasket }}>
        {children}
    </BasketContext.Provider>
}