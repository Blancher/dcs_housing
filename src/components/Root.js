import {Outlet} from "react-router-dom";
import NavBar from "./NavBar";

export default function Root() {
    return (
        <>
            <header id="title">
                <h1>DCS Sustainable Housing</h1>
                <NavBar/>
            </header>
            <Outlet/>
        </>
    );
}
