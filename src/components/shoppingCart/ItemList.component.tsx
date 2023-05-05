import { ItemRow } from "./ItemRow.component";
import { Cart } from "./ShoppingCart.component";

/**
 * Defines items to be attribute for ItemList tag
 */
interface ItemListProps {
    items: Cart;
}

/**
 * Writes given items to table
 * 
 * @param {ItemListProps} param0 
 * @returns {JSX.Element}
 */
export function ItemList({ items }: ItemListProps): JSX.Element {
    return <table>
        <tbody>
            {items.map((item, index) => <ItemRow key={index} item={item} />)}
        </tbody>
    </table>
}