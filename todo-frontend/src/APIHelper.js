import axios from "axios";

const API_URL="http://3.21.92.86:3000/todos/" // the IP address has to change according to our require Ip address or localhost
async function createTodo(task) {
  const { data: newTodo } = await axios.post(API_URL, {
    task
  });
  return newTodo;
}

async function deleteTodo(id) {
  const message = await axios.delete(`${API_URL}${id}`);
  return message;
}

async function updateTodo(id, payload) {
  const {data:newTodo} = await axios.put(`${API_URL}${id}`, payload);
  return newTodo;
}

async function getAllTodos() {
  const { data: todos } = await axios.get(API_URL);
  return todos;
}

export default { createTodo, deleteTodo, updateTodo, getAllTodos };
