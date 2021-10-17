import { supabase } from '../../components/utils/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import { TUser } from 'types/api-schema'

export default async function sendVolunteer(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, volunteertype, experience, why } = req.body
  const { data, error } = await supabase.from<TUser>('volunteercorps').insert({
    email,
    volunteertype,
    name,
    why,
    experience,
  })
  if (error) return res.status(401).json({ error: error.message })
  return res.status(200).json({ user: data })
}
