import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="switchers">
            <Button onClick={() => setTheme("light")}>Light Mode</Button>
            <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
            <Button onClick={() => setTheme("system")}>System</Button>
        </div>
    );
};

export default ThemeSwitcher;