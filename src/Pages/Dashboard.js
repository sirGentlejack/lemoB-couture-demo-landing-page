import React, { useState, useEffect } from "react";
import defaultProfileImage from "../images/profile-svgrepo-com.svg";

export default function Dashboard({ user }) {
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user && user.photoURL) {
      setPhotoURL(user.photoURL);
    } else {
      // If 'user' is null or 'photoURL' is not present, set a default image
      setPhotoURL(defaultProfileImage);
    }
  }, [user]);

  function getUserGreeting(user) {
    if (user && user.displayName) {
      const userFirstName = user.displayName.split(" ")[0];
      return `Hey ${userFirstName}, how are you?`;
    } else {
      return "Hey friend, how are you?";
    }
  }

  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>
      <div className="app-container">
        <div className="user-section">
          <img src={photoURL} alt="" className="user-profile-picture" />
          <h2 className="user-greeting">{getUserGreeting(user)}</h2>
        </div>
        <div className="post-section">
          <textarea placeholder="write down how you are feeling..."></textarea>
          <button>Post </button>
        </div>
      </div>
    </div>
  );
}
