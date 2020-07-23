import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import {Link} from "react-router-dom";
import CarsContainer from '../components/CarsContainer';

const Cars=()=>{
return (
	<>
	<Hero hero="roomsHero">
	<Banner title="Classic Cars">
	<Link to="/" className="btn-primary">Return Home
	</Link>
	</Banner>
	</Hero>
	<CarsContainer/>
	</>
	);
};

export default Cars;
