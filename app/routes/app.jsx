import { Outlet, useNavigate, useLocation } from "@remix-run/react";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export function links() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}

export default function AppLayout() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showSignOut, setShowSignOut] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Protect all app.* routes
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showSignOut && !event.target.closest('.profile-section')) {
        setShowSignOut(false);
      }
      if (showMenu && !event.target.closest('.side-menu') && !event.target.closest('.hamburger-button')) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSignOut, showMenu]);

  // Close dropdowns when changing routes
  useEffect(() => {
    setShowSignOut(false);
    setShowMenu(false);
  }, [location.pathname]);

  const toggleSideMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSignOut = () => {
    logout();
    setShowSignOut(false);
    setShowMenu(false);
    navigate('/login');
  };

  if (!isAuthenticated) {
    return null; // or a loading spinner
  }

  return (
    <div className="container">
      <header className="header">
        <div className="left-section">
          <div className="menu-icon" onClick={toggleSideMenu}>
            <span>☰</span>
          </div>
          <div className="logo" onClick={() => navigate('/app')}>
            <span style={{ marginRight: '8px' }}>🔮</span>
            <span>1stock</span>
          </div>
        </div>
        <div className="profile-section">
          <div 
            onClick={() => setShowSignOut(!showSignOut)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              padding: '5px 10px',
              borderRadius: '4px'
            }}
          >
            <div className="profile-avatar-small">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <span style={{ marginLeft: '8px', color: 'white' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
            </span>
          </div>
          {showSignOut && (
            <div className="sign-out-dropdown">
              <div onClick={() => navigate('/app/profile')}>Profile</div>
              <div onClick={handleSignOut}>Sign Out</div>
            </div>
          )}
        </div>
      </header>

      {showMenu && (
        <>
          <div className="menu-overlay" onClick={toggleSideMenu}></div>
          <div className="side-menu">
            <div className="menu-header">Menu</div>
            <div className="menu-items">
              <div className="menu-item" onClick={() => { navigate('/app'); toggleSideMenu(); }}>
                Dashboard
              </div>
              <div className="menu-item" onClick={() => { navigate('/app/profile'); toggleSideMenu(); }}>
                Profile
              </div>
              <div className="menu-item" onClick={() => { handleSignOut(); toggleSideMenu(); }}>
                Sign Out
              </div>
            </div>
          </div>
        </>
      )}

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} 1stock. All rights reserved.
      </footer>
    </div>
  );
} 