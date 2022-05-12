import {useEffect, useState} from "react";

/**
 * The function is a component which returns the location form.
 * @param props The properties that the component gets.
 * @returns {JSX.Element} The location form.
 * @constructor
 */
function LocationForm(props) {
    const [inputs, setInputs] = useState({});

    /**
     * The function adds the new location to the location list only after the errors state changes.
     */
    useEffect(() => {
        if(Object.keys(props.errors).length !== 0) {
            if (!props.errors.name && !props.errors.latitude && !props.errors.longitude) {
                props.addLocation(inputs)
                const inputArray = document.getElementsByTagName("input");
                for(let input = 0; input < inputArray.length; ++input){
                    inputArray[input].value = "";
                }
                setInputs({});
            }
        }
    }, [props.errors])

    /**
     * The function handles a change in a form input. It saves the values of the input in the inputs state.
     * @param event The event.
     */
    const handleChange = (event) => {
        const name = event.target.name.trim();
        const value = event.target.value.trim();
        setInputs(values => ({...values, [name]: value}));
    }

    /**
     * The function validates the inputs of the location form.
     * @param event The event.
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        props.validateLocation(inputs);
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add Location</h5>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            className={"form-control" + (props.errors.name ? " is-invalid" : "")}
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            required/>
                        <div className="invalid-feedback">{props.errors.name}</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="latitude" className="form-label">Latitude</label>
                        <input
                            className={"form-control" + (props.errors.latitude ? " is-invalid" : "")}
                            type="number"
                            name="latitude"
                            id="latitude"
                            onChange={handleChange}
                            required/>
                        <div className="invalid-feedback">{props.errors.latitude}</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="longitude" className="form-label">Longitude</label>
                        <input
                            className={"form-control" + (props.errors.longitude ? " is-invalid" : "")}
                            type="number"
                            name="longitude"
                            id="longitude"
                            onChange={handleChange}
                            required/>
                        <div className="invalid-feedback">{props.errors.longitude}</div>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-primary">Add Location</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LocationForm;