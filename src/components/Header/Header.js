import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';

function Header () {
  return (
    <header className='header'>
      <div className='header__logo'><Logo /></div>
      <h1 className='header__strapline'>Search for repos on Github</h1>
    </header>
  );
}

export default Header;
