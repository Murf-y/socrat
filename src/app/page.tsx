import { Metadata } from 'next'
import { Source_Serif_4 } from 'next/font/google'
import HomePage from './home'

const source_serif = Source_Serif_4({ weight: ['400', '600'], display: 'swap', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Socrat',
  description: 'Philosophical Harkness discussion platform',
}

export default async function Page() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-background text-text ${source_serif.className}`}
    >
      <HomePage />
    </main>
  )
}
