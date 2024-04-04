import { saveProjectsToLocalStorage } from './storage';

let projects = [];

export function setProjects(updatedProjects) {
  projects = updatedProjects;
}

export function getProjects() {
  return projects;
}

export function renderProjects(projects, selectedProject) {
  const projectsContainer = document.getElementById('projects');
  projectsContainer.innerHTML = '';

  const projectSelect = document.getElementById('project-select');
  projectSelect.innerHTML = '';

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
    projectElement.innerHTML = `
      <h3>${project.name}</h3>
      <button class="delete-project-btn" data-project-id="${project.id}">Delete Project</button>
    `;

    const option = document.createElement('option');
    option.value = project.id;
    option.textContent = project.name;
    projectSelect.appendChild(option);

    projectsContainer.appendChild(projectElement);

    if (selectedProject && project.id === selectedProject.id) {
      renderTodos(project.todos, selectedProject);
    }
  });
}

export function renderTodos(todos, selectedProject) {
  const todoDetailsContainer = document.getElementById('todo-details-display');
  if (!todoDetailsContainer) {
    console.error("Todo details container not found");
    return;
  }
  
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
      <button class="delete-todo-btn" data-project-id="${selectedProject ? selectedProject.id : ''}" data-todo-title="${todo.title}">Delete Todo</button>
    `;

    todoDetailsContainer.appendChild(todoElement);
  });
}

export function clearLocalStorage() {
  localStorage.removeItem('projects');
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-project-btn')) {
    const isConfirmed = window.confirm("Are you sure you want to delete this project?");
    if (!isConfirmed) return;

    const projectId = event.target.getAttribute('data-project-id');
    projects = projects.filter(project => project.id !== projectId);
    saveProjectsToLocalStorage(projects);
    renderProjects(projects, null);
  } else if (event.target.classList.contains('delete-todo-btn')) {
    const isConfirmed = window.confirm("Are you sure you want to delete this todo details?");
    if (!isConfirmed) return;

    const todoId = event.target.getAttribute('data-todo-id');
    const project = projects.find(project => project.id === projectId);
    if (project) {
      project.todos = project.todos.filter(todo => todo.title !== todoTitle);
      saveProjectsToLocalStorage(projects);
      renderTodos(project.todos, null); 
    }
  }
});

document.getElementById('todo-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('todo-title').value;
  const description = document.querySelector('.todo-description').value;
  const dueDate = document.querySelector('.todo-due-date').value;
  const priority = document.querySelector('.todo-priority').value;
  const notes = document.querySelector('.todo-notes').value;
  const projectId = document.getElementById('project-select').value;

  const selectedProject = projects.find(project => project.id === projectId);
  if (!selectedProject) return;

  const newTodo = { title, description, dueDate, priority, notes };

  if (!selectedProject.todos) {
    selectedProject.todos = [];
  }
  selectedProject.todos.push(newTodo);

  saveProjectsToLocalStorage(projects);

  renderTodos(selectedProject.todos, selectedProject);

  document.getElementById('todo-form').reset();
});
