// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { supabase } from '../../helpers/supabaseClient';
import { definitions } from '../../type/supabase';

type Params = {
	id: string;
	query: string;
	price: string;
	season: string;
	fields: string;
	carbon_footprint: string;
	locale: 'en' | 'fr',
}

export default async function (
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	const { query, id, season, locale, fields = '*', price, carbon_footprint } = req.query as Params;
	const supabaseBase = supabase.from<definitions["activity"]>("activity").select(fields).order(`name->>${locale}` as 'name');

	let result;
	if (id) {
		result = await singleActivity(supabaseBase, { id });
		return sendReponse(res, result);
	}

	if (query || season || price || carbon_footprint) {
		result = await filterActivities(supabaseBase, { query, season, locale, price, carbon_footprint });
	} else {
		result = await supabaseBase;
	}

	if (fields !== 'id') {
		result.data = result.data?.filter((activity: definitions["activity"]) => {
			return activity.picture_url &&
				activity.location &&
				activity.website
		})
	}
	return sendReponse(res, result);
}


const singleActivity = async (supabaseBase: any, { id }: { id: Params['id'] }) => supabaseBase.eq('id', id).single();

const filterActivities = async (
	supabaseBase: any, { query, season, locale, price, carbon_footprint }: Partial<Params>) => {
	if (query) {
		supabaseBase.ilike(`name->>${locale}` as 'name', `%${query}%`);
	}
	if (season) {
		supabaseBase.contains("seasons", [season])
	}
	if (price) {
		const [min, max] = price.split(',');
		supabaseBase.gte("price", min)
		supabaseBase.lte("price", max)
	}
	if (carbon_footprint) {
		supabaseBase.lte("carbon_footprint", carbon_footprint)
	}
	return supabaseBase;
};


const sendReponse = (res: NextApiResponse<any>, result: any) => {
	res.statusCode = result.status;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(result.data))
}