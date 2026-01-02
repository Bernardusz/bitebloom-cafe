import { create } from "zustand";

interface useSideBarType {
    isOpen: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
}

const useSidebar = create<useSideBarType>()((set, get) => ({
    isOpen: false,
    toggleSidebar: () => {
        if (get().isOpen === false) {
            get().openSidebar();
        } else {
            get().closeSidebar();
        }
    },
    closeSidebar: () => {
        set(() => ({
            isOpen: false,
        }));
    },
    openSidebar: () => {
        set(() => ({
            isOpen: true,
        }));
    },
}));

export default useSidebar;
