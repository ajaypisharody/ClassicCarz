import React from 'react';
import CarFilter from './CarFilter';

import CarList from './CarList';
import {CarConsumer} from '../Context';
import Loading from './Loading';

export default function CarsContainer(){
	return (
		<CarConsumer>
		{
value=>{

const{loading,sortedCars,cars}=value
if(loading){
	return<Loading/>
}
		
return(

<div>
<CarFilter cars={sortedCars}/>
<CarList cars={sortedCars}/>
</div>
);
}}
</CarConsumer>
);
}