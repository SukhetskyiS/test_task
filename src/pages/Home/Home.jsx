import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../components/API/API";

export function Home() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("show all");
  const [visibleTweets, setVisibleTweets] = useState(8);

  const filteredUsers = users.filter(({ id }) => {
    const isFollowing =
      JSON.parse(localStorage.getItem(id)) || false;
    switch (filter) {
      case "follow":
        return isFollowing;
      case "followings":
        return !isFollowing;
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
    <div>
      <div>
        <label>Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="show all">Show all</option>
          <option value="follow">Follow</option>
          <option value="followings">Followings</option>
        </select>
      </div>
      {tweetsToShow.map(
        ({ id, avatar, user, tweets, followers }) => {
          const isFollowing =
            JSON.parse(localStorage.getItem(id)) || false;

          return (
            <div key={id}>
              <Link to={`/tweets/${id}`}>
                <img src={avatar} alt="some image" />
                <h2>{user}</h2>
                <p>{tweets} TWEETS</p>
                <p>
                  {followers.toLocaleString("en-US")}{" "}
                  FOLLOWERS
                </p>
                <p>
                  {isFollowing ? "FOLLOWING" : "FOLLOW"}
                </p>
              </Link>
            </div>
          );
        }
      )}
      {visibleTweets < filteredUsers.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}
