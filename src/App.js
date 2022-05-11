import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import LocationListEditor from "./Components/LocationListEditor";
import {useState} from "react";
import Forecast from "./Components/Forecast";
//{"name":"Jerusalem", "latitude":"10", "longitude":"12"}
function App() {
    const [locationList, setLocationList] = useState({});
    const [errors, setErrors] = useState({name:"", latitude:"", longitude:""});

    const validateLocation = (newLocation) => {
        if(!newLocation.name) {
            setErrors(oldErrors=>({...oldErrors, name:"Name is required"}));
        }
        else if(newLocation.name in locationList){
            setErrors(oldErrors => ({...oldErrors, name:"This location is already exist"}));
        }
        else{
            setErrors(oldErrors => ({...oldErrors, name:""}));
        }

        if(!newLocation.latitude) {
            setErrors({...errors, latitude:"Latitude is required"});
        }
        else if(parseFloat(newLocation.latitude) > 90 || parseFloat(newLocation.latitude) < -90) {
            setErrors({...errors, latitude:"Latitude must be between -90.0 and 90.0"});
        }
        else {
            setErrors({...errors, latitude:""});
        }

        if(!newLocation.longitude) {
            setErrors({...errors, longitude:"Longitude is required"});
        }
        else if(parseFloat(newLocation.longitude) > 180 || parseFloat(newLocation.longitude) < -180) {
            setErrors({...errors, longitude:"Longitude must be between -180.0 and 180.0"});
        }
        else {
            setErrors({...errors, longitude:""});
        }

        console.log(errors)
    }

    const addLocation = (newLocation) => {
        setLocationList({...locationList, [newLocation.name]:{latitude:newLocation.latitude, longitude:newLocation.longitude}})
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