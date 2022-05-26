import { renderTasks } from './list/render';
import { getTasksList } from './list/tasksGateway';
import { initTodoListHandles } from './list/todoList';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => renderTasks(tasksList));

  initTodoListHandles();
});
