import LocationList from "./LocationList";
import LocationForm from "./LocationForm";

function LocationListEditor(props) {
    return (
        <>
            <div className="row">
                <div className="col-2"/>
                <div className="col-4">
                    <LocationForm validateLocation={props.validateLocation}
                                  addLocation={props.addLocation}
                                  errors={props.errors}/>
                </div>
                <div className="col-4 text-center">
                    <LocationList locationList={props.locationList} deleteLocation={props.deleteLocation} isErasable={true}/>
                </div>
            </div>
        </>
    );
}

export default LocationListEditor;