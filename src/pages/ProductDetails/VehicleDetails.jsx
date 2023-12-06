import { useLoaderData } from "react-router-dom"
import Navbar from "../../components/Shared/Navbar"
import Footer from "../../components/Shared/Footer";

function VehicleDetails() {

    const details = useLoaderData();


    console.log(details);
    return (
        <div className="mx-auto max-w-7xl">
            <Navbar />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-4">
                    <div className="w-1/2">
                    <img src={details.image} />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{details.make}</h1>
                        <p className="py-4">{details.description}</p>
                        <p className="py-4 text-bold text-3xl text-yellow-500">${details.rent}</p>
                        <button className="btn btn-primary">Rent Now</button>
                    </div>
                </div>
            </div>


      <Footer/>

        </div>
    )
}

export default VehicleDetails
