// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../helpers/supabaseClient';
import { definitions } from '../../type/supabase';

type params = {
	query: string;
	id: string;
	season: string;
}

export default async function (
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	const { query, id, season } = req.query as params;
	let result;
	let supabaseBase = supabase.from<definitions["activity"]>("activity").select("*");
	if (id) {
		result = await supabaseBase.eq('id', id).single();
	} else if (query || season) {
		if (query) {
			supabaseBase.ilike("name", `%${query}%`)
		}
		if (season) {
			supabaseBase.contains("seasons", [season])
		}
		result = await supabaseBase;
	} else {
		result = await supabaseBase;
	}
	res.statusCode = result.status;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(result.data))
}


