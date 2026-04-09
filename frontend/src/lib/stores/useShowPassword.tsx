import { create } from "zustand";

type PasswordVisibilityState = {
  visibility: Record<string, boolean>;
  toggle: (key: string) => void;
  setVisible: (key: string, value: boolean) => void;
  isVisible: (key: string) => boolean;
};

export const usePasswordStore = create<PasswordVisibilityState>((set, get) => ({
  visibility: {},

  toggle: (key) =>
    set((state) => ({
      visibility: {
        ...state.visibility,
        [key]: !state.visibility[key],
      },
    })),

  setVisible: (key, value) =>
    set((state) => ({
      visibility: {
        ...state.visibility,
        [key]: value,
      },
    })),

  isVisible: (key) => !!get().visibility[key],
}));