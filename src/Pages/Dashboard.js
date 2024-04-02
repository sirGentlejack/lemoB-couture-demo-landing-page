import React, { useState, useEffect } from "react";
import defaultProfileImage from "../images/profile-svgrepo-com.svg";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Components/firebase"; // Assuming you've initialized Firebase somewhere

export default function Dashboard({ user }) {
  const [photoURL, setPhotoURL] = useState("");
  const [postBody, setPostBody] = useState("");

  useEffect(() => {
    if (user && user.photoURL) {
      setPhotoURL(user.photoURL);
    } else {
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

  async function handlePost() {
    if (postBody.trim() !== "") {
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          body: postBody
        });
        console.log("Document written with ID: ", docRef.id);
        // Clear the textarea
        setPostBody("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
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
          <textarea
            placeholder="write down how you are feeling..."
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          ></textarea>
          <button onClick={handlePost}>Post</button>
        </div>
      </div>
    </div>
  );
}
