"use client";

import useMode from "@/context/useMode";
import { Sun, Moon } from "lucide-react";

export default function ToggleMode() {
    const mode = useMode((state) => state.mode);
    const toggleMode = useMode((state) => state.toggleMode);
    return (
        <div className="flex w-20 items-center justify-center">
            {mode === "light" ? (
                <Sun
                    size={40}
                    className="text-foreground"
                    onClick={toggleMode}
                />
            ) : (
                <Moon
                    size={40}
                    className="text-foreground"
                    onClick={toggleMode}
                />
            )}
        </div>
    );
}
