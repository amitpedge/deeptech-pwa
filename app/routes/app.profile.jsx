import { useState } from 'react';
import { useNavigate } from '@remix-run/react';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user, updateProfile, updatePassword, logout } = useAuth();
  const navigate = useNavigate();
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [profileMessage, setProfileMessage] = useState('');
  const [profileError, setProfileError] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const [loadingProfile, setLoadingProfile] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setProfileMessage('');
    setProfileError('');
    setLoadingProfile(true);

    try {
      // Validate inputs
      if (!name || !email) {
        throw new Error('Name and email are required');
      }

      // Update profile
      await updateProfile(name, email);
      setProfileMessage('Profile updated successfully');
    } catch (err) {
      setProfileError(err.message || 'Failed to update profile');
    } finally {
      setLoadingProfile(false);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setPasswordMessage('');
    setPasswordError('');
    setLoadingPassword(true);

    try {
      // Validate inputs
      if (!currentPassword || !newPassword || !confirmPassword) {
        throw new Error('All password fields are required');
      }

      if (newPassword !== confirmPassword) {
        throw new Error('New passwords do not match');
      }

      if (newPassword.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      // Update password
      await updatePassword(currentPassword, newPassword);
      setPasswordMessage('Password updated successfully');
      
      // Clear password fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setPasswordError(err.message || 'Failed to update password');
    } finally {
      setLoadingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      try {
        // Delete account logic would go here
        await logout();
        navigate('/login');
      } catch (err) {
        alert('Failed to delete account: ' + (err.message || 'Unknown error'));
      }
    }
  };

  return (
    <div className="profile-container">
      <h1>Profile Settings</h1>
      
      <div className="profile-section">
        <h2>Update Profile</h2>
        {profileMessage && <div className="success-message">{profileMessage}</div>}
        {profileError && <div className="error-message">{profileError}</div>}
        
        <form onSubmit={handleProfileUpdate}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              disabled // Email changes often require verification
            />
          </div>
          
          <button 
            type="submit" 
            className="update-button"
            disabled={loadingProfile}
          >
            {loadingProfile ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
      
      <div className="profile-section">
        <h2>Change Password</h2>
        {passwordMessage && <div className="success-message">{passwordMessage}</div>}
        {passwordError && <div className="error-message">{passwordError}</div>}
        
        <form onSubmit={handlePasswordUpdate}>
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Current password"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
            />
          </div>
          
          <button 
            type="submit" 
            className="update-button"
            disabled={loadingPassword}
          >
            {loadingPassword ? 'Updating...' : 'Change Password'}
          </button>
        </form>
      </div>
      
      <div className="profile-section danger-zone">
        <h2>Danger Zone</h2>
        <p>Once you delete your account, there is no going back. Please be certain.</p>
        <button 
          onClick={handleDeleteAccount}
          className="delete-account-button"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
} 