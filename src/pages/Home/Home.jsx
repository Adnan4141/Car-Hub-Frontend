import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"
import ContactUs from "../ContactUS/ContactUs"
import AboutUs from "./AboutUs"
import HomeBanner from "./HomeBanner"
import OurVehicles from "./OurVehicles"


function Home() {
  return (
    <div className="md:max-w-7xl md:mx-auto">
       <Navbar/>
       <HomeBanner/>
       <OurVehicles/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
   