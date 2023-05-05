import { Currency } from "@/lib/Currency.enum";
import { createOrder } from "@/lib/createOrder.function";
import { onApprove } from "@/lib/onApprove.function";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

/**
 * Just a simple Page on root with PayPalButtons.
 * 
 * @returns JSX.Element
 */
export default function Home(): JSX.Element {
  console.log("PAYPAL_CLIENT_ID", process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "FEHLER!")
  const [num, setNum] = useState<number>(0);
  return <div>
    <PayPalScriptProvider options={{
      "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
      currency: Currency.EURO
    }}>
      <PayPalButtons style={{ layout: "horizontal" }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  </div>
}
