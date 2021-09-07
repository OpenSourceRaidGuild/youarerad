import { supabase } from '../../components/utils/supabaseClient'

export default async function sendVolunteer(req, res) {
  const { name, email, partnertype, company, message } = req.body
  let { user, error } = await supabase.from('partnership').insert({
    email: email,
    partnertype: partnertype,
    name: name,
    company: company,
    message: message,
  })
  if (error) return res.status(401).json({ error: error.message })
  return res.status(200).json({ user: user })
}
