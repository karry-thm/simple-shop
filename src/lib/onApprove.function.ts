import { OnApproveActions } from "@paypal/paypal-js";
import { OnApproveData } from "@paypal/paypal-js";

/**
 * Implementation for onApprove event of PayPal. On success this function writes a message including payers name to the console
 * 
 * @param {OnApproveData} data 
 * @param {OnApproveActions} actions 
 * @returns {Promise<void>}
 */
export async function onApprove(_data: OnApproveData, actions: OnApproveActions): Promise<void> {
  return actions.order?.capture().then((details) => {
    const name = details.payer?.name?.given_name;
    console.log(`Transaction completed by ${name}`);
  });
}