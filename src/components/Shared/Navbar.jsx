import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>

            <div className="navbar bg-base-200 flex flex-col md:flex-row">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl md:text-xl">Car-Hub</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-2xl md:text-2xl  px-1 flex flex-col md:flex-row items-center">
                        <li>
                            <Link to={`/contact-us`}>Contact</Link>
                        </li>
                        <li>
                            <Link to={`/manage-products`}>Manage-Product</Link>

                        </li>
                        <li>
                            <Link to={`/add-product`}>Add Products</Link>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    )
}

export default Navbar
