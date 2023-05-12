import {v4 as uuid} from 'uuid';

/**
 * Creates a predifened order.
 * 
 * @param bearer - token for auth
 * @returns 
 */
export async function createOrder(bearer: string) {
    const id = uuid();
    return fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'PayPal-Request-Id': id,
            'Authorization': `Bearer ${bearer}`
        },
        body: JSON.stringify({
            "intent": "CAPTURE",
            "purchase_units": [{
                "reference_id": id,
                "amount": {
                    "currency_code": "USD",
                    "value": "100.00"
                }
            }],
            "payment_source": {
                "paypal": {
                    "experience_context": {
                        "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
                        "payment_method_selected": "PAYPAL",
                        "brand_name": "EXAMPLE INC",
                        "locale": "en-US",
                        "landing_page": "LOGIN",
                        //"shipping_preference": "SET_PROVIDED_ADDRESS",
                        "user_action": "PAY_NOW",
                        "return_url": "http://localhost:3000/api/capture",
                        "cancel_url": "http://localhost:3000/cancel"
                    }
                }
            }
        })
    }).then(r => r.json())
}