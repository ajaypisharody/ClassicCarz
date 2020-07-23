import React, {Component} from 'react';
import defaultBcg from '../images/e9.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {CarContext} from '../Context';
import StyledHero from '../components/StyledHero';



export default class SingleCar extends Component {
	constructor(props)
	{
		super(props);
		this.state={
			slug:this.props.match.params.slug,defaultBcg
		};

	}
	static contextType=CarContext;
	//componentDidMount(){	}


	render(){
const {getCar}=this.context;
const car=getCar(this.state.slug);
if(!car){
return (<div className="error"><h3>No such Car</h3>
<Link to="/cars" className="btn-primary">Back to Cars</Link></div> );
}
const {name,description,capacity,size,price,extras,turbocharged,hybrid,images}=car;
const [mainImg,...defaultImg]=images;
	
	return(
		<>
			<StyledHero img={mainImg}>
			<Banner title={`${name}`}>
			<Link to ='/cars' className="btn-primary">Back to Cars</Link></Banner>	
				</StyledHero>
				<section className ="single-room">
					<div className="single-room-images">
					{defaultImg.map((item,index)=>{
			return				<img key={index} src={item} alt={name}/>;
					})}
					</div>
					<div className="single-room-info">
					<article className="desc">
					<h3>Details</h3>
					<p>{description}
					</p>
					</article>	
					<article className="info">
						<h3>Info</h3>
						<h6>Price(approx): ${price}</h6>

						<h6>Seats: {size}</h6>
						<h6>Engine capacity : {capacity>1 ? `${capacity} cc`: `${capacity} cc`}</h6>
						<h6>Hybrid: {hybrid?"Yes":"No"}</h6>
						<h6>Turbo Charged: {turbocharged?"Yes":"No"}</h6>
					</article>

						</div>
					</section>
					<section className="room-extras">
					<h6>Extras</h6>
						<ul className="extras">{extras.map((item,index)=>{
							return <li key={index}>-{item}</li>;
						})}</ul>	
					</section>
					
				</>
			);
}
}

