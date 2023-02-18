import { Poppins } from '@next/font/google'
import clsx from 'clsx'
import './globals.scss'
import { DEFAULT_LOCALE } from '../next.config.mjs'

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-poppins',
  fallback: ['system-ui', 'arial', 'helvetica', 'sans-serif']
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang={DEFAULT_LOCALE} className={clsx(poppins.className)}>
      <head />
      <body>
        <header>Ilia Orlov</header>
        {children}
        <footer />
      </body>
    </html>
  )
}

export default RootLayout
