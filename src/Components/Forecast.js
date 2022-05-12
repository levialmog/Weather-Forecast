import LocationList from "./LocationList";
import WeatherForecast from "./WeatherForecast";
import {useEffect, useState} from "react";
import errorImg from "../assets/errorImg.png"
import LoadingGif from "./LoadingGif";
import weatherImage from "../assets/WeatherImg.png";
import {validationErrors} from "../Macros";

/**
 * The function is a component which returns the forecast page.
 * @param props The properties that the component gets.
 * @returns {JSX.Element} The forecast page.
 * @constructor
 */
function Forecast(props) {
    const [selectedLocationName, setSelectedLocationName] = useState("");
    const [selectedLocation, setSelectedLocation] = useState({});
    const [forecast, setForecast] = useState({})
    const [gif, setGif] = useState(null);

    /**
     * The function sets the state of the selected location.
     */
    const getSelectedLocation = () => {
        setSelectedLocation({name: selectedLocationName, ...props.locationList[selectedLocationName]});
    }

    /**
     * The function checks the status of the response received from the fetch.
     * @param response - the response received from the fetch.
     * @returns {Promise<never>|Promise<unknown>} - If the status of the response is valid then the function will return
     *                                             the response, and if it is not valid then it will return an error
     */
    function status(response) {
        if (response.status >= 200 && response.status <= 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    /**
     * The function performs fetch to get the data of the forecast of the selected location only after the
     * selectedLocation state changes.
     */
    useEffect(() => {
        setForecast({})
        if(selectedLocationName) {
            props.setErrors({...props.errors, fetchError:""})
            setGif(<LoadingGif/>);
            fetch(`https://www.7timer.info/bin/api.pl?lon=${selectedLocation.longitude}&lat=${selectedLocation.longitude}&product=civillight&output=json`)
                .then(status)
                .then(function (response) {
                    return response.json();
                }).then(function (data) {
                    setForecast({name: selectedLocationName, ...data});
                    setGif(null);
            }).catch(function (error) {
                setGif(null);
                props.setErrors({...props.errors, fetchError:validationErrors.fetchError});
            });
        }
    }, [selectedLocation]);

    return (
        <div className="row text-center">
            <div className="col-12 col-lg-4">
                <LocationList locationList={props.locationList} deleteLocation={props.deleteLocation}
                              isErasable={false} isClickable={true}
                              setSelectedLocationName={setSelectedLocationName}/>
                <button className="btn btn-outline-primary m-3" onClick={getSelectedLocation}>Show Forecast</button>
            </div>
            <div className="col-12 col-lg-8">
                <div>{Object.keys(forecast).length === 0 && props.errors.fetchError ? <>
                    <img src={errorImg} className="img-responsive mx-auto d-block" alt="ErrorImage"/>
                    <h6>{props.errors.fetchError}</h6>
                    </> : undefined}</div>
                <div>{Object.keys(forecast).length === 0 ? (gif != null ? undefined :
                    <><img src={weatherImage} alt="WeatherImage" className="img-responsive mx-auto d-block" width="280" height="280"/>
                        <h4>Welcome to Our Weather Forecast Site</h4>
                        <h5>By Almog Levi & Lee Kol Levi</h5></>)
                    : <WeatherForecast forecast={forecast}/>}</div>
                <div>{gif}</div>
            </div>
        </div>
    );
}

export default Forecast;