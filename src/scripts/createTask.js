import { renderTasks } from "./render.js";
import { createTask, getTasksList } from "./tasksGateway.js";

export const onCreateTask = () => {
  const input = document.querySelector(".task-input");

  if (!input.value) {
    return;
  }

  const newTask = {
    text: input.value,
    done: false,
    act: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((result) => renderTasks(result));

  input.value = "";
};
