import React from 'react';
//import logo from './logo.png';
//import './App.css';
import Hero from '../components/Hero';

import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
function Error() {
  return (<Hero>
<Banner title="404" subtitle="Page Not Found" >
<Link to="/" className="btn-primary">Go to Home</Link>
</Banner>

  </Hero>);
}

export default Error;
