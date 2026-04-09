import { FiMail, FiUser } from "react-icons/fi";
import FormCard from "./formCard";
import FormField from "./formField";
import PasswordField from "./passwordField";
import SubmitButton from "./submitButton";
import { useAuthVisibility } from "@/lib/stores/useShowAuthPages";
import { useAuthStore } from "@/lib/stores/useAuthStore";
import { Button } from "@base-ui/react/button";
import api from "@/lib/api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";

export default function AuthForm() {
  const mode = useAuthVisibility((state) => state.mode);
  const toggleMode = useAuthVisibility((state) => state.toggleMode);
  const setSession = useAuthStore((state) => state.setSession);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate()

  const isLogin = mode === "login";

  useEffect(() => {
    setMsg("");
  }, [mode]);

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await api.post("/users", {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confPassword: formData.get("confirmPassword"),
      });

      toast.success(response.data.message)
      toggleMode();
    } catch (error: any) {
      setMsg(error.response.data.message);
    }
  }
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await api.post("/login", {
        email: formData.get("email"),
        password: formData.get("password"),
      });
      const accessToken = response.data?.data?.accessToken;
      if (accessToken) {
        setSession(accessToken);
      }
      toast.success(response.data.message)
      navigate("/dashboard", { replace: true })
    } catch (error: any) {
      setMsg(error.response?.data?.message || "Network error. Please try again.");
    }
  }

  return (
    <FormCard
      title={isLogin ? "Sign in" : "Register"}
      description={
        isLogin
          ? "Sign in to your account and explore a world of possibilities. Your journey begins here."
          : "Register an account and explore a world of possibilities. Your journey begins here."
      }
      imageSrc="https://readymadeui.com/login-image.webp"
      imageAlt="login image"
      imagePosition="right"
      footer={
        <p className="text-sm text-center text-slate-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Button
            type="button"
            onClick={toggleMode}
            className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap cursor-pointer"
          >
            {isLogin ? "Register here" : "Login here"}
          </Button>
        </p>
      }
    >
      {msg &&
        <div className="w-full">
          <Badge variant="destructive" className="py-4 w-full mb-4 rounded-lg border border-red-500">{msg}</Badge>
        </div>
      }
      <form key={mode} onSubmit={isLogin ? login : register} className="space-y-4">
        {!isLogin && (
          <FormField
            label="Name"
            name="name"
            type="text"
            required
            placeholder="Enter name"
            icon={FiUser}
            iconPosition="right"
          />
        )}

        <FormField
          label="Email"
          name="email"
          type="email"
          required
          placeholder="Enter email"
          icon={FiMail}
          iconPosition="right"
        />

        <PasswordField
          label="Password"
          name="password"
          required
          placeholder="Enter password"
          fieldKey={isLogin ? "login-password" : "register-password"}
          iconPosition="right"
        />

        {!isLogin && (
          <PasswordField
            label="Confirm Password"
            name="confirmPassword"
            required
            placeholder="Confirm password"
            fieldKey="register-confirm-password"
            iconPosition="right"
          />
        )}

        <div className="pt-1">
          <SubmitButton>{isLogin ? "Sign in" : "Register"}</SubmitButton>
        </div>
      </form>
    </FormCard>
  );
}
