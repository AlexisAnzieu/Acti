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
	slug: string,
	children_accessible: string,
}

export default async function activities(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	const { query, id, season, locale, fields = '*', price, carbon_footprint, slug, children_accessible } = req.query as Params;
	const supabaseBase = supabase.from<definitions["activity"]>("activity").select(fields).order(`name->>${locale}` as 'name');

	let result;
	if (id) {
		result = await singleActivityById(supabaseBase, { id });
		return sendReponse(res, result);
	}
	if (slug) {
		result = await singleActivityBySlug(supabaseBase, { slug });
		return sendReponse(res, result);
	}
	if (query || season || price || carbon_footprint || children_accessible) {
		result = await filterActivities(supabaseBase, { query, season, locale, price, carbon_footprint, children_accessible });
	} else {
		result = await supabaseBase;
	}

	if (fields !== 'id' && fields !== 'slug') {
		result.data = result.data?.filter((activity: definitions["activity"]) => {
			return activity.picture_url &&
				activity.location &&
				activity.website
		})
	}
	return sendReponse(res, result);
}


const singleActivityById = async (supabaseBase: any, { id }: { id: Params['id'] }) => supabaseBase.eq('id', id).single();
const singleActivityBySlug = async (supabaseBase: any, { slug }: { slug: Params['slug'] }) => supabaseBase.eq('slug', slug).single();

const filterActivities = async (
	supabaseBase: any, { query, season, locale, price, carbon_footprint, children_accessible }: Partial<Params>) => {
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
		supabaseBase.gte("carbon_footprint", carbon_footprint)
	}
	if (children_accessible) {
		supabaseBase.eq("children_accessible", children_accessible)
	}
	return supabaseBase;
};


const sendReponse = (res: NextApiResponse<any>, result: any) => {
	res.statusCode = result.status;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(result.data))
}