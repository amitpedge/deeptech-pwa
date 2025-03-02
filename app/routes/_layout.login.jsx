import { useState } from 'react';
import { Link, useNavigate } from '@remix-run/react';
import { useAuth } from '../context/AuthContext';

export function links() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate inputs
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      // Attempt login
      await login(email, password);
      navigate('/app'); // Navigate to app dashboard after login
    } catch (err) {
      setError(err.message || 'Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">Log In</h2>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button 
          type="submit" 
          className="auth-button"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Link to="/forgot-password" style={{ color: '#4a90e2', textDecoration: 'none', fontSize: '0.9rem' }}>
          Forgot Password?
        </Link>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
        Don't have an account?{' '}
        <Link to="/signup" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: '500' }}>
          Sign Up
        </Link>
      </div>
    </div>
  );
} 