import { Currency } from "@/lib/Currency.enum";
import { useState } from "react";
import { AddItemForm } from "./AddItemForm.component";
import { ItemList } from "./ItemList.component";
import { Item } from "./Item.interface";

/**
 * Definition of Cart to be an array of Item
 */
export type Cart = Item[];

interface ShoppingCartProps {
    cart: Cart,
    onChange: (cart: Cart) => void
}

/**
 * Tag to Manage items (create and show)
 * 
 * @returns {JSX.Element}
 */
export function ShoppingCart({ cart, onChange }: ShoppingCartProps): JSX.Element {
    return <div>
        <ItemList items={cart} />
        <AddItemForm onAdd={(item) => onChange([...cart, item])} />
    </div>
}



