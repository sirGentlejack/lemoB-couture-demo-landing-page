import React, {useState, useEffect} from "react";
import BlueKaftanImage from "../images/profile-svgrepo-com.svg";

export default function Dashboard( {user}) {
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user && user.photoURL) {
      setPhotoURL(user.photoURL);
    } else {
      // If 'user' is null or 'photoURL' is not present, set a default image
      setPhotoURL(BlueKaftanImage);
    }
  }, [user]);

  function showUserGreeting(element, user) {
    const displayName = user.displayName
    
    if (displayName) {
        const userFirstName = displayName.split(" ")[0]
        
        element.textContent = `Hey ${userFirstName}, how are you?`
    } else {
        element.textContent = `Hey friend, how are you?`
    }
}
const h2Element = document.querySelector(".user-greeting");
if (h2Element) {
  showUserGreeting(h2Element, user);
}

  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>
      <div className="app-container">
        <div className="user-section">
        <img src={photoURL} alt="" className="user-profile-picture" />
        <h2 className="user-greeting">friend </h2>

       </div>
      </div>
    </div>
  );
}
