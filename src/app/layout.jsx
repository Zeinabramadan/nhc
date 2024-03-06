import Navbar from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import { ProductsProvider } from '@/context/productsContext'


export const metadata = {
  title: 'NHC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main>
            <ProductsProvider>
              {children}
            </ProductsProvider>
          </main>
        <Footer/>
      </body>
    </html>
  )
}
