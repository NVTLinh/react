import { Link } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {

    const authContext = useContext(AuthContext);
    console.log(authContext);

    const handleFakeLogin = () => {
        authContext.login({name: 'Linh'})
    }

    const handleFakeLogout = () => {
        authContext.logout()
    }

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
                        <div>
                            {authContext.user ?(
                                <div>
                                    <p>Xin chào, {authContext.user.name}</p>
                                    <button className="btn btn-outline-primary" onClick={handleFakeLogout}>Đăng xuất</button>
                                </div>
                            ) : (<button className="btn btn-outline-primary" onClick={handleFakeLogin}>
                                Đăng nhập
                            </button>) }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
