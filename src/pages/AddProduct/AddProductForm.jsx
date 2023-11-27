import { useNavigate } from "react-router-dom";

function AddProductForm() {

  const navigate = useNavigate();

    const handleProductFrom = (e) => {
        e.preventDefault();
        const make = e.target.make.value;
        const model = e.target.model.value;
        const rent = e.target.rent.value;
        const image = e.target.image.value;
        const description = e.target.description.value;

        const vehicle = {
            make, model, rent, image, description
        }
        console.log(vehicle)

        fetch(`http://localhost:3000/add-a-vehicle`, {
            method:"POST",
            headers:{
                "content-Type" :"application/json"
            },
            body:JSON.stringify(vehicle)
        }).then(res=>res.json())
        .then (data=> {
         
            if(data.acknowledged){
                navigate('/manage-products')
            }
        })
    }


    return (
        <div>
            <div className="text-center text-3xl mt-6 text-red-500">
                <h2>Add Product</h2>
            </div>
            
            <form onSubmit={handleProductFrom} className="p-10 text-center w-full md:w-2/4 flex flex-col mx-auto" >

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Company</p>
                    <input type="text"
                        name="make"
                        placeholder="Car Company/make" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Model</p>
                    <input type="text"
                        name="model"
                        placeholder="Car Model" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Rent</p>
                    <input type="text"
                        name="rent"
                        placeholder="Car Rent Per Hour" className="input input-bordered w-full" />
                </div>


                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Image</p>
                    <input type="text"
                        name="image"
                        placeholder="Car Image" className="input input-bordered w-full" />
                </div>

                <div className="text-left ">
                    <p className="text-2xl my-2 mx-2">Car Description</p>
                    <input type="text"
                        name="description"
                        placeholder="Car Description" className="input input-bordered w-full" />
                </div>



                <div className="my-4">
                    <button className="Text-center text-white bg-red-700 btn btn-outline btn-warning">Submit</button>
                </div>

            </form>




        </div>
    )
}

export default AddProductForm
