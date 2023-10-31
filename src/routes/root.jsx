import { Outlet } from "react-router-dom";
import NavMenu from "../components/navMenu";

export default function Root() {
   
    return (
        <>
            <div id="sidebar">
                <div className="text-blue-600 hover:text-blue-500">
                    SWAPI
                    <span className="text-gray-600">The Star Wars API</span>
                </div>
                <NavMenu/>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}