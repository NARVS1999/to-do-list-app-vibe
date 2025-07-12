document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const filterButtons = document.querySelectorAll(".filter-container button");
    const clearCompletedBtn = document.getElementById("clearCompletedBtn");

    let currentFilter = "all";

    renderTasks();

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        addTask({ text: taskText, done: false });
        taskInput.value = "";
        taskInput.focus();
    });

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentFilter = btn.dataset.filter;
            renderTasks();
        });
    });

    // ✅ Clear completed tasks
    clearCompletedBtn.addEventListener("click", () => {
        const tasks = getTasks();
        const filtered = tasks.filter((task) => !task.done); // remove done tasks
        setTasks(filtered);
        renderTasks();
    });

    function getTasks() {
        const tasks = localStorage.getItem("tasks");
        return tasks ? JSON.parse(tasks) : [];
    }

    function setTasks(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTask(task) {
        const tasks = getTasks();
        tasks.push(task);
        setTasks(tasks);
        renderTasks();
    }

    function deleteTask(index) {
        const tasks = getTasks();
        tasks.splice(index, 1);
        setTasks(tasks);
        renderTasks();
    }

    function renderTasks() {
        taskList.innerHTML = "";
        const tasks = getTasks();

        const filteredTasks = tasks.filter((task) => {
            if (currentFilter === "active") return !task.done;
            if (currentFilter === "completed") return task.done;
            return true;
        });

        filteredTasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.classList.add("task-enter");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.done;
            checkbox.addEventListener("change", () => {
                const allTasks = getTasks();
                const trueIndex = getTrueIndex(task, allTasks);
                allTasks[trueIndex].done = checkbox.checked;
                setTasks(allTasks);
                renderTasks();
            });

            const span = document.createElement("span");
            span.textContent = task.text;
            if (task.done) span.classList.add("done");

            const btnContainer = document.createElement("div");
            btnContainer.classList.add("btn-container");

            const editBtn = document.createElement("button");
            editBtn.textContent = "✏️";
            editBtn.style.marginLeft = "10px";
            editBtn.addEventListener("click", () => editTask(getTrueIndex(task, getTasks()), span));

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "🗑️";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.addEventListener("click", () => {
                // exit animation before delete
                li.classList.add("task-exit");
                li.classList.remove("task-enter");
                setTimeout(() => deleteTask(getTrueIndex(task, getTasks())), 300);
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            btnContainer.appendChild(editBtn);
            btnContainer.appendChild(deleteBtn);
            li.appendChild(btnContainer);
            taskList.appendChild(li);

            // Trigger enter animation
            requestAnimationFrame(() => {
                li.classList.remove("task-enter");
                li.classList.add("task-enter-active");
            });
        });
    }


    function getTrueIndex(targetTask, allTasks) {
        return allTasks.findIndex((t) => t.text === targetTask.text && t.done === targetTask.done);
    }

    function editTask(index, spanElement) {
        const tasks = getTasks();
        const originalText = tasks[index].text;

        const input = document.createElement("input");
        input.type = "text";
        input.value = originalText;

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "💾";
        saveBtn.style.marginLeft = "10px";

        const parentLi = spanElement.parentElement;
        parentLi.innerHTML = "";
        parentLi.appendChild(input);
        parentLi.appendChild(saveBtn);

        saveBtn.addEventListener("click", () => {
            const newText = input.value.trim();
            if (newText === "") return;

            tasks[index].text = newText;
            setTasks(tasks);
            renderTasks();
        });
    }
});
