import logo from '../../assets/logo.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                        <div className="logo-text">
                        <h2>E-Commerce Store</h2>
                        <p>Admin Panel</p>
                        </div>
                    </div>
                    <div className="profile">
                        <i className="ri-admin-line"></i>
                        <i className="ri-arrow-down-s-line"></i>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar