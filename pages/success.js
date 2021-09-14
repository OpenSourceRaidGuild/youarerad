import axios from 'axios'
import { useRouter } from 'next/dist/client/router'
import useSWR from 'swr'
import Login from '../components/guildportal/login.js'

const fetcher = (url) => axios.get(url).then((res) => res.data)

const Success = () => {
  const {
    query: { session_id },
  } = useRouter()

  const { data, error } = useSWR(() => '/api/checkout_sessionsguild/${session_id}', fetcher)

  return (
    <div>{error ? <h2>something went wrong</h2> : !data ? <div> loading </div> : <Login />}</div>
  )
}

export default Success
