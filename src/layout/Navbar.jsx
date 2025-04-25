import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUser, FaSearch, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo2.png';
import CartPanel from '../components/CartPanel';
import { useCart } from '../context/CartContext';

const navLinks = [
 
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

function Navbar({onCartClick}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const {cartItems}=useCart()

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
          <FaRegUser className="cursor-pointer" />
          <FaSearch className="cursor-pointer" />
          <FaRegHeart  className="cursor-pointer" />
          <div onClick={onCartClick} className='relative cursor-pointer'><FiShoppingCart   className="cursor-pointer" />
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
