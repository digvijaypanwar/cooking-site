import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import "./Create.css";

function Create() {
    const [title, setTitle] = useState("");
    const [method, setMethod] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [newIngredient, setNewIngredient] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null);
    const history = useHistory();

    const handleAdd = (ev) => {
        ev.preventDefault();
        const ing = newIngredient.trim();
        if (ing && !ingredients.includes(ing)) {
            setIngredients((prevIngredients) => [...prevIngredients, ing]);
        }
        setNewIngredient("");
        ingredientInput.current.focus();
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const doc = {
            title,
            ingredients,
            method,
            cookingTime: `${cookingTime} minutes`,
        };
        try {
            await projectFirestore.collection("recipes").add(doc);
            history.push("/");
        } catch (err) {
            console.log(err);
        }
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
                <label>
                    <span>Recipe Ingredients:</span>
                    <div className="ingredients">
                        <input
                            type="text"
                            onChange={(ev) => {
                                setNewIngredient(ev.target.value);
                            }}
                            value={newIngredient}
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className="btn">
                            add
                        </button>
                    </div>
                    <p>
                        Current Ingredients:{" "}
                        {ingredients.map((i) => (
                            <em key={i}>{i}, </em>
                        ))}
                    </p>
                </label>
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
