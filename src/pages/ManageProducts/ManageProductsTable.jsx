import { useEffect } from "react";
import { Link, useLoaderData } from 'react-router-dom';

function ManageProductsTable() {

  //  useEffect(()=>{
  //   fetch(`http://localhost:3000/all-vehicles`)
  //   .then(res => res.json())
  //   .then(data => console.log(data))  
  //  },[])

  const vehicles = useLoaderData();
  console.log(vehicles);

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
                  
                  <button className="btn">Delect</button>
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
