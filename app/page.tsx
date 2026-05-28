import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Products from '@/components/sections/Products'
import Advantages from '@/components/sections/Advantages'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/ui/CustomCursor'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="relative min-h-screen overflow-hidden">
        <Hero />
        <About />
        <Products />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
