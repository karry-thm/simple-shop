import { Item } from "./Item.interface"

/**
 * Defines attributes for ItemRow tag
 */
interface ItemRowProp {
    item: Item
}

/**
 * Makes <tr> Tag of given item.
 * 
 * @param {ItemRowProp} props 
 * @returns {JSX.Element}
 */
export function ItemRow(props: ItemRowProp): JSX.Element {
    return <tr>
        <td>{props.item.name}</td>
        <td>{props.item.amount}</td>
        <td>{props.item.amountUnit}</td>
        <td>{props.item.pricePerUnit} {props.item.currency}</td>
    </tr>
}