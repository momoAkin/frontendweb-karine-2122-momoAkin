import './App.css';
import Navigatie from './components/Navigatie';
import Footer from './components/Footer/footer';
import DropDownNav from './components/Navigatie/dropDownNav';
import React, { useState } from "react";

import {BrowserRouter as 
  Router,
  Route, 
  Routes, // instead of "Switch"
} from 'react-router-dom';
import Home  from     './components/Paginas';
import About from     './components/Paginas/about';
import Contact from   './components/Paginas/contactUs';
import Manga from  './components/Paginas/manga';
import Anime from  './components/Paginas/anime';

import Signup from    './components/Paginas/signup';
import Signin from    './components/Paginas/SingIn';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router  >
      
        <DropDownNav isOpen={isOpen} toggle={toggle} />
        <Navigatie toggle={toggle} />
        <Routes>
            
          <Route path='/' /*exact component={Home} oude manier */ element={<Home />}/>
          <Route path='/about' /*exact component={About} oude manier */ element={<About />}/>
          <Route path='/contact-us' /*exact component={Contact} oude manier */ element={<Contact />}/>
          
          <Route path='/manga' /*exact component={Manga} oude manier */ element={<Manga />}/>
          <Route path='/anime' /*exact component={Anime} oude manier */ element={<Anime />}/>

          <Route path='/sign-up' /*exact component={Signup} oude manier */ element={<Signup />}/>
          <Route path='/sign-in' /*exact component={Signin} oude manier */ element={<Signin />}/>

        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
