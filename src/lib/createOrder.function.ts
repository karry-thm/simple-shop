import { CreateOrderActions, CreateOrderData } from "@paypal/paypal-js";
import { Currency } from "./Currency.enum";

/**
 * Creates a PayPal order with amount of 1.99 in default currency.
 * 
 * @param {CreateOrderData} data 
 * @param {CreateOrderActions} actions 
 * @returns {Promise<string>}
 */
export function createOrder(_data: CreateOrderData, actions: CreateOrderActions): Promise<string> {
    return actions.order.create({
        purchase_units: [
            {
                items: [{
                    name: "Kopfkissen",
                    quantity: "1",
                    unit_amount: {
                        currency_code: Currency.EURO,
                        value: "1.99"
                    }
                },{
                    name: "Decke",
                    quantity: "1",
                    unit_amount: {
                        currency_code: Currency.EURO,
                        value: "2.99"
                    }
                }],
                amount: {
                    currency_code: Currency.EURO,
                    value: "4.98",
                    breakdown: {
                        item_total: {
                            currency_code: Currency.EURO,
                            value: "4.98"
                        }
                    }
                },
            },
        ],
    });
}