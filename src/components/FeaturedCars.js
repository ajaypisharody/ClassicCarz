import React,{Component} from 'react';
import {CarContext} from '../Context';
import Loading from "./Loading";
import Car from "./Car";
import Title from './Title';

export default class FeaturedCars extends Component{


	static contextType=CarContext
	render(){
		let {loading,featuredCars:cars}=this.context;
		cars=cars.map(car=>{
			return <Car key={car.id} car={car}/>
		})

		return(<section className="featured-rooms">

				<Title title="Featured Cars"/>
<div className="featured-rooms-center">
{loading?<Loading/>:cars}
	</div>
				</section>);
	}

}