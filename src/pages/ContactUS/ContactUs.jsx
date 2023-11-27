import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"
import ContactForm from "./ContactForm"


function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="text-center text-4xl p-3"> 
        <h2 className="text-orange-600">Contact</h2>
        <p className="text-yellow-800">Leave Your Meassage</p>

      </div>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default ContactUs
