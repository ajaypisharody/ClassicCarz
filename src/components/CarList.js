import React from 'react';
import Car from './Car';
export default function CarList({cars}){
	if(cars.length===0)
	{
		return (
			<div className="empty-search">
			<h3>No such car exists..</h3>
				</div>);
	}
	return (
<section className="roomslist">
<div className="roomslist-center">
{cars.map(item=>{

	return (<Car key={item.id} car={item}/>);
})}
</div>
</section>
	);
}