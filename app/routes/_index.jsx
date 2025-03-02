import { redirect } from "@remix-run/node";
import { useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { useAuth } from "../context/AuthContext";

export default function Index() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // This is just a fallback in case the redirect doesn't happen immediately
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column',
      gap: '1rem'
    }}>
      <h1>1stock</h1>
      <p>Redirecting you to the appropriate page...</p>
    </div>
  );
} 