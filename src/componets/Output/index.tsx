import React, { useCallback, useContext } from 'react'
import { ThemeContext } from '../../App'
import { TiWeatherCloudy } from "react-icons/ti";
import { BsCloudLightningRain } from "react-icons/bs";

const Output = (props:any) => {

    const data:any = useContext(ThemeContext)
    return (
    <div>
      <div className="card">
              <h1>{data?.name}</h1>
              <div style={{ display: "flex" }}>
                <h2 style={{ fontSize: "50px", margin: "0" }}>
                  {parseInt(data?.main?.temp) - 271}°C
                </h2>
                {data?.weather[0].main === "Rain" ? (
                  <BsCloudLightningRain
                    style={{ fontSize: "60px", margin: "0px 20px" }}
                  />
                ) : (
                  <TiWeatherCloudy
                    style={{ fontSize: "60px", margin: "0px 20px" }}
                  />
                )}
              </div>
                  <h2>Wind {data?.wind.speed}km/h</h2>
              <h3>{props.date}</h3>
              <h3>{props.day}</h3>
            </div>
    </div>
  )
}

export default Output
