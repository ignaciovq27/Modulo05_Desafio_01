import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className="text-black ms-3 text-decoration-underline">
                        Home
                    </NavLink>
                </li>

                <li><NavLink
                    to="/about"
                    className="text-black ms-3 text-decoration-underline">
                    About
                </NavLink></li>
                <li><NavLink
                    to="/contact"
                    className="text-black ms-3 text-decoration-underline">
                    Contact
                </NavLink></li>
            </ul>
        </>
    )
}