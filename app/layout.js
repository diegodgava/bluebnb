import Header from '@/components/Header'
import './globals.css'
import Banner from '@/components/Banner'
import Home from './page'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'blueBnB',
  description: 'Criado por Diego Gava',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        
        <Banner/>

        <Home/>

        <Footer/>
        </body>
    </html>
  )
}


