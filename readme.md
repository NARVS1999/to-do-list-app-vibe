project: "To-Do List App"
description: "A simple CRUD to-do list using HTML, CSS, and JavaScript (no framework)."

tasks:
  - name: "Setup Project Structure"
    subtasks:
      - Create project folder
      - Create `index.html`, `style.css`, and `app.js`
      - Link CSS and JS files in HTML

  - name: "Build HTML Layout"
    subtasks:
      - Add a heading/title
      - Add input field for new task
      - Add 'Add Task' button
      - Add container (e.g., `<ul>` or `<div>`) for task list

  - name: "Style the App with CSS"
    subtasks:
      - Style input and button
      - Style task list items
      - Add hover effects
      - Make the layout responsive

  - name: "Add a Task (Create)"
    subtasks:
      - Capture input value from text field
      - Create a new DOM element for the task
      - Add task to the task list container
      - Clear input field after adding

  - name: "Display Tasks on Load"
    subtasks:
      - Store tasks in localStorage
      - On page load, fetch tasks from localStorage
      - Render each saved task in the task list

  - name: "Update Task (Edit)"
    subtasks:
      - Add an Edit button/icon to each task
      - On click, replace task text with input field
      - Save updated task text to localStorage and re-render

  - name: "Mark Task as Done"
    subtasks:
      - Add a checkbox or "complete" button
      - Toggle `done` class (e.g., strikethrough)
      - Update task status in localStorage

  - name: "Delete Task"
    subtasks:
      - Add a Delete button/icon to each task
      - On click, remove task from DOM
      - Remove task from localStorage

  - name: "Filter Tasks (Optional)"
    subtasks:
      - Add buttons or dropdown: All, Active, Completed
      - Filter tasks based on status

  - name: "Clear All Completed Tasks (Optional)"
    subtasks:
      - Add "Clear Completed" button
      - On click, remove all tasks marked as done from UI and storage

  - name: "Add Animations (Optional)"
    subtasks:
      - Animate task appearance/removal
      - Use CSS transitions or JS-based effects

  - name: "Final Testing & Polish"
    subtasks:
      - Test adding, editing, deleting
      - Test localStorage persistence
      - Mobile responsiveness check
      - Refactor and comment code

  - name: "Deploy & Share"
    subtasks:
      - Push code to GitHub
      - Deploy to Netlify or GitHub Pages
      - Post screenshot or demo on LinkedIn
