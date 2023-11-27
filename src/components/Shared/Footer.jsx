import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom"
function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div className="flex">

                <FaLocationDot>Chittagong</FaLocationDot>
                <span>Chittagong</span>

            </div>
            <nav>
                <header className="footer-title">Services</header>
                
                    <Link to={`/contact-us`}>Contact</Link>
                    <Link to={`/manage-products`}>Manage-Product</Link>
                    <Link to={`/add-product`}>Add Products</Link>
                    
            </nav>

            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}

export default Footer
