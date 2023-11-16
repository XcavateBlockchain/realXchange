import Navbar from './navbar'
import Footer from './footer'
import { IChildren } from '../types'
 
export default function Layout({ children }: IChildren) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer />
    </>
  )
}