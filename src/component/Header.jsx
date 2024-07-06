import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to={'/'} className="navbar-brand">Navbar</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/shop'} className="nav-link active">Shop</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link active" href="#">Dropdown</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
