import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/lib/stores/useAuthStore";

interface PublicRouteProps {
  children: React.ReactNode;
}

export default function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated, isInitialized, refreshToken } = useAuthStore();

  useEffect(() => {
    if (!isInitialized) refreshToken();
  }, [isInitialized, refreshToken]);

  if (!isInitialized) return null;

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
}
