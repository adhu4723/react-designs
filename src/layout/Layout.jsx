import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import CartPanel from '../components/CartPanel';
import FeatureIcons from '../components/FeatureIcons';

function Layout() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <main className="flex-grow my-5 ">
        <Outlet />
      </main>
      <FeatureIcons/>
      <Footer />
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default Layout;
