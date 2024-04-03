export function renderProjects(projects) {
  const projectsContainer = document.getElementById('projects');
  projectsContainer.innerHTML = '';

  const projectSelect = document.getElementById('project-select');
  projectSelect.innerHTML = '';

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
      <h3>${project.name}</h3>
    `;

    const option = document.createElement('option');
    option.value = project.id;
    option.textContent = project.name;
    projectSelect.appendChild(option);

    projectsContainer.appendChild(projectElement);
  });
}

export function renderTodos(todos) {
  const todoDetailsContainer = document.getElementById('todo-details');
  todoDetailsContainer.innerHTML = '';

  todos.forEach(todo => {
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo');
    todoElement.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Description: ${todo.description}</p>
      <p>Due Date: ${todo.dueDate}</p>
      <p>Priority: ${todo.priority}</p>
      <p>Notes: ${todo.notes}</p>
    `;

    todoDetailsContainer.appendChild(todoElement);
  });
}
