import Navbar from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'


export const metadata = {
  title: 'NHC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
          <main>
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  )
}
