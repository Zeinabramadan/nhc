import { Inter } from 'next/font/google'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { ProductsProvider } from '@/context/productsContext'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NHC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          <ProductsProvider>
            <main className={inter.className} style={inter.style}>
              {children}
            </main>
          </ProductsProvider>
        <Footer/>
      </body>
    </html>
  )
}
