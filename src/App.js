import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import { useTheme } from "./hooks/useTheme";
import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Search from "./pages/Search/Search";

function App() {
    const { mode } = useTheme();
    return (
        <div className={`App ${mode}`}>
            <BrowserRouter>
                <Navbar />
                <ThemeSelector />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/create">
                        <Create />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/recipes/:id">
                        <Recipe />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
