import LocationList from "./LocationList";
import WeatherForecast from "./WeatherForecast";

function Forecast(props) {
    return (
        <div className="row text-center">
            <div className="col-6">
                <LocationList locationList={props.locationList} deleteLocation={props.deleteLocation} isErasable={false}/>
            </div>

            <div className="col-6">
                <WeatherForecast />
            </div>
        </div>
    );
}

export default Forecast;