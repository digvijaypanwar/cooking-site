import { useState } from "react";
import "./Create.css";

function Create() {
    const [title, setTitle] = useState("");
    const [method, setMethod] = useState("");
    const [cookingTime, setCookingTime] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(title, method, cookingTime);
    };
    return (
        <div className="create">
            <h2 className="page-title">Add a New Recipe</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input
                        type="text"
                        onChange={(ev) => {
                            setTitle(ev.target.value);
                        }}
                        value={title}
                    />
                </label>
                {/* Ingredients go here */}
                <label>
                    <span>Recipe method:</span>
                    <textarea
                        onChange={(ev) => {
                            setMethod(ev.target.value);
                        }}
                        value={method}
                    />
                </label>

                <label>
                    <span>Cooking time (minutes):</span>
                    <input
                        type="number"
                        onChange={(ev) => {
                            setCookingTime(ev.target.value);
                        }}
                        value={cookingTime}
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    );
}
export default Create;
