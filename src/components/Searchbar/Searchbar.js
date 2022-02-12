import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Searchbar.css";

function Searchbar() {
    const [term, setTerm] = useState("");
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = term.trim();
        if (query) {
            history.push(`/search?q=${term.trim()}`);
        }
        setTerm("");
    };
    return (
        <div className="searchbar">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search: </label>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => {
                        setTerm(e.target.value);
                    }}
                    value={term}
                    required
                />
            </form>
        </div>
    );
}
export default Searchbar;
