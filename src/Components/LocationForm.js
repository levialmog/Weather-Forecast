import {useState} from "react";

function LocationForm(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.locationList.forEach((listItem) => {
            if (listItem.name === inputs.name) {
                console.log("exists!!!")
            }
        });

        props.updateLocationList(inputs)
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Add Location</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                // value={inputs.name || ""}
                                onChange={handleChange}
                                required/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="latitude" className="form-label">Latitude</label>
                            <input
                                type="number"
                                name="latitude"
                                id="latitude"
                                value={inputs.latitude || ""}
                                onChange={handleChange}
                                required/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="longitude" className="form-label">Longitude</label>
                            <input
                                type="number"
                                name="longitude"
                                id="longitude"
                                value={inputs.longitude || ""}
                                onChange={handleChange}
                                required/>
                        </div>

                        <div className="text-center">
                            <input type="submit" className="btn btn-outline-primary">Add Location</input>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LocationForm;