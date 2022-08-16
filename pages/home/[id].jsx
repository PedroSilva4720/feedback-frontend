import { useRouter } from 'next/router.js'

export default function Home() {
  const router = useRouter()
  const { id } = router.query

  return <p>{router.locale}</p>
}
