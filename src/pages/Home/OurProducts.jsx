import { useLoaderData } from "react-router-dom"
import SingleProductCard from "./SingleProductCard";


function OurProducts() {

    const products = useLoaderData();
    console.log(products);


    return (
        <div>
            <div className="text-center font-serif text-3xl text-orange-600">
                <p className="bg-gray-400 md:mb-10 rounded-lg p-2">Our Products</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-5 ml-10 md:ml-0">

                {
                    products?.map(product => (

                        <SingleProductCard product={product} key={product._id} />
                    ))
                }





            </div>




           
        </div>
    )
}

export default OurProducts
