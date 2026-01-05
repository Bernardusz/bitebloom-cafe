import * as React from "react";

const XL_BREAKPOINT = 1280;

export function useIsBelowXl() {
    const [isBelowXl, setIsBelowXl] = React.useState<boolean | undefined>(
        undefined
    );

    React.useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${XL_BREAKPOINT - 1}px)`);
        const onChange = () => {
            setIsBelowXl(window.innerWidth < XL_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsBelowXl(window.innerWidth < XL_BREAKPOINT);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    return !!isBelowXl;
}
