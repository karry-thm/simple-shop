/**
 * PayPal default token
 */
export interface PayPalToken {
    access_token: string,
    token_type: string,
    app_id: string,
    expires_in: number,
    nonce: string
}