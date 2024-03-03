import '@/styles/globals.css'
import { Source_Serif_4 } from 'next/font/google'

const source_serif = Source_Serif_4({ weight: ['400', '600'], display: 'swap', subsets: ['latin'] })

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main
          className={`min-h-dvh w-full bg-background text-text flex flex-col items-center ${source_serif.className}`}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
