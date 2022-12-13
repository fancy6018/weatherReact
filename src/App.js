import './App.css';
import React,{useEffect, useRef, useState} from 'react';
import Weather from './Weather';
import styled from 'styled-components';
import axios from 'axios'

const Home = styled.div`
  text-align: center;
`
const Chart = styled(Home)``

function App() {
  const [city, setCity] = useState('taipei');
  const inputRef = useRef(null);
  const [data, setData] = useState([]);
  const search = () =>{    
    setCity(inputRef.current.value)    
    getWeather(inputRef.current.value)
  }

  const getWeather = (city)=> {    
    const cros = 'https://api.allorigins.win/get?url=';
    const days = 5;   
    const url = encodeURIComponent(`http://api.weatherapi.com/v1/forecast.json?key=8489f71e06bd446496132942221212&q=${city}&days=${days}&aqi=no&alerts=no`);      
    axios
    .get(`${cros}${url}`)
    .then((res)=>{
      var ndata = JSON.parse(res.data.contents);    
      setData(ndata.forecast.forecastday);
    })
    .catch(function (error) {        
      console.log(error);
    });
  }

  useEffect(()=>{
    getWeather('taipei')
  },[])
 return (
  <Home>
    <div>City:<input ref={inputRef}/><button onClick={()=>{search()}}>Search</button></div>
    <Chart>
      <h2>{city.toUpperCase()}</h2>
      {data.map((s,i)=>(
        <Weather key={i} {...s}/>
      ))}      
    </Chart>    
  </Home>
 )
}

export default App;
