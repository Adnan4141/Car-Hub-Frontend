import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"
import AddProductForm from "./AddProductForm"

function AddProduct() {
  return (
    <div className="max-w-7xl mx-auto">
     <Navbar/>
    <AddProductForm/>
     <Footer/>
    </div>
  )
}

export default AddProduct
