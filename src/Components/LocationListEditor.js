import LocationList from "./LocationList";
import LocationForm from "./LocationForm";

/**
 * The function is a component which returns the location list editor.
 * @param props The properties that the component gets.
 * @returns {JSX.Element} The location list editor.
 * @constructor
 */
function LocationListEditor(props) {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <LocationForm validateLocation={props.validateLocation}
                                  addLocation={props.addLocation}
                                  errors={props.errors}/>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <LocationList locationList={props.locationList} deleteLocation={props.deleteLocation}
                                  isErasable={true} isClickable={false}/>
                </div>
            </div>
        </>
    );
}

export default LocationListEditor;