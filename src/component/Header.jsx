import { Link } from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import { CardContext } from "../contexts/cardContext";
import anhgiohang from '../assets/anh/anhgiohang.jpg';
import styles from '../assets/styles/styles.module.css'

export default function Header() {

    const cardContext = useContext(CardContext)

    const authContext = useContext(AuthContext);
    console.log(authContext);

    const handleFakeLogin = () => {
        authContext.login({ name: 'Linh' })
    }

    const handleFakeLogout = () => {
        authContext.logout()
    }

    const countProductsInCart = () => {
        return cardContext.cardProduct.length;
    }

    return (
        <div className="container-fluid d-flex justify-content-between">
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
                            {authContext.user ? (
                                <div>
                                    <p>Xin chào, {authContext.user.name}</p>
                                    <button className="btn btn-outline-primary" onClick={handleFakeLogout}>Đăng xuất</button>
                                </div>
                            ) : (<button className="btn btn-outline-primary" onClick={handleFakeLogin}>
                                Đăng nhập
                            </button>)}
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <Link to={'/gio-hang'} className="nav-link active">
                    <span className="badge bg-primary">{countProductsInCart()}</span>
                    <img className={styles.anh} src={anhgiohang} alt="" />
                </Link>
            </div>
        </div>
    )
}
