// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../helpers/supabaseClient';
import { definitions } from '../../type/supabase';

type params = {
  query: string;
  id: string;
}

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { query, id } = req.query as params;
  let result;

  console.log(query, id)

  if (id) {
    result = await supabase.from<definitions["activity"]>("activity").select("*").eq('id', id).single();
  } else if (query) {
    result = await supabase
      .from<definitions["activity"]>("activity")
      .select("*")
      .ilike("name", `%${query}%`);
  } else {
    result = await supabase.from<definitions["activity"]>("activity").select("*");
  }
  res.statusCode = result.status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result.data))
}


