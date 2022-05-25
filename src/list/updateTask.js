import { renderTasks } from "./render.js";
import { getTasksList, updateTask } from "./tasksGateway.js";

const eventData = (event) => {
  if (event.target.classList.contains("list__item_checkbox")) {
    return {
      id: event.target.dataset.id,
      text: event.target.dataset.text,
      done: JSON.parse(event.target.dataset.done),
    };
  }

  if (event.target.classList.contains("list__item")) {
    return {
      id: event.target.firstChild.dataset.id,
      text: event.target.firstChild.dataset.text,
      done: JSON.parse(event.target.firstChild.dataset.done),
    };
  }

  if (event.target.classList.contains("list__item_delete-btn")) {
    console.log(event);
    return {
      id: event.target.dataset.id,
    };
  }
};

export const onToggleTask = (event) => {
  updateTask(eventData(event)).then(() => {
    getTasksList().then((result) => renderTasks(result));
  });
};
