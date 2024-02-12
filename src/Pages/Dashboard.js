import React, { useState, useEffect } from "react";
import { getAuth, updateProfile } from "firebase/auth";

export default function Dashboard({ user }) {
  const [photoURL, setPhotoURL] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [profileURL, setProfileURL] = useState("");

  const auth = getAuth();

  useEffect(() => {
    if (user && user.photoURL) {
      setPhotoURL(user.photoURL);
    } else {
      // If 'user' is null or 'photoURL' is not present, set a default image
      setPhotoURL(require("../images/profile-svgrepo-com.svg").default);
    }
  }, [user]);

  function showUserGreeting(element, user) {
    const displayName = user.displayName;

    if (displayName) {
      const userFirstName = displayName.split(" ")[0];

      element.textContent = `Hey ${userFirstName}, how are you?`;
    } else {
      element.textContent = `Hey friend, how are you?`;
    }
  }

  const h2Element = document.querySelector(".user-greeting");
  if (h2Element) {
    showUserGreeting(h2Element, user);
  }

  function authUpdateProfile() {
    // const displayName = document.querySelector("input[placeholder='Display Name']").value;
    // const photoURL = document.querySelector("input[placeholder='Profile Photo URL']").value;

    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: profileURL,
    })
      .then(() => {
        console.log("Profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating profile: ", error.message);
      });
  }

  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>
      <div className="app-container">
        <div className="user-section">
          <img src={photoURL} alt="" className="user-profile-picture" />
          <h2 className="user-greeting">friend </h2>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Profile Photo URL"
            value={profileURL}
            onChange={(e) => setProfileURL(e.target.value)}
          />
          <br />
          {/* <p>Signed in as <strong>{email}</strong></p> */}
          <button onClick={authUpdateProfile}>Update Profile</button>
        </div>
      </div>
    </div>
  );
}
