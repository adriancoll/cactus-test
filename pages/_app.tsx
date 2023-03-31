import type { AppProps } from 'next/app'
import { UiProvider, FirestoreProvider } from '@/lib/context'

import '@/lib/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirestoreProvider>
      <UiProvider>
        <Component {...pageProps} />
      </UiProvider>
    </FirestoreProvider>
  )
}
