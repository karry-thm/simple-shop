import { createOrder } from "@/lib/createOrder.function";
import { onApprove } from "@/lib/onApprove.function";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

/**
 * Just a simple Page on root with PayPalButtons.
 * 
 * @returns JSX.Element
 */
export default function Home():JSX.Element {
  console.log("PAYPAL_CLIENT_ID", process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "FEHLER!")
  return <div>
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "" }}>
      <PayPalButtons style={{ layout: "horizontal" }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  </div>
}
