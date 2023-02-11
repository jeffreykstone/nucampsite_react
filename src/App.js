import CampsitesList from './features/campsites/CampsitesList.js';
import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from './app/assets/img/logo.png';
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <CampsitesList />
            <Footer />
        </div>
    );
}

export default App;
