import { useEffect, useState } from 'react'
import Login from '../components/guildportal/login.js'
import Membersession from '../components/utils/membersession.js'
import { supabase } from '../components/utils/supabaseClient.js'

export default function Member() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div>{!session ? <Login /> : <Membersession key={session.user.id} session={session} />} </div>
  )
}
