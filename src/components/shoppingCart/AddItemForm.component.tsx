import { Currency } from "@/lib/Currency.enum"
import { useState } from "react"
import { Item } from "./Item.interface";
/**
 * Defines attributes for AddItemForm tag.
 */
interface AddItemFormProps {
    onAdd: (item: Item) => void
}

/**
 * Default value for Item used for useState
 */
const ITEM_DEFAULT: Item = {
    name: "",
    amount: 0,
    amountUnit: "",
    pricePerUnit: 0,
    currency: Currency.EURO
}

/**
 * Writes form to create item. onAdd callback is used to transfer item.
 * 
 * @param param0 
 * @returns 
 */
export function AddItemForm({ onAdd }: AddItemFormProps): JSX.Element {
    const [item, setItem] = useState<Item>(ITEM_DEFAULT);
    
    return <div>
        <input type="text" value={item.name} onChange={(evnt)=>setItem({...item, name: evnt.target.value})} placeholder="Name" />
        <input type="number" value={item.amount} onChange={(evnt)=>setItem({...item, amount: parseInt(evnt.target.value)})} placeholder="Amount" />
        <input type="text" value={item.amountUnit} onChange={(evnt)=>setItem({...item, amountUnit: evnt.target.value})} placeholder="Amount unit" />
        <input type="number" value={item.pricePerUnit} onChange={(evnt)=>setItem({...item, pricePerUnit: parseInt(evnt.target.value)})} placeholder="Price per unit" />
        <select value={item.currency} onChange={(evnt)=>setItem({...item, currency: evnt.target.value === "EUR"?Currency.EURO:Currency.US_DOLLAR})}>
            <option value={Currency.EURO}>Euro</option>
            <option value={Currency.US_DOLLAR}>US Dollar</option>
        </select>
        <button onClick={()=>onAdd(item)}>Add item</button>
    </div>
}