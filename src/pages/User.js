import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const User = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setUserData(response.data);
      } catch (error) {
        alert('User not found');
        navigate('/');
      }
    };

    fetchUserData();
  }, [username, navigate]);

  return (
    <div className="user-container">
      {userData && (
        <>
          <div className="user-profile">
            <img className="user-avatar" src={userData.avatar_url} alt={userData.name} />
            <h2 className="user-name">{userData.name}</h2>
            <p className="user-bio">{userData.bio}</p>
            <div className="user-stats">
              <p><strong>Repositories:</strong> {userData.public_repos}</p>
              <p><strong>Followers:</strong> {userData.followers}</p>
              <p><strong>Following:</strong> {userData.following}</p>
            </div>
            <a className="github-link" href={userData.html_url} target="_blank" rel="noopener noreferrer">
              Go to GitHub
            </a>
          </div>
          <div className="user-repos">
            {/* Example: Fetch and display repos here */}
          </div>
        </>
      )}
    </div>
  );
};

export default User;
