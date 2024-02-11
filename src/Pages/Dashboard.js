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


  return (
    <div className="page dashboard">
      <h1>Dashboard</h1>
      <div className="app-container">
        <div className="user-section">
        <img src={photoURL} alt="" className="user-profile-picture" />
        <h2>Hey {user.displayName}, how are you ?</h2>

       </div>
      </div>
    </div>
  );
}
