import Navbar from './../../components/Shared/Navbar';
import Footer from './../../components/Shared/Footer';
import ManageProductsTable from './ManageProductsTable';


function ManageProducts() {


  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar/>
      <div className='my-6'>
        <h2 className='text-center text-red-600 text-4xl my-2 font-serif'>Manage Products</h2>
     <p className='text-center text-red-500 font-mono text-2xl'>Your Can Update Or Delect Any Product</p>
      </div>
      <ManageProductsTable/>
      <Footer/>
    </div>
  )
}

export default ManageProducts
