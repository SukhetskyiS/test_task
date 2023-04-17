import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../components/API/API";

import {
  List,
  User,
  Avatar,
  Name,
  Tweets,
  Followers,
  Status,
  FilterContainer,
  FilterLabel,
  FilterSelect,
  LoadMoreButton,
} from "./Home.styled";

export function Home() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("show all");
  const [visibleTweets, setVisibleTweets] = useState(8);

  const filteredUsers = users.filter(({ id }) => {
    const isFollowing =
      JSON.parse(localStorage.getItem(id)) || false;
    switch (filter) {
      case "follow":
        return !isFollowing;
      case "followings":
        return isFollowing;
      default:
        return true;
    }
  });

  const tweetsToShow = filteredUsers.slice(
    0,
    visibleTweets
  );

  const handleLoadMore = () => {
    setVisibleTweets((prevCount) => prevCount + 4);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };

    getUsers();
  }, []);

  return (
    <>
      <FilterContainer>
        <FilterLabel>Filter:</FilterLabel>
        <FilterSelect
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="show all">Show all</option>
          <option value="follow">Follow</option>
          <option value="followings">Followings</option>
        </FilterSelect>
      </FilterContainer>
      <List>
        {tweetsToShow.map(
          ({ id, avatar, user, tweets, followers }) => {
            const isFollowing =
              JSON.parse(localStorage.getItem(id)) || false;

            return (
              <User key={id}>
                <Link to={`/tweets/${id}`}>
                  <Avatar src={avatar} alt="some image" />
                  <Name>{user}</Name>
                  <Tweets>{tweets} TWEETS</Tweets>
                  <Followers>
                    {followers.toLocaleString("en-US")}{" "}
                    FOLLOWERS
                  </Followers>
                  <Status isFollowing={isFollowing}>
                    {isFollowing ? "FOLLOWING" : "FOLLOW"}
                  </Status>
                </Link>
              </User>
            );
          }
        )}
      </List>
      {visibleTweets < filteredUsers.length && (
        <LoadMoreButton onClick={handleLoadMore}>
          Load More
        </LoadMoreButton>
      )}
    </>
  );
}
