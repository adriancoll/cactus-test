import { Layout, LayersWrapper } from '@/components'
import { CoordPoint } from '@/components/CoordPoint'
import { useFirestore } from '@/hooks/useFirestore'
import { useUI } from '@/hooks/useUI'

export default function Home() {
  const { layers } = useUI()
  const { points, loading } = useFirestore()

  if (loading) {
    return (
      <div className="h-screen bg-primary flex items-center justify-center">
        <p className="text-center text-3xl font-bold text-white">Loading...</p>
      </div>
    )
  }

  return (
    <Layout>
      <main className="container mx-auto pt-20">
        <div className="relative">
          {points.map((point) => (
            <CoordPoint key={point.name} point={point} />
          ))}
          <LayersWrapper />
        </div>
      </main>
    </Layout>
  )
}
