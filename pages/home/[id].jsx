import { useRouter } from 'next/router.js'

export default function Home() {
  const router = useRouter()
  const { id, a } = router.query

  return (
    <p>
      {id} --- {a}
    </p>
  )
}
