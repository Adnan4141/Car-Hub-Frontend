import { useLoaderData } from "react-router-dom"
import SingleVehicleCard from "./SingleVehicleCard";


function OurVehicles() {

    const vehicles = useLoaderData();
    console.log(vehicles);


    return (
        <div>
            <div className="text-center font-serif text-3xl text-orange-600">
                <p>Our Vehicles</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 ml-10 md:ml-0">
             
           {
              vehicles?.map(vehicle => (

               <SingleVehicleCard vehicle={vehicle} key={vehicle._id}/>
                  
              ))
           }


        
              


            </div>





        </div>
    )
}

export default OurVehicles
