import { CreateOrderActions, CreateOrderData } from "@paypal/paypal-js";

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
                amount: {
                    value: "1.99",
                },
            },
        ],
    });
}