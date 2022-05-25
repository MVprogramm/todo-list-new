import { renderTasks } from "./list/render.js";
import { getTasksList } from "./list/tasksGateway.js";
import { initTodoListHandles } from "./list/todoList.js";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasksList) => renderTasks(tasksList));

  initTodoListHandles();
});
