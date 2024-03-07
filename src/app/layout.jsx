import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import './globals.css'
import { ProductsProvider } from '@/context/productsContext'

export const metadata = {
  title: 'NHC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
          <ProductsProvider>
            <main>
              {children}
            </main>
          </ProductsProvider>
        <Footer/>
      </body>
    </html>
  )
}
