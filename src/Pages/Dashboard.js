import React, { useState, useEffect } from "react";
import defaultProfileImage from "../images/profile-svgrepo-com.svg";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../Components/firebase";
import love from "../images/love.jpeg";
import happy from "../images/happy.jpeg";
import sad from "../images/sad.jpeg";
import suprised from "../images/surprised.jpeg";

export default function Dashboard({ user }) {
  const [photoURL, setPhotoURL] = useState("");
  const [postBody, setPostBody] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [postsEl, setPostsEl] = useState([]);

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
    if (user && user.uid && postBody.trim() !== "" && selectedMood) {
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          body: postBody,
          userId: user.uid,
          createdAt: serverTimestamp(),
          mood: selectedMood,
        });
        console.log("Document written with ID: ", docRef.id);
        setPostBody("");
        setSelectedMood("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.error("User is null or does not have a UID property.");
    }
  }

  function selectMood(mood) {
    setSelectedMood(mood);
  }

  function displayDate(firebaseDate) {
    const date = firebaseDate.toDate();

    const day = date.getDate();
    const year = date.getFullYear();

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[date.getMonth()];

    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${day} ${month} ${year} - ${hours}:${minutes}`;
  }

  async function fetchOnceAndRenderPostsFromDB() {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const fetchedPosts = [];
      querySnapshot.forEach((doc) => {
        fetchedPosts.push(doc.data());
      });
      setPostsEl(fetchedPosts);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  }

  function getMoodImage(mood) {
    switch (mood) {
      case "happy":
        return happy;
      case "sad":
        return sad;
      case "love":
        return love;
      case "surprised":
        return suprised;
      default:
        // Return a default image or handle the case where mood is undefined
        return defaultProfileImage;
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
        <div className="emoji">
          <button
            className={selectedMood === "happy" ? "selected-emoji" : "unselected-emoji"}
            onClick={() => selectMood("happy")}
          >
            <img src={happy} alt="" />
            Happy
          </button>
          <button
            className={selectedMood === "sad" ? "selected-emoji" : "unselected-emoji"}
            onClick={() => selectMood("sad")}
          >
            <img src={sad} alt="" />
            Sad
          </button>
          <button
            className={selectedMood === "love" ? "selected-emoji" : "unselected-emoji"}
            onClick={() => selectMood("love")}
          >
            <img src={love} alt="" />
            Love
          </button>
          <button
            className={selectedMood === "surprised" ? "selected-emoji" : "unselected-emoji"}
            onClick={() => selectMood("surprised")}
          >
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
          <button onClick={fetchOnceAndRenderPostsFromDB}>Fetch posts</button>
        </div>

        <div id="posts" className="posts-section">
          {postsEl.map((post, index) => (
            <div key={index} className="post">
              <div className="post-header">
                <h3>{displayDate(post.createdAt)}</h3>
                <img src={getMoodImage(post.mood)} alt="" />
              </div>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
