import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUser, putUser } from "../../components/API/API";

export function Tweets() {
  const [tweet, setTweet] = useState({});
  const [isFollowing, setIsFollowing] = useState(false);

  const { userId } = useParams();

  let { avatar, user, tweets, followers } = tweet;

  const handleFollowClick = async () => {
    setIsFollowing(!isFollowing);

    localStorage.setItem(
      userId,
      JSON.stringify(!isFollowing)
    );

    const updatedUserData = await putUser(userId, {
      followers: isFollowing
        ? followers - 1
        : followers + 1,
    });

    setTweet(updatedUserData);
  };

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUser(userId);
      setTweet(userData);

      const following = JSON.parse(
        localStorage.getItem(userId)
      );
      setIsFollowing(following || false);
    };

    getUserData();
  }, [userId]);

  return (
    <div>
      <Link to="/">Back</Link>
      <div>
        <img src={avatar} alt="some image" />
        <h2>{user}</h2>
        <p>{tweets} TWEETS</p>
        {followers && (
          <p>
            {followers.toLocaleString("en-US")} FOLLOWERS
          </p>
        )}
        <button onClick={handleFollowClick}>
          {isFollowing ? "FOLLOWING" : "FOLLOW"}
        </button>
      </div>
    </div>
  );
}
