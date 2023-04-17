import React from "react";
import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";

export default function ChartWind(props){
    const labels =[]
    const data={
        labels: labels,
        datasets:[
            {
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [0, 1, 2, 3, 4, 5],
            }
        ]
    }
    return(
        <div style={{ height: 80 + "%" }}>
            <Line data={data} />
        </div>
    )
}