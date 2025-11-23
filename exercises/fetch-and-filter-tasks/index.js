async function getCompletedTaskTitlesForUser(endpointUrl, username) {
  if (!endpointUrl || !username) return [];

  const response = fetch(endpointUrl);

  if (!response.ok) return [];

  const data = await response.json();
  if (!data.tasks || !Array.isArray(data.tasks)) {
    return [];
  }

  const filteredTasks = data.tasks.filter((task) => {
    return task.assignedTo === username && task.completed;
  });

  const tasks = filteredTasks.map((task) => task.title);
  return tasks;
}
