import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUser, putUser } from "../../components/API/API";
import {
  Followers,
  Status,
  User,
  UserTweets,
} from "./Tweets.styled";

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
      <User>
        <img src={avatar} alt="some image" />
        <UserTweets>{tweets} TWEETS</UserTweets>
        {followers && (
          <Followers>
            {followers.toLocaleString("en-US")} FOLLOWERS
          </Followers>
        )}
        <Status
          isFollowing={isFollowing}
          onClick={handleFollowClick}
        >
          {isFollowing ? "FOLLOWING" : "FOLLOW"}
        </Status>
      </User>
    </div>
  );
}
