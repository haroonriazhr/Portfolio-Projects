import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="w-full h-[80px] bg-transparent fixed z-10">
        <nav className="container mx-auto flex items-center justify-between h-full p-[20px]">
          <Link to="/" className="text-2xl font-bold text-black">
            Your logo
          </Link>

          <ul className="hidden md:flex items-center space-x-6 text-[18px] pr-[190px]">
            <li><Link to="/" className="hover:text-black">Home <i className="ri-arrow-down-s-line"></i></Link></li>
            <li><Link to="/electronics" className="hover:text-black">Electronics <i className="ri-arrow-down-s-line"></i></Link></li>
            <li><Link to="/contacts" className="hover:text-black">Contacts <i className="ri-arrow-down-s-line"></i></Link></li>
            <li><Link to="/about" className="hover:text-black">About <i className="ri-arrow-down-s-line"></i></Link></li>
            <li><Link to="/login" className="hover:text-black">Login</Link></li>
          </ul>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-black focus:outline-none">
              {menuOpen ? <i className="ri-menu-line"></i> : <i className="ri-menu-line"></i>}
            </button>
          </div>
        </nav>

        <div
          className={`md:hidden fixed inset-0 bg-[#EC3D2F] bg-opacity-75 flex flex-col items-center justify-center transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out z-50`}
        >
          <ul className="space-y-8 text-white text-[40px]">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/electronics" onClick={toggleMenu}>Electronics</Link></li>
            <li><Link to="/contacts" onClick={toggleMenu}>Contacts</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/login" onClick={toggleMenu}>Login</Link></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar