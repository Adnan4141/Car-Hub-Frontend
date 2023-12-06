import { useEffect, useState } from "react";
import { Link, useLoaderData } from 'react-router-dom';

function ManageProductsTable() {

  //  useEffect(()=>{
  //   fetch(`http://localhost:3000/all-vehicles`)
  //   .then(res => res.json())
  //   .then(data => console.log(data))  
  //  },[])

  const data = useLoaderData();
  const [vehicles,setvehicles]=useState(data)
 
  function handleDelete(vehicleId){
    fetch(`http://localhost:3000/delete-by-id/${vehicleId}`,{
      method:"DELETE",
    })
    .then(res => res.json())
    .then((data) => {
      if(data.deletedCount >0){
        const RestVehicle =vehicles?.filter(vehicle =>vehicle._id != vehicleId) 
        setvehicles(RestVehicle)
      }
    });
   
  }



  return (
    <div className="my-5">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
              <th>Rent</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {vehicles?.map(vehicle => (

              <tr key={vehicle._id}>

                <td>{vehicle.make}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.rent}</td>
                <td>
                  <Link to={`/update-vehicle/${vehicle._id}`}>
                  <button className="btn mx-5">Update</button>
                  </Link>
                  
                  <button  className="btn" onClick={()=>
                    handleDelete(vehicle._id)}>Delect</button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageProductsTable
