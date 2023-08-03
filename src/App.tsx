import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBox from "./componets/SearchBox";
import { createContext } from "react";
import Output from "./container/Output";

export const ThemeContext = createContext<any | null>(null);
const App = () => {
  const [cityname, setcityname] = useState<string>("");
  const [data, setdata] = useState<any>();
  // API weather
  const clickhendler = () => {
    const apyURL ="https://api.openweathermap.org/data/2.5/weather?q=" +cityname +"&appid=3bb9c8a13c3b2a62befb00e316e93990";
    axios
      .get(apyURL)
      .then((res) => {
        setdata(res.data);
        setcityname("");
      })
      .catch((err) => {
        console.log("err");
      });
    
  };
  return (
    <ThemeContext.Provider value={data}>
      <div className="container">
        <div className="container-fruid">
          <div>
            <SearchBox value={cityname} change={(e: any) => setcityname(e.target.value)} click={clickhendler} />
            <div className="w-40" style={{ padding: "60px" }}>
              <h1 style={{ fontSize: "40px", textAlign: "center" }}>Today</h1>
              <Output />
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
