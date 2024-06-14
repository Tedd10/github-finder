import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const User = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Updated hook

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (error) {
        alert('User not found');
        navigate('/'); // Updated navigation
      }
    };

    fetchUserData();
  }, [username, navigate]);

  return (
    <div className="user-container">
      {userData && (
        <>
          <img src={userData.avatar_url} alt={userData.name} />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <p>Public Repositories: {userData.public_repos}</p>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">Profile</a>
        </>
      )}
    </div>
  );
};

export default User;
