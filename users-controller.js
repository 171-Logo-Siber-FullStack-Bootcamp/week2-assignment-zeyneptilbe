const posts = require("../data/users");

getAllPosts = () => {
  return users;
};

getUserById = (userId) => {
  return users.filter((x) => x.id == userId);
};

module.exports = { getAllUsers, getUserById };
