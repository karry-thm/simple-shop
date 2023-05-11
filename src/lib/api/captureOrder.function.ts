/**
 * Captures an order
 * 
 * @param {string} captureId - token given from return url
 * @param bearer - token for authentication
 * @returns 
 */
export async function captureOrder(captureId:string, bearer: string) {
    console.log("captureId", captureId)
    return fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${captureId}/capture`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'PayPal-Request-Id': '7b92603e-77ed-4896-8e78-5dea2050476a',
            'Authorization': `Bearer ${bearer}`
        }
    }).then(r => r.json())
}