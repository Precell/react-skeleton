import React, { useEffect, useState } from "react";
import SkeletonProfile from "./skeletons/SkeletonProfile";

export default function User() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      setProfile(data);

    }, 5000);
  });

  return (
    <div className="user">
      <h2>User Profile</h2>
        

    {profile && (
        <div className="profile">
            <h3>{profile.name}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
        </div>
    )}

    {!profile && <SkeletonProfile theme='dark'/>}
    </div>
  );
}
