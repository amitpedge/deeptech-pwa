import { useState } from 'react';
import { Link, useNavigate } from '@remix-run/react';
import { useAuth } from '../context/AuthContext';

export function links() {
  return [{ rel: "stylesheet", href: "/styles/app.css" }];
}

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      // Validate input
      if (!email) {
        throw new Error('Please enter your email');
      }

      // Attempt password reset
      await resetPassword(email);
      setMessage('Check your email for password reset instructions');
      
      // Optionally redirect after a delay
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (err) {
      setError(err.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-card">
      <h2 className="auth-title">Reset Password</h2>

      {error && <div className="error-message">{error}</div>}
      {message && <div style={{ color: '#4caf50', marginBottom: '15px', textAlign: 'center' }}>{message}</div>}

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

        <button 
          type="submit" 
          className="auth-button"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Reset Password'}
        </button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.9rem' }}>
        Remember your password?{' '}
        <Link to="/login" style={{ color: '#4a90e2', textDecoration: 'none', fontWeight: '500' }}>
          Log In
        </Link>
      </div>
    </div>
  );
} 