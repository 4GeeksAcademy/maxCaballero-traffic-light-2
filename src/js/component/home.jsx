import React from "react";
import '../../styles/TrafficLight.css'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TrafficLight from "./TrafficLight";

//create your first component
const Home = () => {
	return (
		<div className="text-center">


			<h1>Luces del Semafo</h1>
			<TrafficLight />


		</div>
	);
};

export default Home;
