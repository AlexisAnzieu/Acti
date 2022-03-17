import type { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch';

type Params = {
    email: string;
}

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'api-key': process.env.SIB_API_KEY as string
};

export default async function newsletter(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    const { email } = req.query as Params;

    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            listIds: [8],
            updateEnabled: true,
            email
        })
    };

    const result = await fetch('https://api.sendinblue.com/v3/contacts', options)
    if (result.status < 300) {
        return sendReponse(res, { status: 200, data: 'ok' });
    }
    return sendReponse(res, { status: 500, data: 'error' });
}

export const sendReponse = (res: NextApiResponse<any>, result: any) => {
    res.statusCode = result.status;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result.data))
}