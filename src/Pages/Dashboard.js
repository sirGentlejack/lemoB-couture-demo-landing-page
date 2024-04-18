import React, { useState, useEffect } from "react";
import defaultProfileImage from "../images/profile-svgrepo-com.svg";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../Components/firebase"; // Assuming you've initialized Firebase somewhere
import love from "../images/love.jpeg";
import happy from "../images/happy.jpeg";
import sad from "../images/sad.jpeg";
import suprised from "../images/surprised.jpeg";

export default function Dashboard({ user }) {
  const [photoURL, setPhotoURL] = useState("");
  const [postBody, setPostBody] = useState("");
  const [selectedMood, setSelectedMood] = useState("");

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
    // Check if user exists and has a uid property
    if (user && user.uid && postBody.trim() !== "" && selectedMood) {
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          body: postBody,
          userId: user.uid, // Add the user's UID to the post
          createdAt: serverTimestamp(),
          mood: selectedMood
        });
        console.log("Document written with ID: ", docRef.id);
        // Clear the textarea
        setPostBody("");
        // Reset mood state
        setSelectedMood("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }else{
        console.error("User is null or does not have a UID property.");
      }
  }

  // select emoji
  function selectMood(mood) {
    setSelectedMood(mood);
  }

  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>
      <div className="app-container">
        <div className="user-section">
          <img src={photoURL} alt="" className="user-profile-picture" />
          <h2 className="user-greeting">{getUserGreeting(user)}</h2>
        </div>
        <div className="emoji">
          <button id="happy"  className={selectedMood === "happy" ? "selected-emoji" : "unselected-emoji"}  onClick={() => selectMood("happy")}>
            <img src={happy} alt="" />
            Happy
          </button>
          <button id="sad" className={selectedMood === "sad" ? "selected-emoji" : "unselected-emoji"} onClick={() => selectMood("sad")}>
            <img src={sad} alt="" />
            Sad
          </button>
          <button id="love" className={selectedMood === "love" ? "selected-emoji" : "unselected-emoji"} onClick={() => selectMood("love")}>
            <img src={love} alt="" />
            Love
          </button>
          <button id="surprised" className={selectedMood === "surprised" ? "selected-emoji" : "unselected-emoji"} onClick={() => selectMood("surprised")}>
            <img src={suprised} alt="" />
            Surprised
          </button>
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
