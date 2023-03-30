import { Layout, LayersWrapper } from '@/components'
import { useFirestore } from '@/hooks/useFirestore'

export default function Home() {
  const { loading } = useFirestore()

  return (
    <>
      <div
        className={`${
          loading ? '' : 'hidden'
        } fade-out bg-black/80 flex items-center justify-center backdrop-blur-lg absolute z-50 inset-0`}
      >
        <p className="text-center text-primary animate-fadeIn text-6xl font-extrabold ">
          Loading...
        </p>
      </div>
      <Layout>
        <main className="container pt-40 h-screen mx-auto">
          <div className="relative">
            <LayersWrapper />
          </div>
        </main>
      </Layout>
    </>
  )
}
