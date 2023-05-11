// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PayPalToken } from '@/lib/api/PayPalToken.interface';
import { getToken } from '@/lib/api/getToken.function';
import { createOrder } from '@/lib/api/createOrder.function';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const token:PayPalToken = await getToken();
  const orderResponse = await createOrder(token.access_token);
  console.log(orderResponse);
  res.json({ a: 1 });
}
