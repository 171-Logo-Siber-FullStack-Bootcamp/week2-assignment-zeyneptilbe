const express = require("express"); //express import edildi.

const postsController = require("./src/data/controllers/posts-controller"); //posts dosyası projeye dahil edildi.
const userController = require("./src/data/controllers/users-controller"); //users dosyası projeye dahil edildi.
const todosController = require("./src/data/controllers/todos-controller"); //todos dosyası projeye dahil edildi.

const app = express(); //uygulama oluştur.

//Bütün post verileri gelir.
app.get("/posts", (req, res) => {
  var posts = postsController.getAllPosts();
  res.send(posts);
});

//postId ile istenilen veri gelir.
app.get("/posts/:postId", (req, res) => {
  var post = postsController.getPostById(req.params.postId);
  res.send(post);
});

//tüm users verileri gelir.
app.get("/users", (req, res) => {
  var users = usersController.getAllUsers();
  res.send(users);
});

//userId ile istenilen users verileri gelir.
app.get("/users/:userId", (req, res) => {
  var user = postsController.getUserById(req.params.postId);
  res.send(user);
});

//Bütün todos verileri gelir.
app.get("/todos", (req, res) => {
  var todos = todosController.getAllTodos();
  res.send(todos);
});

app.get("/todos", (req, res) => {
  var todos;
  if (req.query.userId) {
    todos = todosController.getTodosByUserId(req.query.userId);
  } else {
    todos = todosController.getAllTodos();
  }
  res.send(todos);
});

app.listen(5000);
