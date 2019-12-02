import React, { Component } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar/Navbar";
import "../components/css/Manutencao.css";
import CanvasJSReact from "../components/assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [];   //dataPoints.
let dps2 = [];
var xVal = dps.length + 1;
var yVal = 3;
var updateInterval = 1810;
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
				if(response.is_working) {
					this.setState({
						power: response.power, 
						current: response.current,
						is_working: response.is_working,
						time: response.time
					})
					yVal = this.state.current;
					dps.push({ x: xVal, y: this.state.current });
					dps2.push({ x: xVal, y: this.state.power });
					
					xVal++;
					if (dps.length > 10) {
						dps.shift();
						dps2.shift();
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
		const options1 = {
			animationEnabled: true,
			title: {
				text: "Corrente Gerada",
				fontFamily: "Varela Round",
				fontColor: "#68CDCA",
				fontWeight: 700
			},
			axisY: {
				title: "Corrente (mA)",
				titleFontFamily: "Varela Round",
				titleFontColor: "#454545",
				titleFontWeight: 700
			},
			data: [{
				type: "spline",
				lineThickness: 4,
				lineColor: "#68CDCA",
				dataPoints: dps,
				color: "#454545"
			}]
		}

		const options2 = {
			animationEnabled: true,
			title: {
				text: "Potência Gerada",
				fontFamily: "Varela Round",
				fontColor: "#68CDCA",
				fontWeight: 700
			},
			axisY: {
				title: "Potência (mW)",
				titleFontFamily: "Varela Round",
				titleFontColor: "#454545",
				titleFontWeight: 700
			},
			data: [{
				type: "spline",
				lineThickness: 4,
				lineColor: "#68CDCA",
				dataPoints: dps2, 
				color: "#454545"
			}]
		}

		return (
			<div className="App">
				<Navbar />
				<div className="funcionando" > 
					<h1>Está funcionando ?</h1>
					{this.state.is_working ? <h1 className="sim">SIM</h1> : <h1 className="nao">NÃO</h1>}
				</div>
				<div className="grafico">
					<div className="current-chart">
						<CanvasJSChart options={options1}
							onRef={ref => this.chart = ref}
						/>
					</div>
					<div className="power-chart">
						<CanvasJSChart options={options2}
							onRef={ref => this.chart = ref}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default Manutencao;