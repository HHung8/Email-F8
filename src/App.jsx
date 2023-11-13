// App.js
import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import UserProfile from "./components/UserProfile";

function App() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="App">
      {isAuthenticated ? null : <LoginButton onLogin={handleLogin} />}
      <UserProfile />
    </div>
  );
}

export default App;
