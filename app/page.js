import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrendingPlants from './components/TrendingPlants'
import TopSelling from './components/TopSelling'
import CustomerReviews from './components/CustomerReviews'
import O2Section from './components/O2Section'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrendingPlants />
      <TopSelling />
      <CustomerReviews />
      <O2Section />
      <Footer />
    </main>
  )
}
