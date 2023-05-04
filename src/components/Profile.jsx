import React from "react";
import profileImg from "../assets/profile-pic.jpg";
function Profile() {
  return (
    <div className='w-full flex items-center gap-3'>
      <img
        className='h-12 object-cover w-12 rounded-full'
        src={profileImg}
        alt='shaheer profile image'
      />
      <div>
        <h1 className='text-lg text-white'>Muhammad Shaheer</h1>
        <h2 className='text-sm font-medium text-gray'>B. 2002</h2>
      </div>
    </div>
  );
}

export default Profile;
