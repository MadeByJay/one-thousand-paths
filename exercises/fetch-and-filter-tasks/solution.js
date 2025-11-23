// Exercise 9 – Fetch and Filter Tasks (Async)
// Problem
// Pretend you have an API endpoint that returns:
// {
//   "tasks": [
//     { "id": 1, "title": "Fix bug", "assignedTo": "alice", "completed": true },
//     { "id": 2, "title": "Write docs", "assignedTo": "bob", "completed": false },
//     { "id": 3, "title": "Refactor code", "assignedTo": "alice", "completed": true }
//   ]
// }
// Write an async function:
// async function getCompletedTaskTitlesForUser(endpointUrl, userName)
// that:
// Fetches the JSON.
// Returns an array of title values for tasks where:
// - assignedTo === userName
// - completed === true

async function getCompletedTaskTitlesForUser(endpointUrl, userName) {
  if (!endpointUrl || !userName) {
    return [];
  }

  const response = await fetch(endpointUrl);

  if (!response.ok) {
    // In a real app we might throw; for a coding challenge, we might just return []
    return [];
  }

  const data = await response.json();

  if (!data.tasks || !Array.isArray(data.tasks)) {
    return [];
  }

  const filteredTasks = data.tasks.filter((task) => {
    return task.assignedTo === userName && task.completed === true;
  });

  const titles = filteredTasks.map((task) => task.title);

  return titles;
}

// Explanation
// What we’re practicing:
// - async/await with fetch.
// - Guarding against bad responses.
// - Filter + map pattern on remote data.
// Steps:
// 1. Check basic inputs (endpointUrl, userName).
// 2. Call fetch(endpointUrl) and await the response.
// 3. Check response.ok to handle non-200 responses.
// 4. Parse JSON and ensure tasks is an array.
// 5. Filter tasks where assignedTo matches and completed is true.
// 6. Map to task.title.
// This is basically the shape of Coderbyte’s HTTP + JSON challenges, just with a different payload.
