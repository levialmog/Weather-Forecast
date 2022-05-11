import {useState} from "react";

function LocationForm(props) {
    const [inputs, setInputs] = useState({});

    const isInvalid = (error, inputName) =>{
        if(!error){
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

        isInvalid(props.errors.name, "name");
        isInvalid(props.errors.latitude, "latitude");
        isInvalid(props.errors.longitude, "longitude");

        if(!(props.errors.name && props.errors.latitude && props.errors.longitude)){
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
                            onChange={handleChange}
                            required/>
                        <div className="invalid-feedback">{props.errors.name}</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="latitude" className="form-label">Latitude</label>
                        <input
                            className="form-control"
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
                            className="form-control"
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