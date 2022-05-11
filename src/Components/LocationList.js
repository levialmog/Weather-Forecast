function LocationList(props) {
    const listItems = [];

    const deleteLocation = (name, button) => {
        props.deleteLocation(name)
        button.parentElement.remove()
    }

    const deleteButton = (name) => {
        if(props.isErasable) {
            return <button className="deleteButton btn btn-danger" onClick={(event) => deleteLocation(name, event.target)}>Delete</button>
        }
    }
    for (const [key, value] of Object.entries(props.locationList)){
        listItems.push(
            <li className="list-group-item">
                {key}
                {deleteButton(key)}
            </li>
        );
    }
    // props.locationList.forEach((listItem) => {
    //     listItems.push(
    //         <li className="list-group-item">
    //             {props.locationList.keys(listItem)}
    //             {deleteButton(props.locationList.keys(listItem))}
    //         </li>
    //     );
    // });

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Locations</h3>
                <p className="d-none">No locations yet...</p>
                <ul className="list-group list-group-flush">
                    {listItems}
                </ul>
            </div>
        </div>
    );
}

export default LocationList;