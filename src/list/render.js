import './list.scss';

const sortTasks = (tasksList) => {
  const sortTasks = tasksList
    .map((task) => {
      return {
        id: task.id,
        text: task.text,
        done: JSON.parse(task.done),
        act: new Date(task.act),
      };
    })
    .sort((a, b) => b.act - a.act);

  const tasksDone = sortTasks.filter((task) => task.done === true);
  const tasksNotDone = sortTasks.filter((task) => task.done === false);
  return [...tasksNotDone, ...tasksDone];
};

const createListElements = (tasksList) =>
  tasksList.map(({ id, text, done }) => {
    const listItemElem = document.createElement("li");
    listItemElem.classList.add("list__item");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("data-id", id);
    checkbox.setAttribute("data-text", text);
    checkbox.setAttribute("data-done", done);
    checkbox.checked = done;
    checkbox.classList.add("list__item_checkbox");
    if (done) {
      listItemElem.classList.add("list__item_done");
    }

    const textElem = document.createElement("span");
    textElem.textContent = text;

    const deleteBtnElem = document.createElement("button");
    deleteBtnElem.classList.add("list__item_delete-btn");
    deleteBtnElem.setAttribute("data-id", id);

    listItemElem.append(checkbox, textElem, deleteBtnElem);

    return listItemElem;
  });

export const renderTasks = (tasksList) => {
  if (!tasksList) {
    return;
  }

  const tasksElem = createListElements(sortTasks(tasksList));

  const listElem = document.querySelector(".list");

  listElem.innerHTML = "";
  listElem.append(...tasksElem);
};
