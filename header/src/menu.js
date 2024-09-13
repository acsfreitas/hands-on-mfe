import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Menu = () => (
  <BrowserRouter>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/body'>Body</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </BrowserRouter>
);

export default Menu;