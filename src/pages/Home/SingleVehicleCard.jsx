import { Link } from "react-router-dom"


function SingleVehicleCard({vehicle}) {
    return (

        <div key={vehicle._id} className="card card-compact w-96 bg-base-100 shadow-xl">

            <figure><img src={vehicle?.image} alt={vehicle?.model} /></figure>

            <div className="card-body">
                <h2 className="card-title">{vehicle?.make}</h2>
                <p>{vehicle?.model}</p>
                
              <div className="flex justify-between">
              <div className="card-actions justify-end">
                    <button className="btn btn-primary">${vehicle.rent} Per-Hour</button>
                </div>
                <div className="card-actions justify-end">

                  <Link to={`/vehicle/${vehicle._id}`}> 
                  <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
        </div>

    )
}

export default SingleVehicleCard
