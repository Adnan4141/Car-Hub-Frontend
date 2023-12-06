import './App.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from './pages/Home/Home';
import ContactUs from './pages/ContactUS/ContactUs';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import AddProduct from './pages/AddProduct/AddProduct';
import AddReview from './pages/AddReview/AddReview';
import VehicleDetails from './pages/ProductDetails/VehicleDetails';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: function () {
        return fetch(`http://localhost:3000/all-vehicles`);
      }

    },

    {
      path: "/contact-us",
      element: <ContactUs />

    },
    {
      path: "/manage-products",
      element: <ManageProducts />,
      loader: function () {
        return fetch(`http://localhost:3000/all-vehicles`);
      }

    },
    {
      path: "/add-product",
      element: <AddProduct />

    },
    {
      path: "/add-review",
      element: <AddReview />

    },

    {
      path:"/vehicle/:id",
      element: <VehicleDetails/>,
      loader:function({params}){
        return fetch(`http://localhost:3000/vehicle/${params.id}`);
      }
    },

    {
      path:"/update-vehicle/:id",
      element:<UpdateProduct/>,
      loader:function({params}){
        return fetch(`http://localhost:3000/vehicle/${params.id}`);
      }
    }

  ])

  return (
    <RouterProvider router={router} />

  )
}

export default App
