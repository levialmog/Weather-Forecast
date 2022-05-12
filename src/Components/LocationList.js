import {useEffect, useState} from "react";

/**
 * The function is a component which returns the location list.
 * @param props The properties that the component gets.
 * @returns {JSX.Element} The location list.
 * @constructor
 */
function LocationList(props) {
    const [locationListItems, setLocationListItems] = useState([])

    /**
     * The function activates the selected location in the list, and saves its name in the selectedLocationName state.
     * @param item The selected location.
     */
    const activateItem = (item) => {
        if(item.tagName !== "LI"){
            item = item.parentElement;
        }
        const listItems = document.getElementsByTagName("li");
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("active");
        }
        item.classList.add("active");
        props.setSelectedLocationName(item.firstElementChild.innerHTML)
    }

    /**
     * The function builds the location list only after the locationList state changes.
     */
    useEffect(() => {
        setLocationListItems([])
        for (const [key, value] of Object.entries(props.locationList)) {
            setLocationListItems(locationListItems => [...locationListItems,
                <li key={key} className={"list-group-item"}
                    onClick={props.isClickable ? (event) => {
                        activateItem(event.target)
                    } : undefined}>
                    <span className="fw-bold">{key}</span> (Latitude={value.latitude} Longitude={value.longitude})
                    <div>{props.isErasable ? <button className="deleteButton btn btn-danger"
                                                     onClick={() => props.deleteLocation(key)}>Delete</button> : undefined}</div>
                </li>])
        }
    }, [props.locationList])

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Locations</h3>
                <p className={Object.keys(props.locationList).length === 0 ? "" : "d-none"}>No locations yet...</p>
                <ul className="list-group">
                    {locationListItems}
                </ul>
            </div>
        </div>
    );
}

export default LocationList;