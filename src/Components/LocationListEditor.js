import LocationList from "./LocationList";
import LocationForm from "./LocationForm";

function LocationListEditor(props) {
    return (
        <>
            <div className="row">
                <div className="col-2"/>
                <div className="col-4">
                    <LocationForm props={props}/>
                </div>
                <div className="col-4 text-center">
                    <LocationList locationList={props.locationList}/>
                </div>
            </div>
        </>
    );
}

export default LocationListEditor;