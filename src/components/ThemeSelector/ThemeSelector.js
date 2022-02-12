import { useTheme } from "../../hooks/useTheme";
import modeIcon from "../../assets/mode-icon.svg";
import "./ThemeSelector.css";

const themeColors = ["#58249c", "#249c6b", " #b70233"];
function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === "light" ? "dark" : "light");
    };
    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                    src={modeIcon}
                    onClick={toggleMode}
                    alt="modeIcon"
                    style={{
                        filter:
                            mode === "dark" ? "invert(100%)" : "invert(20%)",
                    }}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map((color) => (
                    <div
                        key={color}
                        className=""
                        onClick={() => {
                            changeColor(color);
                        }}
                        style={{ background: color }}
                    />
                ))}
            </div>
        </div>
    );
}
export default ThemeSelector;
