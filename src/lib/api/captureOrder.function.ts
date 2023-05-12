import {v4 as uuid} from 'uuid';

/**
 * Captures an order
 * 
 * @param {string} captureId - token given from return url
 * @param bearer - token for authentication
 * @returns 
 */
export async function captureOrder(captureId:string, bearer: string) {
    console.log("captureId", captureId)
    const id = uuid();
    return fetch(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${captureId}/capture`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'PayPal-Request-Id': id,
            'Authorization': `Bearer ${bearer}`
        }
    }).then(r => r.json())
}