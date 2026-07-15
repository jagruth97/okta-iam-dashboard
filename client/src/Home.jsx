import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";

function Home() {
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
        // User is no authenticated, clear user info
      setUserInfo(null);
    } else {
        // User is logged in, get user info & fetch their claims from Okta token
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      });
    }
}, [authState, oktaAuth]);

const login = async () => oktaAuth.signInWithRedirect();
const logoout = async () => oktaAuth.signOut();

if(!authState) {
  return <div>Loading authentication state...</div>;
}

returnn (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Welcome to the Okta IAM Dashboard</h1>
        {!authState.isAuthenticated ? (
            <div>
                <p>Please log in to access your dashboard.</p>
                <button onClick={login} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>Login</button>
            </div>
        ) : (
            <div>
                <p>Welcome, <strong>{userInfo?.name || "User"}</strong>!</p>
                <p>Here arethe claims returned by Okta in your ID Token:</p>
                <pre style={{ background: "#f4f4f4", padding: '15px', borderRadius: '5px', overflowX: 'auto'}}>
                    {JSON.stringify(userInfo, null, 2)}
                </pre>
                <button onClick={logoout} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>Logout</button>
            </div>
        )}
    </div>
    );
};

export default Home;