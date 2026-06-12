import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("arena-theme") as Theme;
        return savedTheme || "dark;"
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if(theme === "light"){
            root.classList.add("light");
        } else {
            root.classList.remove("light");
        }

        localStorage.setItem("arena-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used inside a ThemeProvider container element");
    return context;
}