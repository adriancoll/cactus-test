import { Layout, LayersWrapper } from '@/components'
import { useFirestore } from '@/hooks/useFirestore'

export default function Home() {
  const { loading } = useFirestore()

  if (loading) {
    return (
      <div className="h-screen bg-primary flex items-center justify-center">
        <p className="text-center animate-fadeIn text-3xl font-bold text-white">Loading...</p>
      </div>
    )
  }

  return (
    <Layout>
      <main className="container pt-40 h-screen mx-auto">
        <div className="relative">
          <LayersWrapper />
        </div>
      </main>
    </Layout>
  )
}
