import { base64Encoding } from "../base64.function";
import { PayPalToken } from "./PayPalToken.interface";

const CLIENT_ID: string = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";
const CLIENT_SECRET: string = process.env.PAYPAL_CLIENT_SECRET || "";
const BASIC_AUTH_ENCODING: string = base64Encoding(`${CLIENT_ID}:${CLIENT_SECRET}`);


/**
 * Fetches token
 * @returns {PayPalToken}
 */
export async function getToken(): Promise<PayPalToken> {
    return await fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", {
        method: "POST",
        headers: {
            "Authorization": `Basic ${BASIC_AUTH_ENCODING}`,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials"
    }).then(r => r.json())
}