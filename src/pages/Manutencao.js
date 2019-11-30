import React, { Component } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar/Navbar";
import "../components/css/Manutencao.css";
import CanvasJSReact from "../components/assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 3;
var updateInterval = 1000;
var config = {
	crossdomain: true,
    headers: {'Access-Control-Allow-Origin': '*'}
};

class Manutencao extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}

	state = {
		power: 0,
		current: 0,
		is_working: false,
		time: null
	}

	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}

	updateChart() {
		axios.get('http://localhost:5001/energy_log/1', config)  /*LINK PARA O SITE */
			.then(res => {
				const response = res.data.data;
				if(this.state.time !== response.time) {
					this.setState({
						power: response.power, 
						current: response.current,
						is_working: response.is_working,
						time: response.time
					})
					yVal = this.state.current;
					dps.push({ x: xVal, y: yVal });
					xVal++;
					if (dps.length > 10) {
						dps.shift();
					}
					this.chart.render();
				}
				else {
					this.setState({
						is_working: false
					})
				}
			})
	}

	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Energia Gerada",
				fontFamily: "Varela Round",
			},
			data: [{

				type: "spline",
				lineThickness: 4,
				lineColor: "green",
				dataPoints: dps, color: "dark-green"
			}]
		}

		return (
			<div className="App">
			<link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet"></link>
				<Navbar />
				<div className="Gráfico">
					<CanvasJSChart options={options}
						onRef={ref => this.chart = ref}
					/>
				</div>
				<br></br>
				<br></br>
				<div>
					<div className="funcionando" > 
						<h1>Está funcionando ?</h1>
						{this.state.is_working ? <h1 className="sim">SIM</h1> : <h1 className="nao">NÃO</h1>}
					</div>
				</div>
			</div>
		);
	}
}
export default Manutencao;