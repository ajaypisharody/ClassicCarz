import React from 'react';
//import logo from './logo.png';
//import './App.css';

import Hero from '../components/Hero';

import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';

import FeaturedCars from '../components/FeaturedCars';
import Button from '../components/StyledHero';
export default function Home() {

   return (
<>
   	<Hero>
<Banner title="Classic Cars" subtitle="The best of the automative world from the last century" >
<Link to="/Cars" className="btn-primary">Check out Cars</Link>
</Banner>

  </Hero>
  <Services/>
  <FeaturedCars/>
</>
  );
}

