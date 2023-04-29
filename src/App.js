import React, { useEffect } from 'react'
import { useState } from 'react';
import './index.css';
const App = () => {
  const [data, setData] = useState("")

  const fetchApi = async () => {
    try{
      const res = await fetch("https://data.covid19india.org/data.json");
      const jsonData =  await res.json();
  
      setData(jsonData.statewise[0]);
    }catch(e){
      console.log(e)
    }
  }
  
useEffect(()=>{
  fetchApi();
},[])
  return (
    <>
      <div className="upper">
        <strong className='light'>🔴</strong>
        <h1>Covid Tracker</h1>
      </div>

      <div className='main-div'>


        <div className="box1">
          <div className='internal'>
            <p>our</p>
            <h2>COUNTRY</h2>
          </div>
          <div className='country'>
            <h1>INDIA</h1>
          </div>
        </div>



        <div className="box2">
          <div className='internal'>
            <p>Total</p>
            <h2>RECOVERED</h2>
          </div>
          <div className='country'>
            <h1>{data.recovered}</h1>
          </div>
        </div>


        <div className="box3">
          <div className='internal'>
            <p>Total</p>
            <h2>CONFIRMED</h2>
          </div>
          <div className='country'>
            <h1>{data.confirmed}</h1>
          </div>
        </div>

      </div>





      <div className='main-div1'>


        <div className="box4">
          <div className='internal'>
            <p>Total</p>
            <h2>DEATHS</h2>
          </div>
          <div className='country'>
            <h1>{data.deaths}</h1>
          </div>
        </div>


    
      <div className="box5">
      <div className='internal'>
            <p>Total</p>
            <h2>ACTIVE</h2>
          </div>
          <div className='country'>
            <h1>{data.active}</h1>
          </div>
      </div>
      <div className="box6">
      <div className='internal'>
            <p>Total</p>
            <h2>UPDATED</h2>
          </div>
          <div className='countrys'>
            <h1>{data.lastupdatedtime}</h1>
          </div>
      </div>
    </div>
    </>
  )
}

export default App;


