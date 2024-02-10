import React from "react";
// import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const auth = getAuth();

    const navigate = useNavigate();

const handleClick = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
        navigate("/signin");
    }).catch((error) => {
      // An error happened.
    });
};

    return (
        <div className="page dashboard">
        <h1>Dashboard</h1>

        <div>
            <button onClick={handleClick}>
              {/* <Link to="/signout">Sign out</Link> */}
              sign out
            </button>
          </div>
        </div>
    );
}