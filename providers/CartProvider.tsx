import {  createContext ,PropsWithChildren,useContext, useState} from "react";
import { CartItem, Product } from "@/types/types";
type cartType={
    items:CartItem[],
    addItem:(product:Product,size:CartItem['size'])=> void
}
 const CartContext = createContext<cartType>({items:[],addItem:()=>{}})

const CartProvider=({children}:PropsWithChildren)=>{
 
    const [items,setItems]=useState<CartItem[]>([]);
    const addItem = (product:Product,size:CartItem['size'])=>{
        console.log(product)
    }



    return (
        <CartContext.Provider value={{items,addItem}}>
        {children}
        </CartContext.Provider>
    )
}
export default CartProvider;

export const useCart=()=> useContext(CartContext)