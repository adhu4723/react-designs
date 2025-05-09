import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo2.png';
import CartPanel from '../components/CartPanel';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import ProfileTab from '../components/ProfileTab';


const navLinks = [

  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

function Navbar({ onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart()
  const { signup, user, logout } = useAuth();
  const [show, setShow] = useState(false);

  // Reference to ProfileTab for detecting outside clicks
  const profileRef = useRef(null);

  // Click outside detection for ProfileTab
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="flex justify-between items-center lg:px-10 px-4 py-4">
        <div className='flex items-end gap-2'>


          <button
            className="lg:hidden rounded-lg text-amber-800 "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          {/* Logo */}
          <Link to="/" className="flex items-end gap-1">
            <img src={logo} alt="Logo" className="h-10" />
            <h1 className="font-bold text-xl">Interio<span className="text-amber-800">Hub</span></h1>
          </Link>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:underline underline-offset-4"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Icons + Mobile Menu Button */}
        <div className="flex gap-4 items-center text-lg">
          
          <div className='hidden relative lg:block gap-2' ref={profileRef}>
            <button onClick={() => setShow((prev) => !prev)} className=''>
              <FaRegUser className="cursor-pointer" />                    </button>
            {show && (
              <div className='absolute  -left-[55px]  w-[150px]'>
                <ProfileTab show={show} setShow={setShow} />
              </div>
            )}
          </div>
          <FaSearch className="cursor-pointer" />
          <FaRegHeart className="cursor-pointer" />
          <div onClick={onCartClick} className='relative cursor-pointer'><FiShoppingCart className="cursor-pointer" />
            <span className='absolute text-sm -top-2 text-white -right-5 bg-amber-800 px-2  rounded-full'>{cartItems.length}</span>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

    </nav>
  );
}

export default Navbar;
