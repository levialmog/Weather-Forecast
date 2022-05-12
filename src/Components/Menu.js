import {Link, Outlet} from "react-router-dom";

/**
 * The function is a component which returns the apps menu.
 * @param props The properties that the component gets.
 * @returns {JSX.Element} The apps menu.
 * @constructor
 */
function Menu(props) {
    return (
        <>
            <div className="row mt-2 text-center">
                <div className="col">
                    <h4 className="bg-primary bg-opacity-25 rounded p-2 text-primary">My Weather Forecast</h4>
                </div>
            </div>

            <div className="row mb-4 text-center">
                <div className="col">
                    <nav>
                        <Link to="/" className="btn btn-primary m-1" onClick={() => props.setErrors({})}>Forecast</Link>
                        <Link to="/locationListEditor" className="btn btn-primary m-1" onClick={() => props.setErrors({})}>Locations</Link>
                    </nav>
                </div>
            </div>

            <Outlet/>
        </>
    );
}

export default Menu;