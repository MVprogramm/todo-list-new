const baseUrl = 'https://6275fcfd15458100a6a9c207.mockapi.io/api/v1/tasks';

export const getTasksList = () => fetch(baseUrl).then((response) => response.json());

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

const doneTask = (taskData) => fetch(`${baseUrl}/${taskData.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  body: JSON.stringify({
    text: taskData.text,
    done: !taskData.done,
    act: new Date().toISOString(),
  }),
});

const deleteTask = (taskData) => fetch(`${baseUrl}/${taskData.id}`, {
  method: 'DELETE',
});

export const updateTask = (taskData) => {
  if (taskData.text) {
    return doneTask(taskData);
  }

  return deleteTask(taskData);
};
