import React,{Component} from 'react';

import Client from './contentful';

const CarContext=React.createContext();

export default class CarProvider extends Component
{
	state={
		cars:[],
		sortedCars:[],
		featuredCars:[],
		loading:true,
		type:'all',
		capacity:1,
		price:0,
		minPrice:0,
		maxPrice:0,
		minSize:0,
		maxSize:0,
		breakfast:false,
		pets:false
	};

	//getData

getData=async()=>{
	try{
let response=await Client.getEntries({
content_type:"classicCarz",
order:"sys.createdAt"

});
let cars=this.formatData(response.items);
	let featuredCars=cars.filter(car=>car.featured===true);
	let maxPrice=Math.max(...cars.map(item=>item.price));
	let maxSize=Math.max(...cars.map(item=>item.size));
	
	this.setState({
		cars,
		featuredCars,
		sortedCars:cars,
		loading:false,
		price:maxPrice,
		maxPrice,
		maxSize
	});
	}
	catch(error)
	{
		console.log(error);
	}
}

componentDidMount(){
	this.getData()
}

formatData(items)
{
	let tempItems=items.map(item =>{
		let id=item.sys.id;
		let images=item.fields.images.map(image=>image.fields.file.url);
		let car={...item.fields,images,id};

		return car;
	}) ;
	return tempItems;
}


getCar=(slug)=>{
	let tempCars=[...this.state.cars];
	const car=tempCars.find((car)=>car.slug===slug);
	return car;
};
handleChange=event=>{
	const target=event.target;
	const value=target.type==='checkbox' ?target.checked:target.value;

	const name=event.target.name;
	this.setState({
		[name]:value
	},this.filterCars)

};

filterCars=()=>{

let{
	cars,type,capacity,price,minSize,maxSize,breakfast,pets
}=this.state;

let tempCars=[...cars];
capacity=parseInt(capacity);

price=parseInt(price);


if(type!=="all"){
	tempCars=tempCars.filter(car=>car.type===type);
}



if(capacity!==1){
	tempCars=tempCars.filter(car=>car.capacity>=capacity)
}

tempCars=tempCars.filter(car=>car.price<= price);

tempCars=tempCars.filter(car=>car.size>=minSize&&car.size<=maxSize);

if(breakfast)
{
	tempCars=tempCars.filter(car=>car.breakfast===true)
}

if(pets)
{
	tempCars=tempCars.filter(car=>car.pets===true)
}


this.setState({
	sortedCars:tempCars
});
};


	render(){
		return (<CarContext.Provider value={{...this.state,getCar:this.getCar,handleChange:this.handleChange}}>
		{this.props.children}
		</CarContext.Provider>)
		;

	}
}
const CarConsumer=CarContext.Consumer;
export{CarProvider,CarConsumer,CarContext};
