import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getUser, putUser } from "../../components/API/API";
import {
  Followers,
  Status,
  User,
  UserTweets,
  Picture,
  Logo,
  Line,
  Ellipse,
  Avatar,
  StyledLink,
} from "./Tweets.styled";
import picture from "../../images/picture.png";
import logo from "../../images/logo.png";

export function Tweets() {
  const [tweet, setTweet] = useState({});
  const [isFollowing, setIsFollowing] = useState(false);

  const { userId } = useParams();

  let { avatar, tweets, followers } = tweet;

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
    <>
      <StyledLink to="/">Back</StyledLink>
      <User>
        <Logo src={logo} alt="some logo" />
        <Picture src={picture} alt="some image" />
        <Line></Line>
        <Ellipse></Ellipse>
        <Avatar src={avatar} alt="some avatar" />

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
    </>
  );
}
