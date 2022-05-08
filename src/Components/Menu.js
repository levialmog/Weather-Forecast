import {Link, Outlet} from "react-router-dom";
import {useState} from "react";

function Menu() {
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
                        <Link to="/" className="btn btn-primary m-1">Forecast</Link>
                        <Link to="/locationListEditor" className="btn btn-primary m-1">Locations</Link>
                    </nav>
                </div>
            </div>

            <Outlet/>
        </>
    );
}

export default Menu;