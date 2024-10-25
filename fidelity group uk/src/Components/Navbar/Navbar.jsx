import './Navbar.css';
import logo from '../assets/Img/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <nav>
          <div className="left">
            <Link to='/'><img src={logo} alt="" /></Link>           
          </div>
          <div className="right">
            <ul>
              <li>
                <Link to='/Service'>Services
                <i className="ri-arrow-drop-down-line"></i>
                </Link>
              </li>

              <li>
                <Link to='/Partner'>Partner Programmes
                <i className="ri-arrow-drop-down-line"></i>
                </Link>
              </li>

              <li>
                <a>Company
                <i className="ri-arrow-drop-down-line"></i>
                </a>
              </li>

              <li>
                <Link to='/Support'>Support
                <i className="ri-arrow-drop-down-line"></i>
                </Link>
              </li>
          
              <li>
                <Link to='/Contact'>Contact</Link>
              </li>
            </ul>
            {isOpen && (
            <div className="icon">
            <i onClick={toggleMenu} className="ri-menu-line"></i>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar