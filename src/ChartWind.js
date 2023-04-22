import React, {useState, useEffect} from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

let state={};

export default function ChartWind(props){

    let [loadedWind, setloadedWind] = useState(false);
    function formatHour(data){
        let hours =[];
        for (let i=0; i<5; i++){
          let hour = new Date(data[i].dt * 1000);
          hours[i] = hour.getHours();
        }
      
        return hours;
      
      }
      useEffect(() => {
        setloadedWind(false);
      },[props.data]);
    function handleChartData(response){
        // console.log(response);
        setloadedWind(true);
    
        state = {
            labels: formatHour(response.data.hourly),
            datasets: [
              {
                label: 'Wind Status',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [response.data.hourly[0].wind_speed,
                    response.data.hourly[1].wind_speed,
                    response.data.hourly[2].wind_speed,
                    response.data.hourly[3].wind_speed,
                    response.data.hourly[4].wind_speed
                    ]
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
    if(loadedWind){
    return (
        <div
        id="windChart"
        style={{width: 100+"%", maxWidth: "150px", height: 100+"%"}}
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