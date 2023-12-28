
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeader from "../Components/MainHeader";
import Footer from '../Components/Footer';
import GoToTop from "../Components/GoToTop"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:'ChemTech',
  description:'A Division of SimSon Pharma Limited',
  icons:{
      icon:'/next.svg',
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      
      <body className={inter.className}>
        <MainHeader/>    
        {/* for navbar or header we have created 2 header one is TopHeader and the other is BottomHeader and both the componets are called in MainHeader */}
        {children}
        <GoToTop scrollStepInPx="10000px" delayInMs="1000" />
        <Footer/>
        </body>
    </html>
  )
}
