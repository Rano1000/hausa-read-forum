"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="sm" className="w-10 h-10 px-0">
                <span className="sr-only">Toggle theme</span>
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            className="w-10 h-10 px-0"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle theme"
        >
            {theme === "dark" ? (
                <Moon className="h-5 w-5 text-slate-100" />
            ) : (
                <Sun className="h-5 w-5 text-orange-500" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
