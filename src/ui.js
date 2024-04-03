import { renderProjects, renderTodos } from './dom';
import { Project } from './project';
import { Todo } from './todo';
import { saveProjectsToLocalStorage, loadProjectsFromLocalStorage } from './storage';

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

export function initializeApp() {
  let projects = loadProjectsFromLocalStorage();
  renderProjects(projects);

  const addProjectForm = document.getElementById('project-form');
  addProjectForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const projectName = document.getElementById('project-name').value;
    const project = new Project(projectName);
    projects.push(project);
    saveProjectsToLocalStorage(projects);
    renderProjects(projects);
    closeModal('modal');
  });

  const addTodoForm = document.getElementById('todo-form');
  addTodoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoTitle = document.getElementById('todo-title').value;
    const todoDescription = document.querySelector('.todo-description').value;
    const todoDueDate = document.querySelector('.todo-due-date').value;
    const todoPriority = document.querySelector('.todo-priority').value;
    const todoNotes = document.querySelector('.todo-notes').value;
    const selectedProjectId = document.getElementById('project-select').value;
    const selectedProject = projects.find(project => project.id === selectedProjectId);
    
    if (!selectedProject) {
      alert("Please select a project to add this todo.");
      return;
    }

    const todo = new Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoNotes);
    selectedProject.todos = selectedProject.todos || [];
    selectedProject.todos.push(todo);
    saveProjectsToLocalStorage(projects);
    renderTodos(selectedProject.todos);
    closeModal('todo-modal');
  });
}
