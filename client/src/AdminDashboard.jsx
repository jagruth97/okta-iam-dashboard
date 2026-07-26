import { useOktaAuth } from '@okta/okta-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (authState && authState.isAuthenticated) {
      // oktaAuth.getUser().then((info) => setUserInfo(info));
      setUserInfo(authState.idToken.claims);
    }
  }, [authState, oktaAuth]);

  if (!authState || !authState.isAuthenticated) {
    return <div style={{ padding: '20px' }}>Please log in to access this page.</div>;
  }

  if (!userInfo) {
    return <div style={{ padding: '20px' }}>Verifying permissions...</div>;
  }

  // RBAC LOGIC: Check if the user's groups array includes our Admin group
  const isAdmin = userInfo.groups && userInfo.groups.includes('App_Dashboard_Admin');

  if (!isAdmin) {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2 style={{ color: '#d9534f' }}>403 - Access Denied</h2>
        <p>Your account (<strong>{userInfo.email}</strong>) does not have the required permissions to view this secure area.</p>
        <p>Required Group: <code>App_Dashboard_Admin</code></p>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#5cb85c' }}>SOC Admin Enclave</h2>
      <p>Authentication successful. Welcome to the secure dashboard, <strong>{userInfo.name}</strong>.</p>
      <div style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
        <h4>Active Threat Telemetry (Simulated)</h4>
        <ul>
          <li>Endpoint: WIN-DESKTOP-01 | Status: Clean</li>
          <li>Endpoint: SRV-APP-04 | Status: Requires Investigation</li>
        </ul>
      </div>
      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default AdminDashboard;