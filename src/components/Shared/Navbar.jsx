import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>

            <div className="navbar bg-base-200 flex flex-col md:flex-row">

          

                <div className="flex-1">
                      <Link to={`/`}> <button className="btn btn-ghost text-3xl md:text-xl ml-5">Car-Hub</button></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-2xl md:text-2xl  px-1 flex flex-col md:flex-row items-center">
                      
                        <li>
                            <Link to={`/manage-products`}>Manage-Product</Link>
                        </li>

                        <li>
                            <Link to={`/add-product`}>Add Products</Link>
                        </li>
                      
                        <li>
                            <Link to={`/contact-us`}>Contact</Link>
                        </li>

                        <li>
                            <Link to={`/add-teammate`}>Add Member</Link>
                        </li>


                    </ul>
                </div>
            </div>



        </div>
    )
}

export default Navbar
