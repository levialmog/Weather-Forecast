import {weatherStrings, windSpeedStrings} from "../Macros"
import {useEffect, useState} from "react";

/**
 * The function is a component which returns the weather forecast for the selected location.
 * @param props The properties that the component gets.
 * @returns {JSX.Element} The weather forecast for the selected location.
 * @constructor
 */
function WeatherForecast(props) {
    const [data, setData] = useState([])

    /**
     * The function gets a string which contains a number that represents a date and returns a date format string.
     * @param dateString The string which contains a number that represents the date.
     * @returns {string} the string format date.
     */
    const getDate = (dateString) => {
        let year  = dateString.substring(0, 4);
        let month = dateString.substring(4, 6);
        let day   = dateString.substring(6, 8);
        let temp  = new Date(year, month - 1, day);
        return temp.toDateString()
    }

    /**
     * The function creates the table rows with the weather forecast data only after the forecast state changes.
     */
    useEffect(()=>{
        const dataArray = props.forecast.dataseries
        for(let item = 0; item < dataArray.length; ++item){
            setData(data => [...data,
                <tr key={item}>
                    <th scope="row">{getDate(dataArray[item].date.toString())}</th>
                    <td>{weatherStrings[dataArray[item].weather]}</td>
                    <td>{`${dataArray[item].temp2m.min}°C to ${dataArray[item].temp2m.max}°C`}</td>
                    <td colSpan="2">{windSpeedStrings[dataArray[item].wind10m_max]}</td>
                </tr>])
        }
    }, [props.forecast])

    return (
        <div className="card">
            <img src={`https://www.7timer.info/bin/astro.php?%20lon=${props.longitude}&lat=${props.latitude}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`}
                 className="card-img-top" alt="WeatherForecast"/>
                <div className="card-body">
                    <h5 className="card-title">{props.forecast.name}</h5>
                    <div className="card-text">
                        <table className="table">
                            <thead>
                                <tr key={"thead"}>
                                    <th scope="col">Date</th>
                                    <th scope="col">Weather</th>
                                    <th scope="col">Temperatures</th>
                                    <th scope="col">Wind</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
}

export default WeatherForecast;