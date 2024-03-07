import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { Inter } from 'next/font/google'
import { ProductsProvider } from '@/context/productsContext'

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
