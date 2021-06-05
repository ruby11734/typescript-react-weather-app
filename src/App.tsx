import React from 'react';
import './App.css';
import Current from './components/Current';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities';
import MAIN_CITY from './constants/CityMap';



const App = () => {
  return (
    <div className="App">
		  <Current />
		  <OtherCities />
		  <Forecast id={MAIN_CITY[0].id}/>
    </div>
  );
}

export default App;
