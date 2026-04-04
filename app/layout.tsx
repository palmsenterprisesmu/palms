import type { Metadata } from 'next'
import { Pacifico, Nunito } from 'next/font/google'
import { LanguageProvider } from '@/lib/LanguageContext'
import './globals.css'

const pacifico = Pacifico({ weight:'400', subsets:['latin'], variable:'--font-pacifico', display:'swap' })
const nunito   = Nunito({ subsets:['latin'], variable:'--font-nunito', display:'swap' })

export const metadata: Metadata = {
  title: 'Palms Mauritius | 100% Mauritius-Made Positive Wear',
  description: 'Good vibes. Island made. 100% Mauritius-made positive wear — T-shirts, caps, hoodies, tote bags and gifts.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable} ${nunito.variable} font-body bg-cream text-navy overflow-x-hidden`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}