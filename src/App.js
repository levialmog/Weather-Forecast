import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import LocationListEditor from "./Components/LocationListEditor";
import {useState} from "react";
import Forecast from "./Components/Forecast";
import NoPage from "./Components/NoPage";
import {validationErrors} from "./Macros";

/**
 * The function returns the main page of the app. It contains the list of locations, the list of errors,
 * and the functions that manage them. The component contains routes which help navigate between the apps pages.
 * @returns {JSX.Element} The main page of the app.
 * @constructor
 */
function App() {
    const [locationList, setLocationList] = useState({});
    const [errors, setErrors] = useState({});

    /**
     * The function performs validation on the input which the user has entered in a field of the form.
     * If it's invalid it puts an appropriate error in the state of the errors.
     * @param newLocation Holds the values of the form inputs.
     * @param inputName The specific field that is checked.
     * @param errorObj Holds the errors.
     * @param isValidContent Condition for testing on the input.
     */
    const validate = (newLocation, inputName, errorObj, isValidContent) => {
        if(!newLocation[inputName]) {
            errorObj[inputName] = `${inputName} is required`;
        }
        else if(isValidContent){
            errorObj[inputName] = validationErrors.inputErrors[inputName];
        }
        else{
            errorObj[inputName] = "";
        }
    }

    /**
     * The function receives a number, an infimum and a supremum and checks if the number is not in the desired range.
     * @param inputNumber The number to be checked.
     * @param infimum The infimum.
     * @param supremum The supremum.
     * @returns {boolean} True- if the number is not in the desired range, False- is in the desired range.
     */
    const isNotInRange = (inputNumber, infimum, supremum) => {
        return inputNumber > supremum || inputNumber < infimum
    }

    /**
     * The function accepts the new location values that the user entered into the form and performs validation on them
     * and inserts errors if there is to the errors state.
     * @param newLocation The new location values that the user entered into the form.
     */
    const validateLocation = (newLocation) => {
        setErrors({});
        const errorObj = {};

        validate(newLocation, "name", errorObj, newLocation.name in locationList);
        validate(newLocation, "latitude", errorObj, isNotInRange(parseFloat(newLocation.latitude), -90, 90));
        validate(newLocation, "longitude", errorObj, isNotInRange(parseFloat(newLocation.longitude), -180, 180));

        setErrors({...errors, ...errorObj})
    }

    /**
     * The function adds the new location to the list of locations.
     * @param newLocation The new location values that the user entered.
     */
    const addLocation = (newLocation) => {
        setLocationList({...locationList, [newLocation.name]:{latitude:newLocation.latitude, longitude:newLocation.longitude}})
    }

    /**
     * The function gets a name of a location and deletes it from the location list.
     * @param locationName The name of the location to be deleted.
     */
    const deleteLocation = (locationName) => {
        const oldLocationList = Object.assign({}, locationList);
        delete oldLocationList[locationName];
        setLocationList(oldLocationList);
    }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu setErrors={setErrors}/>}>
            <Route index element={<Forecast locationList={locationList} deleteLocation={deleteLocation}
                                            setErrors={setErrors} errors={errors}/>}/>
            <Route path="/locationListEditor"
                   element={<LocationListEditor locationList={locationList} validateLocation={validateLocation}
                                                addLocation={addLocation} deleteLocation={deleteLocation}
                                                errors={errors}/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;