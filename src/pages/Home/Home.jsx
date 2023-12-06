import CarouselItem from "../../components/Carousel/CarouselItem"
import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"
import ContactForm from "../ContactUS/ContactForm"
import AboutUs from "./AboutUs"
import HomeBanner from "./HomeBanner"
import OurVehicles from "./OurVehicles"




function Home() {
  return (
    <div className="md:max-w-7xl md:mx-auto">
       <Navbar/>
       <HomeBanner/>
       <CarouselItem/>
       <OurVehicles/>
      <AboutUs/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home
   