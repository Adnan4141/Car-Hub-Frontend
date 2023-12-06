import Navbar from '../../components/Shared/Navbar'
import Footer from '../../components/Shared/Footer'
import { useLoaderData, useNavigate} from 'react-router-dom'


function UpdateProduct() {
    const vehicle = useLoaderData();
   const Navigate=useNavigate();

    const handleUpdateForm = (e) => {
        e.preventDefault();
        const make = e.target.make.value;
        const model = e.target.model.value;
        const rent = e.target.rent.value;
        const image = e.target.image.value;
        const description = e.target.description.value;

        const UpdateVehicle = {
            make, model, rent, image, description
        }
      
        fetch(`http://localhost:3000/update-by-id/${vehicle._id}`,{
            method:"PUT",
            headers:{
                "content-Type" :"application/json"
            },
            body:JSON.stringify(UpdateVehicle)
        })
        .then(res => res.json())
        .then(data=> {
           if(data.modifiedCount== 1){
            Navigate(`/manage-products`)
           }
        } )

    }



    
    
  return (
    <div>
        <Navbar/>
        <div className="text-center text-4xl mt-6 text-red-500">
                <h2>Update Product</h2>
            </div>
            
            <form 
            onSubmit={handleUpdateForm} 
            className="p-10 text-center w-full md:w-2/4 flex flex-col mx-auto" >

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Company</p>
                    <input type="text"
                        name="make"
                        defaultValue={vehicle.make}
                        placeholder="Car Company/make" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Model</p>
                    <input type="text"
                        name="model"
                        defaultValue={vehicle.model}
                        placeholder="Car Model" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Rent</p>
                    <input type="text"
                        name="rent"
                        defaultValue={vehicle.rent}
                        placeholder="Car Rent Per Hour" className="input input-bordered w-full" />
                </div>


                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Image</p>
                    <input type="text"
                        name="image"
                        defaultValue={vehicle.image}
                        placeholder="Car Image" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Description</p>
                    <input type="text"
                        name="description"
                        defaultValue={vehicle.description}
                        placeholder="Car Description" className="input input-bordered w-full" />
                </div>



                <div className="my-4">
                    <button className="Text-center text-white bg-red-700 btn btn-outline btn-warning">Update</button>
                </div>

            </form>

         <Footer/>
    </div>
  )
}

export default UpdateProduct
