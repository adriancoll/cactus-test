import { UiProvider } from '@/context'
import { FirestoreProvider } from '@/context/firestore'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirestoreProvider>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </FirestoreProvider>
  )
}
