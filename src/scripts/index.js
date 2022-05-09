import { renderTasks } from "./render.js";
import { getTasksList } from "./tasksGateway.js";
import { initTodoListHandles } from "./todoList.js";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => renderTasks(tasksList));

  initTodoListHandles();
});
