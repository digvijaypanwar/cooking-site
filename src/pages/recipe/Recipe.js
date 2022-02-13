import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import { useTheme } from "../../hooks/useTheme";
import "./Recipe.css";
function Recipe() {
    const { mode } = useTheme();
    const { id } = useParams();
    const history = useHistory();

    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        setIsPending(true);

        projectFirestore
            .collection("recipes")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setRecipe(doc.data());
                    setIsPending(false);
                } else {
                    setIsPending(false);
                    setError("Could not find that recipe");
                }
            });
    }, [id]);
    useEffect(() => {
        if (error) {
            // history.push("/");
        }
    }, [error, history]);

    return (
        <div className={`recipe ${mode}`}>
            {error && <p className="error">{error}</p>}
            {isPending && <p className="loading">Loading...</p>}
            {recipe && (
                <>
                    <h2 className="page-title">{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to cook.</p>
                    <ul>
                        {recipe.ingredients.map((ing) => (
                            <li key={ing}>{ing}</li>
                        ))}
                    </ul>
                    <p className="method">{recipe.method}</p>
                </>
            )}
        </div>
    );
}
export default Recipe;
