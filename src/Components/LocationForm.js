import {useState} from "react";

function LocationForm(props) {
    let nameError, latitudeError, longitudeError;

    const [inputs, setInputs] = useState({});

    const isInvalid = (input, inputName) =>{
        if(input.isValid){
            document.getElementById(inputName).classList.remove("is-invalid")
        }
        else{
            document.getElementById(inputName).classList.add("is-invalid")
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.validateLocation(inputs);

        nameError = props.errors["name"]["errorMessage"];
        latitudeError = props.errors["latitude"]["errorMessage"];
        longitudeError = props.errors["longitude"]["errorMessage"];

        isInvalid(props.errors.name, "name");
        isInvalid(props.errors.latitude, "latitude");
        isInvalid(props.errors.longitude, "longitude");

        if(props.errors.name.isValid && props.errors.latitude.isValid && props.errors.longitude.isValid){
            props.addLocation(inputs)
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Add Location</h5>
                <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            id="name"
                            value={inputs.name || ""}
                            onChange={handleChange}
                            required/>
                        <div className="invalid-feedback">{nameError}</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="latitude" className="form-label">Latitude</label>
                        <input
                            className="form-control"
                            type="number"
                            name="latitude"
                            id="latitude"
                            value={inputs.latitude || ""}
                            onChange={handleChange}
                            required/>
                        <div className="invalid-feedback">{latitudeError}</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="longitude" className="form-label">Longitude</label>
                        <input
                            className="form-control"
                            type="number"
                            name="longitude"
                            id="longitude"
                            value={inputs.longitude || ""}
                            onChange={handleChange}
                            required/>
                        <div className="invalid-feedback">{longitudeError}</div>
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