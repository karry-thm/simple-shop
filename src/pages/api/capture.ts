// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { captureOrder } from '@/lib/api/captureOrder.function';
import { getToken } from '@/lib/api/getToken.function';
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { token } = req.query;

    if (typeof token === "string") {
        const { access_token } = await getToken();
        const capture = await captureOrder(token, access_token);
        console.log(capture);
        res.status(200).json({a:1});
    } else {
        res.status(400).json({ err: 'Token not type of error' })
    }
}
