import React from 'react';

// Components

import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';


const Layout = () => {
  return (
    <div className={`w-full h-screen overflow-hidden bg-site text-white bg-cover bg-no-repeat font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
    </div>
  )
};

export default Layout;
