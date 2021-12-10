// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { supabase } from '../../helpers/supabaseClient';
import { definitions } from '../../type/supabase';

type Params = {
	query: string;
	id: string;
	season: string;
	locale: 'en' | 'fr',
	fields: string;
}

export default async function (
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	const { query, id, season, locale, fields = '*' } = req.query as Params;
	const supabaseBase = supabase.from<definitions["activity"]>("activity").select(fields);

	let result;
	if (id) {
		result = await singleActivity(supabaseBase, { id });
		return sendReponse(res, result);
	}

	if (query || season) {
		result = await filterActivities(supabaseBase, { query, season, locale });
	} else {
		result = await supabaseBase;
	}

	if (fields !== '*') {
		result.data = result.data?.filter((activity: definitions["activity"]) => {
			return activity.picture_url &&
				activity.name &&
				activity.description &&
				activity.location &&
				activity.seasons &&
				activity.website
		})
	}
	return sendReponse(res, result);
}


const singleActivity = async (supabaseBase: any, { id }: { id: Params['id'] }) => supabaseBase.eq('id', id).single();

const filterActivities = async (
	supabaseBase: any, { query, season, locale }: {
		query: Params['query'],
		season: Params['season'],
		locale: Params['locale']
	}) => {
	if (query) {
		supabaseBase.ilike(`name->>${locale}` as 'name', `%${query}%`);
	}
	if (season) {
		supabaseBase.contains("seasons", [season])
	}
	return supabaseBase;
};


const sendReponse = (res: NextApiResponse<any>, result: any) => {
	res.statusCode = result.status;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(result.data))
}