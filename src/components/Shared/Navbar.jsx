import { Link } from "react-router-dom"
import { Dropdown } from 'flowbite-react';
function Navbar() {
    return (
        <div>

            <div className="navbar bg-base-200 flex flex-col md:flex-row">

                <div className="flex-0">
                    <Link to={`/`}> <button className="btn btn-ghost text-3xl md:text-xl ml-5">Car-Hub</button></Link>
                </div>
                <div className="flex-1 md:ml-5">
                    <div className="join">
                        <div>
                            <div>
                                <input className="input input-bordered join-item" placeholder="Search" />
                            </div>
                        </div>
                        <select className="select select-bordered join-item">
                            <option disabled selected>Filter</option>
                            <option>New Model</option>
                            <option>Old Model</option>
                        </select>
                    </div>
                    <div className="indicator">
                        <button className="btn join-item">Search</button>
                    </div>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-2xl md:text-2xl  px-1 flex flex-col md:flex-row items-center">

                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>

                        <li>
                            <Link to={`/manage-products`}>Manage-Product</Link>
                        </li>

                        <li>

                        </li>

                        <li>
                            <Link to={`/contact-us`}>Contact</Link>
                        </li>

                        {/* Dropdown  */}

                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="btn-ghost block mx-4 font-semibold p-4 rounded-lg text-xl">Settings</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to={`/add-teammate`}>Add Member</Link></li>
                                <li><Link to={`/add-product`}>Add Products</Link></li>
                                <li><Link to={`/sign-up`}>User Account</Link></li>

                            </ul>
                        </div>









                    </ul>
                </div>
            </div>



        </div>
    )
}

export default Navbar
