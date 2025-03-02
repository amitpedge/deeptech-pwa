import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export function links() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}

export default function PublicLayout() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Add routes where you want to hide the header
  const hideHeaderRoutes = [
    '/login',
    '/signup',
    '/forgot-password',
  ];

  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  // Redirect authenticated users away from public routes
  useEffect(() => {
    if (isAuthenticated && (location.pathname === '/login' || location.pathname === '/signup')) {
      navigate("/app");
    }
  }, [isAuthenticated, navigate, location.pathname]);

  return (
    <div className="public-container">
      {shouldShowHeader && (
        <header className="public-header">
          <div className="left-section">
            <div className="logo" onClick={() => navigate('/')}>
              <span style={{ marginRight: '8px' }}>🔮</span>
              <span>1stock</span>
            </div>
          </div>
          <div className="right-section">
            <button className="login-button" onClick={() => navigate('/login')}>Login</button>
          </div>
        </header>
      )}

      <main className="public-content">
        <Outlet />
      </main>

      <footer className="public-footer">
        &copy; {new Date().getFullYear()} 1stock. All rights reserved.
      </footer>
    </div>
  );
} 