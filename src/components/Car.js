import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


export default function Car({car})
{ 
	const{name,slug,images,price}=car;
	return (
<article className="room">
<div className="img-container">
<img src={images[0]} alt="Classic Car"/>
<div className="price-top">
<h6>${price}</h6>
<p>Approximate Value</p>
</div>
<Link to={`/cars/${slug}`} className="btn-primary room-link">
View</Link>
</div>
<p className="room-info">{name}</p>
</article>


		);
}

Car.propTypes={
	car:PropTypes.shape({
		name:PropTypes.string.isRequired,
		slug:PropTypes.string.isRequired,
		images:PropTypes.arrayOf(PropTypes.string).isRequired,
		price:PropTypes.number.isRequired
	})
}