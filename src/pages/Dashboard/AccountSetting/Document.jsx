import React, { useRef } from "react";
import "./Profile.css"; // Replace with your CSS file path

function Profile() {
  const profilePictureInputRef = useRef(null);
  const accountStatementInputRef = useRef(null);

  const handleProfilePictureUploadButtonClick = () => {
    profilePictureInputRef.current.click();
  };

  const handleAccountStatementUploadButtonClick = () => {
    accountStatementInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here
    console.log("Selected file:", file);
  };

  return (
    <div className="profile">


      <input
        type="file"
        accept=".pdf"
        ref={accountStatementInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button onClick={handleAccountStatementUploadButtonClick}>
        Upload Account Statement
      </button>


      <img src="profile.jpg" alt="Profile" className="profile-picture" />
      <input
        type="file"
        accept="image/*"
        ref={profilePictureInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button onClick={handleProfilePictureUploadButtonClick}>
        Upload Profile Picture
      </button>
    </div>
  );
}

export default Profile;
