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

    props.locationList.forEach((listItem) => {
        listItems.push(
            <li className="list-group-item">
                {listItem.name}
                {deleteButton(listItem.name)}
            </li>
        );
    });

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