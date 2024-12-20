import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "sunset",
  setTheme: (theme) => {
    try {
      localStorage.setItem("chat-theme", theme);
      set({ theme });
    } catch (error) {
      console.log(error);
    }
  },
}));
