const posts = require("../data/posts");

getAllPosts = () => {
  return posts;
};

getPostById = (postId) => {
  return posts.filter((x) => x.id == postId);
};

module.exports = { getAllPosts, getPostById };
