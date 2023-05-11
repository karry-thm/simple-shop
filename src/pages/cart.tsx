import { Cart, ShoppingCart } from "@/components/shoppingCart/ShoppingCart.component";
import { Currency } from "@/lib/Currency.enum";
import { onApprove } from "@/lib/onApprove.function";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";

export default function Cart(): JSX.Element {
    const [cart, setCart] = useState<Cart>([]);

    return <>
        <ShoppingCart onChange={setCart} cart={cart} />
        <PayPalScriptProvider options={{
            "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
            currency: Currency.EURO
        }}>
            <PayPalButtons style={{ layout: "horizontal" }}
                createOrder={(_data, actions) => {
                    // TODO: Make this object be build with cart items including every single item
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: Currency.EURO,
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={onApprove}
            />
        </PayPalScriptProvider>
    </>
}