import React, { Component } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar/Navbar";
import { Line, Bar, Pie } from 'react-chartjs-2';
import "../components/css/Manutencao.css";
import CanvasJSReact from "../components/assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [{ x: 1, y: 10 }, { x: 2, y: 13 }];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 1000;

class Manutencao extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
	}

	state = {
		power: 0,
		current: 0,
		is_working: true,
	}

	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}

	updateChart() {
		axios.get(`http://www.mocky.io/v2/5dd592123300008f87f38244`)  /*LINK PARA O SITE */
			.then(res => {
				const response = res.data;
				this.setState({
					power: response.power,
					current: response.current,
					is_working: response.is_working,
				})
				console.log(this.state.power)
				console.log(this.state.current)
				console.log(this.state.is_working)
			})
		yVal = this.state.current;
		dps.push({ x: xVal, y: yVal });
		xVal++;
		if (dps.length > 10) {
			dps.shift();
		}
		this.chart.render();
	}

	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Energia Gerada"
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
				<Navbar />
				<div className="Gráfico">
					<h1>React Column Chart</h1>
					<CanvasJSChart options={options}
						onRef={ref => this.chart = ref}
					/>
				</div>
				<div>
					<h1>
						Está funcionando ?
						{<h1>{(this.state.is_working) ? "SIM" : "NÃO" }</h1>}
					</h1>
					<h1>
					</h1>
				</div>
			</div>
		);
	}
}
export default Manutencao;