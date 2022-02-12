import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";
function Navbar() {
    const { color } = useTheme();
    return (
        <div className="navbar" style={{ background: color }}>
            <nav>
                <Link to="/" className="brand">
                    <h1>Cooking Djay</h1>
                </Link>
                <Searchbar />
                <Link to="/create">Create Recipe</Link>
            </nav>
        </div>
    );
}
export default Navbar;
