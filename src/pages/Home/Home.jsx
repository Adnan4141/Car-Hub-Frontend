import CarouselItem from "../../components/Carousel/CarouselItem"
import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"
import ContactForm from "../ContactUS/ContactForm"
import AboutUs from "./AboutUs"
import HomeBanner from "./HomeBanner"
import OurProducts from "./OurProducts"
import TeammateView from "../Teammate/TeammateView"






function Home() {
  return (
    <div className="md:max-w-7xl md:mx-auto">
      <Navbar />
      <CarouselItem />
      <div className="divider divider-end md:my-[50px]"></div>
      <HomeBanner />
      <div className="divider divider-end md:my-[50px]"></div>
      <OurProducts />
      <div className="divider divider-end md:my-[50px]"></div>
      <AboutUs />
      <div className="divider divider-end md:my-[50px]"></div>
      <TeammateView />
      <div className="divider divider-end md:my-[50px]"></div>
      <ContactForm />
      <div className="divider divider-end md:my-[50px]"></div>
      <Footer />
    </div>
  )
}

export default Home
