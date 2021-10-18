import { supabase } from '../../components/utils/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function sendContact(req: NextApiRequest, res: NextApiResponse) {
  const { email, department, name, message } = req.body
  let { data, error } = await supabase
    .from('contactrad')
    .insert({ email: email, department: department, name: name, message: message })
  if (error) return res.status(401).json({ error: error.message })
  return res.status(200).json({ user: data })
}