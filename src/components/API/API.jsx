import axios from "axios";

const API =
  "https://6438fa5b1b9a7dd5c95c1b14.mockapi.io/users";

export const getAllUsers = async () => {
  const { data } = await axios.get(`${API}`);

  return data;
};
export const getUser = async (userId) => {
  const { data } = await axios.get(`${API}/${userId}`);

  return data;
};
export const putUser = async (userId, { followers }) => {
  const { data } = await axios.put(`${API}/${userId}`, {
    followers,
  });

  return data;
};
