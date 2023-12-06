import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"
import ContactForm from "./ContactForm"


function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default ContactUs
