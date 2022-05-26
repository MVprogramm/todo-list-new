import { renderTasks } from './render';
import { getTasksList, updateTask } from './tasksGateway';

const eventData = (event) => {
  if (event.target.classList.contains('list__item_checkbox')) {
    return {
      id: event.target.dataset.id,
      text: event.target.dataset.text,
      done: JSON.parse(event.target.dataset.done),
    };
  }

  if (event.target.classList.contains('list__item')) {
    return {
      id: event.target.firstChild.dataset.id,
      text: event.target.firstChild.dataset.text,
      done: JSON.parse(event.target.firstChild.dataset.done),
    };
  }

  if (event.target.classList.contains('list__item_delete-btn')) {
    return {
      id: event.target.dataset.id,
    };
  }

  return {};
};

export const onToggleTask = (event) => {
  updateTask(eventData(event)).then(async () => {
    const result = await getTasksList();
    return renderTasks(result);
  });
};
