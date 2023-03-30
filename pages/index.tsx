import { Layout } from '@/components'
import { CoordPoint } from '@/components/CoordPoint'
import { useFirestore } from '@/hooks/useFirestore'
import Image from 'next/image'

export default function Home() {
  const { points, loading } = useFirestore()

  if (loading) {
    return <p className="text-center text-3xl font-bold">Loading...</p>
  }

  return (
    <Layout>
      <main className="container mx-auto pt-20">
        <div className="rounded-lg relative overflow-hidden">
          {points.map((point) => (
            <CoordPoint key={point.name} point={point} />
          ))}
          <Image
            priority
            width={1250}
            height={873}
            src="/images/base.jpeg"
            alt="Base image"
          />
        </div>
      </main>
    </Layout>
  )
}
