import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeLogos from './components/MarqueeLogos';
import PricingToggle from './components/PricingToggle';
import FilterableGallery from './components/FilterableGallery';
import SignupForm from './components/SignupForm';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>
    <Header />
    <Hero />
    <MarqueeLogos />
    <PricingToggle />
    <FeaturesSection />
    <FilterableGallery />
    <SignupForm />
    <Footer />
    </>
  )
}

export default App
