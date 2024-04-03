export class Project {
  constructor(name) {
    this.id = Date.now().toString();
    this.name = name;
    this.todos = [];
  }
}