import { supabase } from '../../components/utils/supabaseClient'

export default async function sendContact(req, res) {
  const { email, department, name, message } = req.body
  let { user, error } = await supabase
    .from('contactrad')
    .insert({ email: email, department: department, name: name, message: message })
  if (error) return res.status(401).json({ error: error.message })
  return res.status(200).json({ user: user })
}
