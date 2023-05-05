import { Currency } from "@/lib/Currency.enum"

/**
 * Definition of an Item
 */
export interface Item {
    name: string,
    amount: number
    amountUnit: string
    pricePerUnit: number
    currency: Currency
}