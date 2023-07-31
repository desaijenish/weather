import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBox from "./componets/SearchBox";

import { createContext } from "react";
import Output from "./componets/Output";



 export const ThemeContext = createContext<any | null>(null);

function App() {
  
  const [cityname, setcityname] = useState<string>("");
  const [data, setdata] = useState<any>();
  const [currentDate, setCurrentDate] = useState("");
  const apikey = "";


  // date and time and day 

  useEffect(() => {
    const interval = setInterval(() => {
      var date = new Date().getDate(); 
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear(); 
      var hours = new Date().getHours(); 
      var min = new Date().getMinutes(); 
      var sec = new Date().getSeconds(); 
      setCurrentDate(
        date + "/" + month + "/" + year + "   " + hours + ":" + min + ":" + sec
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [currentDate]);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];



  // API weather

  const clickhendler = () => {
    const apyURL ="https://api.openweathermap.org/data/2.5/weather?q=" +cityname +"&appid=3bb9c8a13c3b2a62befb00e316e93990";
    axios
      .get(apyURL)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log("err");
      });
    setcityname("");
  };
  // console.log(data?.weather[0].main);


  return (
    <ThemeContext.Provider value={data}>
    <div className="container">
      <div className="container-fruid">
        <div>
          <SearchBox
            value={cityname}
            change={(e: any) => setcityname(e.target.value)}
            click={clickhendler}
          />
          <div className="w-40" style={{ padding: "60px" }}>
            <h1 style={{ fontSize: "40px", textAlign: "center" }}>Today</h1>
            <Output  date={currentDate} day={day}  />
          </div>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
