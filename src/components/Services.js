import React,{Component} from 'react';
import Title from './Title';

import { FcAutomotive } from "react-icons/fc";



import { FaCar } from "react-icons/fa";

import { GiCarWheel,GiPoliceCar,GiBigGear } from "react-icons/gi";




export default class Services extends Component{
state={
	services:[
	{
		icon:<FaCar/>,
		title:"Cars",
		info:"About Cars"
	},
	{
		icon:<GiBigGear/>,
		title:"Car Gears",
		info:"About Cars"
	},
	{
		icon:<GiPoliceCar/>,
		title:"Race Cars",
		info:"About Cars"
	},
	{
		icon:<GiCarWheel/>,
		title:"Stories",
		info:"About Cars"
	}


	]
}


	render(){
		return(
	<section className="services">

<Title title="Browse"/>
<div className="services-center">
{this.state.services.map((item,index)=>{
return (<article key={index} className="service">
<span>{item.icon}</span>
<h6>{item.title}</h6>
<p>{item.info}</p>
</article>);
})}
</div>
	</section>

);
	}
}