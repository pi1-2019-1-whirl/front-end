import React, {Component} from "react";
import Navbar from "../components/Navbar/Navbar";
import { Line,Bar,Pie } from 'react-chartjs-2';
import CanvasJSReact from "../components/assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Manutencao extends Component{
 render() {
  
		const options = {

			title: {
				text: "Energia Gerada"
			},		axisY:[{
    title: "Voltagem",       
   }],
   axisX:[{
    title: "Tempo",       
   }],
  
			animationEnabled: false,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Apple",  y: 10876  },
					{ label: "Orange", y: 15123 },
					{ label: "Banana", y: 23123  },
					{ label: "Mango",  y: 30222 },
					{ label: "Orange", y: 15224  },
					{ label: "Banana", y: 25454  },

				]
			}
			]
		}
		
		return (
  <div>
   <Navbar/>
		<div>
			<h1>React Column Chart</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
  </div>
		);
	}
}
export default Manutencao;