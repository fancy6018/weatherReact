import React from "react";
import styled from "styled-components";

const Chats = styled.div`
    text-align: center;
    display: inline-block;
    margin: 10px;
    background: rgb(222, 247, 247);
    border-radius: 20px;
    padding:0 50px;
    padding: 0 10px 0 50px;
    width: 370px;
`
const Date = styled.p`
    display: block;
    color: #000;
    padding-bottom: 30px;
`
const Barbox = styled.div`
    width:200px;
    display: inline-block;
    margin-right: 50px;
    vertical-align: top;
    position: relative;
`
const Square = styled.div`
    border:solid 2px rgb(141, 140, 140);
    width:100px;
    height:100px;
    border-top:none;
    border-right:none;
    position:relative;    

    &:before{
        content: '0°C';
        position: absolute;
        bottom: -5px;
        left: -32px;
    }
    &:after{
        content:'50°C';
        position: absolute;
        top:0;
        left: -40px;
    }
`
const Max = styled.div`
    border:solid 1px rgb(236, 92, 92);
    background-color:rgb(236, 92, 92);
    width:15px;
    height:${prop => prop.temp_max_h};
    position:absolute;
    bottom: 0;
    left: 20px;
    max-width: 100px;
    min-width: 0px;

    span{    
        position: absolute;
        top: -20px;
        left: 0;
    }
`
const Min = styled.div`
    border:solid 1px #0edbff;
    background-color:#0edbff;
    width:15px;
    height:${prop => prop.temp_min_h};
    position:absolute;
    bottom: 0;
    left: 70px;
    max-width: 100px;
    min-width: 0px;

    span{    
        position: absolute;
        top: -20px;
        left: 0;
    }
`
const IconMax = styled.span`
    position: absolute;
    right: -3px;
    top: 30px;

    i{
        width:10px;
        height:10px;
        display: inline-block;
        background: #ec5c5c;
    }
`
const IconMin = styled.span`
    position: absolute;
    right: 0px;
    top: 60px;
    i{
        width:10px;
        height:10px;
        display: inline-block;
        background: #0edbff;
    }
`
const Piebox = styled.div`
    width:100px;
    display: inline-block;
`
const Piebg = styled.div`
    background: rgba(67, 221, 248,0.2);
    position: relative;
    width:100px;
    height: 100px;
    border-radius: 50px 50px 50px 50px;
    border-color: #000;
`
const Pie = styled.div`
    top:0px;
    left:0px;
    margin-left: ${prop => prop.pieMl};
    position:absolute;
    width: ${prop => prop.pieW};
    height:100px;
    overflow:hidden;
    border-radius:0 50px 50px 0;

    &:before{
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 50px;
        background: rgb(35, 179, 204);
        border-style: solid;
        border-color: #000;
        border-width: 0px 0px 0px;
        border-radius: 50px 50px 0 0;
        transform-origin: 50px 50px;
        z-index:1;		 
        transform: ${prop => prop.deg};
    }
    &:after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 50px;
        background: rgb(35, 179, 204);
        border-style: solid;
        border-color: #000;
        border-width: 0px 0px 0px;
        border-radius: 50px 50px 0 0;
        transform-origin: 50px 50px;
        opacity: ${prop => prop.pieAfter};
        z-index:2;
        transform:rotate(90deg);    
    }
`
const IconHumidity = styled.i`
    width:10px;
    height:10px;
    display: inline-block;
    background: rgb(35, 179, 204)
`

const Weather = ({day})=> {
    const temp_max = day.maxtemp_c.toFixed(1);
    const temp_min = day.mintemp_c.toFixed(1);
    const temp_max_h = `${temp_max*2}px`;
    const temp_min_h = `${temp_min*2}px`;
    const num = (Math.round(parseInt(day.avghumidity)*3.6)) || 0;        
    const deg = `rotate(${num-90}deg)`;
    const pieAfter = num < 180 ? 0 : 1;
    const pieW = num < 180 ? '50px' : '100px';
    const pieMl = num < 180 ? '50px' : 0;

    return(
        <Chats>
            <Date></Date>
            <Barbox>
                <Square>
                    <Max temp_max_h={temp_max_h}>
                        <span>{temp_max}°C</span>
                    </Max>
                    <Min temp_min_h={temp_min_h}>
                        <span>{temp_min}°C</span>
                    </Min>
                </Square>
                <IconMax><i/> max temp</IconMax>
                <IconMin><i/> min temp</IconMin>
            </Barbox>
            <Piebox>
                <Piebg>
                    <Pie deg={deg} pieAfter={pieAfter} pieW={pieW} pieMl={pieMl}/>
                </Piebg>
                <p>humidity <IconHumidity/>{day.avghumidity || 'Not found'}%</p>
            </Piebox>
        </Chats>
    )
}

export default Weather;