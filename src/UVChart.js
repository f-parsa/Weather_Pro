import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

let state={};


export default function UVChart(props){

    let [loadedUV, setloadedUV] = useState(false);
    function formatHour(data){
        let hours =[];
        for (let i=0; i<5; i++){
          let hour = new Date(data[i].dt * 1000);
          hours[i] = hour.getHours();
        }
      
        return hours;
      
      }
      useEffect(() => {
        setloadedUV(false);
      },[props.data]);
      function formatDataChart(data)
      {
        let uvi=[];
        for (let i=0; i<5; i++){
            uvi[i] = data[i].uvi
        }
        return uvi;
      }
    function handleChartData(response){
        // console.log(response);
        setloadedUV(true);
    
        state = {
            labels: formatHour(response.data.hourly),
            datasets: [
              {
                label: 'UV Status',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: formatDataChart(response.data.hourly)
              }
            ]
          }

    }
    function getWindData(){
        let api_key = "1ee4264117b73d2263eecd562f31ef5c"
        let lat=props.data.lat;
        let lon =props.data.lon;
        let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
        axios.get(url).then(handleChartData)
    }
    if(loadedUV){
    return (
        <div
        id="windChart"
        style={{width: 100+"%", maxWidth: "200px", height: 100+"%"}}
      >
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
        }
        else{
            getWindData();
            return null
        }
}