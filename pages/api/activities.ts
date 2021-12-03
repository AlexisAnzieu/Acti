// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { supabase } from '../../helpers/supabaseClient';
import { definitions } from '../../type/supabase';

type params = {
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
	const { query, id, season, locale, fields = '*' } = req.query as params;
	let result;
	let supabaseBase = supabase.from<definitions["activity"]>("activity").select(fields).order('created_at', { ascending: false });
	if (id) {
		result = await supabaseBase.eq('id', id);
	} else if (query || season) {
		if (query) {
			// supabaseBase.ilike(`name->>${locale}` as 'name', `%${query}%`);
			supabaseBase.ilike("name", `%${query}%`)
		}
		if (season) {
			// supabaseBase.contains("seasons", season)
			supabaseBase.like("seasons", `%${season}%`)
		}
		result = await supabaseBase;
	} else {
		result = await supabaseBase;
	}

	const cleaned = result?.data?.map((item: any) => {
		return {
			...item,
			...(item.seasons && { seasons: JSON.parse(item.seasons) }),
			...(item.name && { name: JSON.parse(JSON.parse(item.name)) }),
			...(item.social_media && { social_media: JSON.parse(item.social_media) }),
			...(item.review && { review: JSON.parse(item.review) }),
			...(item.description && { description: JSON.parse(item.description) }),
			...(item.location && { location: JSON.parse(item.location) })
		}

	});

	res.statusCode = result.status;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(cleaned))
}


