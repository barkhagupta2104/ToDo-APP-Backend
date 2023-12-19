
const express = require('express');
const router = express.Router();

const {createTodo} = require('../controller/createToDo');

router.post("/createTodo", createTodo);

module.exports = router;
