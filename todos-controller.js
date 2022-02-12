const posts = require("../data/todos");

getAllTodos = () => {
  return getAllTodos;
};

getTodosByUserId = (userId) => {
  return todos.filter((todo) => todo.userId == userId);
};

module.exports = { getAllTodos, getTodosByUserId };
