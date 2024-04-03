import { renderProjects, renderTodos } from './dom';
import { Project } from './project';
import { Todo } from './todo';
import { saveProjectsToLocalStorage, loadProjectsFromLocalStorage } from './storage';

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

  const projectsContainer = document.getElementById('projects');
  projectsContainer.addEventListener('change', function(event) {
    const projectId = event.target.value;
    const selectedProject = projects.find(project => project.id === projectId);
    renderTodos(selectedProject.todos);
  });
}
