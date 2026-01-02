"use client";

import { useEffect } from "react";
import useMode from "@/context/useMode";

export function ClientInitializer() {
    const initialize = useMode((s) => s.initializeMode);
    const isInitialized = useMode((s) => s.isInitialized);

    useEffect(() => {
        if (!isInitialized) initialize();
    }, [isInitialized, initialize]);

    return null;
}
