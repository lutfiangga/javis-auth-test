import { create } from "zustand";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";

interface AuthState {
  token: string;
  name: string;
  initials: string;
  isAuthenticated: boolean;
  isInitialized: boolean;
  setSession: (accessToken: string) => void;
  refreshToken: (navigate?: (path: string) => void) => Promise<string | null>;
  logout: (navigate?: (path: string) => void) => Promise<void>;
}

const API_URL = import.meta.env.VITE_API_URL;

const getInitials = (fullName: string) => {
  if (!fullName) return "JD";
  const names = fullName.trim().split(" ");
  if (names.length === 0 || fullName === "") return "JD";
  if (names.length === 1) return names[0].substring(0, 2).toUpperCase();
  return (names[0][0] + names[names.length - 1][0]).toUpperCase();
};

export const useAuthStore = create<AuthState>((set) => ({
  token: "",
  name: "",
  initials: "JD",
  isAuthenticated: false,
  isInitialized: false,
  setSession: (accessToken) => {
    const decoded: any = jwtDecode(accessToken);
    set({
      token: accessToken,
      name: decoded.name,
      initials: getInitials(decoded.name),
      isAuthenticated: true,
      isInitialized: true,
    });
  },

  refreshToken: async () => {
    try {
      const response = await axios.get(`${API_URL}/token`, {
        withCredentials: true,
      });
      const accessToken = response.data.data.accessToken;
      const decoded: any = jwtDecode(accessToken);

      set({
        token: accessToken,
        name: decoded.name,
        initials: getInitials(decoded.name),
        isAuthenticated: true,
        isInitialized: true,
      });

      return accessToken;
    } catch (error) {
      set({
        token: "",
        name: "",
        initials: "JD",
        isAuthenticated: false,
        isInitialized: true,
      });
      return null;
    }
  },

  logout: async (navigate) => {
    try {
      const response = await axios.delete(`${API_URL}/logout`, {
        withCredentials: true,
      });
      toast.success(response.data.message || "Berhasil logout");
      set({ token: "", name: "", initials: "JD", isAuthenticated: false });
      if (navigate) navigate("/");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Logout gagal");
    }
  },
}));
