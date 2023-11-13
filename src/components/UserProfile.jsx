import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Contact from "./Contact";
import LogoutButton from "./LogoutButton";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading!</div>;
  }
  return (  
    isAuthenticated && (
      <div className="formProfile" >
        <div className="formUser">
          <img src={user.picture} className="formImage" />
          <h2> Xin Chào {user.name} !</h2>
          <p> Email: {user.email}</p>
          <Contact />
        </div>
        <LogoutButton />
      </div>
    )
  );
};
export default UserProfile;
