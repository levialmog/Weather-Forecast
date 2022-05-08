import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import LocationListEditor from "./Components/LocationListEditor";
import {useState} from "react";

function App() {
    const [locationList, setLocationList] = useState([]);

    function updateLocationList(location){
        setLocationList(oldList => [...oldList, location]);
    }

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}>
            {/*<Route index element={<Forecast/>}/>*/}
            <Route path="/locationListEditor" element={<LocationListEditor locationList={locationList} updateLocationList={updateLocationList}/>}/>
            {/*<Route path="*" element={<NoPage/>}/>*/}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
