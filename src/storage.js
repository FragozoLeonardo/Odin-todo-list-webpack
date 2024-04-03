export function saveProjectsToLocalStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

export function loadProjectsFromLocalStorage() {
  const projectsJSON = localStorage.getItem('projects');
  if (projectsJSON) {
    return JSON.parse(projectsJSON);
  } else {
    return [];
  }
}
``
