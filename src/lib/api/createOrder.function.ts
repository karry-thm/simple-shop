/**
 * Creates a predifened order.
 * 
 * @param bearer - token for auth
 * @returns 
 */
export async function createOrder(bearer: string) {
    return fetch('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'PayPal-Request-Id': '7b92603e-77ed-4896-8e78-5dea2050476a',
            'Authorization': `Bearer ${bearer}`
        },
        body: JSON.stringify({
            "intent": "CAPTURE",
            "purchase_units": [{
                "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b",
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