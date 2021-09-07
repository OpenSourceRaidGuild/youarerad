import { supabase } from '../../components/utils/supabaseClient'

export default async function sendVolunteer(req, res) {
  const { name, email, volunteertype, experience, why } = req.body
  let { user, error } = await supabase.from('volunteercorps').insert({
    email: email,
    volunteertype: volunteertype,
    name: name,
    why: why,
    experience: experience,
  })
  if (error) return res.status(401).json({ error: error.message })
  return res.status(200).json({ user: user })
}
