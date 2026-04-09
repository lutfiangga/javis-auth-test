import { create } from "zustand";

type AuthMode = "login" | "register";

type AuthVisibilityState = {
  mode: AuthMode;
  setMode: (mode: AuthMode) => void;
  toggleMode: () => void;
  isVisible: (mode: AuthMode) => boolean;
};

export const useAuthVisibility = create<AuthVisibilityState>((set, get) => ({
  mode: "login",

  setMode: (mode) => set({ mode }),

  toggleMode: () =>
    set((state) => ({
      mode: state.mode === "login" ? "register" : "login",
    })),

  isVisible: (mode) => get().mode === mode,
}));