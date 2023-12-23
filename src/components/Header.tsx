'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../assets/logo-whitout-background.png';
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='text-white flex justify-around items-center bg-secondary'>
      <Image src={logo} alt='logo' width={100} height={100} className='p-3' />
      <nav>
        <ul className={`menu ${isMobileMenuOpen ? 'open' : ''} gap-4 flex`}>
          <li><a className='' href="#">Inicio</a></li>
          <li><a href="#">Como posso te ajudar</a></li>
          <li><a href="#">Sobre mim</a></li>
          <li><a href="#">Onde me encontrar?</a></li>
        </ul>
      </nav>
      <div className='gap-3'>
        <button><InstagramLogo size={32} /></button>
        <button><LinkedinLogo size={32} /></button>
        <button><WhatsappLogo size={32} /></button>
      </div>
    </header>
  );
};

export default Header;
