import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import LocationListEditor from "./Components/LocationListEditor";
import {useState} from "react";
import Forecast from "./Components/Forecast";
//{"name":"Jerusalem", "latitude":"10", "longitude":"12"}
function App() {
    const [locationList, setLocationList] = useState([]);
    const [errors, setErrors] = useState({});

    const validateLocation = (newLocation) => {
        setErrors({});

        if(!newLocation.name) {
            setErrors(errors => [{...errors, "name":{"isValid":false, "errorMessage":"Name is required"}}]);
        }
        else{
            let isNotExist = true;
            locationList.forEach((location) => {
                if (location.name === newLocation.name) {
                    setErrors(errors => ({...errors, "name":{"isValid":false, "errorMessage":"This location is already exist"}}));
                    isNotExist = false;
                }
            });

            if(isNotExist) {
                setErrors(errors => ({...errors, "name":{"isValid":true, "errorMessage":""}}));
            }
        }

        if(!newLocation.latitude) {
            setErrors(errors => ({...errors, "latitude":{"isValid":false, "errorMessage":"Latitude is required"}}));
        }
        else if(parseInt(newLocation.latitude) > 90 || parseInt(newLocation.latitude) < -90) {
            setErrors(errors => ({...errors, "latitude":{"isValid":false,
                                                    "errorMessage":"Latitude must be a decimal between -90.0 and 90.0"}}));
        }
        else {
            setErrors(errors => ({...errors, "latitude":{"isValid":true, "errorMessage":""}}));
        }

        if(!newLocation.longitude) {
            setErrors(errors => ({...errors, "longitude":{"isValid":false, "errorMessage":"Longitude is required"}}));
        }
        else if(parseInt(newLocation.longitude) > 180 || parseInt(newLocation.longitude) < -180) {
            setErrors(errors => ({...errors, "longitude":{"isValid":false,
                                                    "errorMessage":"Latitude must be a decimal between -180.0 and 180.0"}}));
        }
        else {
            setErrors(errors => ({...errors, "longitude":{"isValid":true, "errorMessage":""}}));
        }
    }

    const addLocation = (newLocation) => {
        setLocationList([...locationList, newLocation])
    }

    const deleteLocation = (locationName) => {
        for (let location of locationList){
            if(location.name === locationName){
                locationList.splice(locationList.indexOf(location), 1);
                break;
            }
        }
    }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}>
            <Route index element={<Forecast locationList={locationList} deleteLocation={deleteLocation}/>}/>
            <Route path="/locationListEditor"
                   element={<LocationListEditor locationList={locationList} validateLocation={validateLocation}
                                                addLocation={addLocation} deleteLocation={deleteLocation}
                                                errors={errors}/>}/>
            {/*<Route path="*" element={<NoPage/>}/>*/}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
