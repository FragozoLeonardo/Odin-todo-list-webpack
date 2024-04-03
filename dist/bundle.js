/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos)\n/* harmony export */ });\nfunction renderProjects(projects) {\n  var projectsContainer = document.getElementById('projects');\n  projectsContainer.innerHTML = '';\n  var projectSelect = document.getElementById('project-select');\n  projectSelect.innerHTML = '';\n  projects.forEach(function (project) {\n    var projectElement = document.createElement('div');\n    projectElement.classList.add('project');\n    projectElement.innerHTML = \"\\n      <h3>\".concat(project.name, \"</h3>\\n    \");\n    var option = document.createElement('option');\n    option.value = project.id;\n    option.textContent = project.name;\n    projectSelect.appendChild(option);\n    projectsContainer.appendChild(projectElement);\n  });\n}\nfunction renderTodos(todos) {\n  var todoDetailsContainer = document.getElementById('todo-details');\n  todoDetailsContainer.innerHTML = '';\n  todos.forEach(function (todo) {\n    var todoElement = document.createElement('div');\n    todoElement.classList.add('todo');\n    todoElement.innerHTML = \"\\n      <h3>\".concat(todo.title, \"</h3>\\n      <p>Description: \").concat(todo.description, \"</p>\\n      <p>Due Date: \").concat(todo.dueDate, \"</p>\\n      <p>Priority: \").concat(todo.priority, \"</p>\\n      <p>Notes: \").concat(todo.notes, \"</p>\\n    \");\n    todoDetailsContainer.appendChild(todoElement);\n  });\n}\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n(0,_ui__WEBPACK_IMPORTED_MODULE_0__.initializeApp)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Project = /*#__PURE__*/_createClass(function Project(name) {\n  _classCallCheck(this, Project);\n  this.id = Date.now().toString();\n  this.name = name;\n  this.todos = [];\n});\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjectsFromLocalStorage: () => (/* binding */ loadProjectsFromLocalStorage),\n/* harmony export */   saveProjectsToLocalStorage: () => (/* binding */ saveProjectsToLocalStorage)\n/* harmony export */ });\nfunction saveProjectsToLocalStorage(projects) {\n  localStorage.setItem('projects', JSON.stringify(projects));\n}\nfunction loadProjectsFromLocalStorage() {\n  var projectsJSON = localStorage.getItem('projects');\n  if (projectsJSON) {\n    return JSON.parse(projectsJSON);\n  } else {\n    return [];\n  }\n}\n\"\";\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nvar Todo = /*#__PURE__*/_createClass(function Todo(title, description, dueDate, priority) {\n  var notes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';\n  _classCallCheck(this, Todo);\n  this.title = title;\n  this.description = description;\n  this.dueDate = dueDate;\n  this.priority = priority;\n  this.notes = notes;\n});\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeApp: () => (/* binding */ initializeApp)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n\nfunction closeModal(modalId) {\n  var modal = document.getElementById(modalId);\n  if (modal) {\n    modal.style.display = 'none';\n  }\n}\nfunction openModal(modalId) {\n  var modal = document.getElementById(modalId);\n  if (modal) {\n    modal.style.display = 'block';\n  }\n}\nfunction initializeApp() {\n  var projects = (0,_storage__WEBPACK_IMPORTED_MODULE_3__.loadProjectsFromLocalStorage)();\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(projects);\n  var addProjectForm = document.getElementById('project-form');\n  addProjectForm.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var projectName = document.getElementById('project-name').value;\n    var project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);\n    projects.push(project);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(projects);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(projects);\n    closeModal('modal');\n  });\n  var addTodoForm = document.getElementById('todo-form');\n  addTodoForm.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var todoTitle = document.getElementById('todo-title').value;\n    var todoDescription = document.querySelector('.todo-description').value;\n    var todoDueDate = document.querySelector('.todo-due-date').value;\n    var todoPriority = document.querySelector('.todo-priority').value;\n    var todoNotes = document.querySelector('.todo-notes').value;\n    var selectedProjectId = document.getElementById('project-select').value;\n    var selectedProject = projects.find(function (project) {\n      return project.id === selectedProjectId;\n    });\n    if (!selectedProject) {\n      alert(\"Please select a project to add this todo.\");\n      return;\n    }\n    var todo = new _todo__WEBPACK_IMPORTED_MODULE_2__.Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoNotes);\n    selectedProject.todos = selectedProject.todos || [];\n    selectedProject.todos.push(todo);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_3__.saveProjectsToLocalStorage)(projects);\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.renderTodos)(selectedProject.todos);\n    closeModal('todo-modal');\n  });\n}\n\n//# sourceURL=webpack:///./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;