let containerTasks = document.querySelector(".containerTasks")
const btnTaskVoid = document.querySelector(".btnTaskVoid")
const btnDelete = document.querySelector(".deleteAll")
let listTask = [];

function setListener() {
    document.addEventListener("DOMContentLoaded", () => {
        listTask = JSON.parse(localStorage.getItem("listTask") || []);
        printTaskDOM();
    });

    const input = document.querySelector("#taskInput");
    input.addEventListener("keyup", function (e) {
        if (e.code === "Enter") {
            e.preventDefault;
            getTask();
        }
    });
    const form = document.querySelector("#form");
    form.addEventListener("submit", function (e) {
        e.preventDefault;
        getTask();
    });

    containerTasks.addEventListener("click", (e) => {
        if (e.target.classList.contains("fa-pencil")) {
            edit(e);
        }
        if (e.target.classList.contains("fa-trash-can")) {
            deletei(e);
        }
    });
}

function getTask() {
    const task = document.querySelector("#taskInput");
    if (task.value.trim() === "") {
        alert("Escribe algo");
        task.value = "";
        return;
    } else {
        const objTask = {
            id: new Date().getTime(),
            task: task.value,
            status: "status" || getStatusTask(event),
        };
        listTask = [...listTask, objTask];

        printTaskDOM();
        task.focus();
        task.value = "";
    }
}

function taskColor(select, taskStatus) {
    if (taskStatus === "doing") {
        select.style.backgroundColor = "yellow";
    } else if (taskStatus === "complete") {
        select.style.backgroundColor = "green";
    } else if (taskStatus === "pending") {
        select.style.backgroundColor = "red";
    }
}

function getStatusTask(event) {
    const taskId = parseInt(event.target.getAttribute("data-id"));
    const taskStatus = event.target.value;
    const taskIndex = find(taskId);
    const select = document.querySelectorAll("#statustask")[taskIndex];
    listTask[taskIndex].status = taskStatus;

    taskColor(select, taskStatus);
    storage();
}

function find(indexToSearch) {
    let result = -1;
    listTask.map((item, index) => {
        if (item.id === indexToSearch) {
            result = index;
        }
    });
    return result;
}

function printTaskDOM() {
    cleanWindow();
    listTask.map(function (task) {
        const containerTasks = document.querySelector(".containerTasks");
        const template = document.querySelector(".template").content;
        const fragment = document.createDocumentFragment();

        template.querySelector("#task").value = task.task;
        template.querySelector("#task").dataset.id = task.id;
        template.querySelector("#statustask").value = task.status;
        template.querySelector("#statustask").dataset.id = task.id;
        template.querySelector(".fa-pencil").dataset.id = task.id;
        template.querySelector(".fa-trash-can").dataset.id = task.id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);

        containerTasks.appendChild(fragment);
        storage();
    });
    updateTaskStatus();
    containerVoid()
}

function updateTaskStatus() {
    const tasksHtml = document.querySelectorAll("#statustask");
    listTask.map(function (task) {
        const taskIndex = find(task.id);
        tasksHtml[taskIndex].value = task.status;
        taskColor(tasksHtml[taskIndex], task.status);
    });
}

function deletei(e) {
    if (e.target.classList.contains("fa-trash-can")) {
        const deleteId = parseInt(e.target.getAttribute("data-id"));
        listTask = listTask.filter((task) => task.id !== deleteId);
        printTaskDOM();
    }
}

function storage() {
    localStorage.setItem("listTask", JSON.stringify(listTask));
}

function edit(e) {
    let id = parseInt(e.target.getAttribute("data-id"));
    const result = find(id);

    const taskInput = document.querySelectorAll("#task")[result];

    if (e.target.classList.contains("fa-pencil")) {
        let id = parseInt(e.target.getAttribute("data-id"));
        const result = find(id);

        const taskInput = document.querySelectorAll("#task")[result];

        taskInput.removeAttribute("readonly");
        taskInput.focus();

        let saveIcon = document.querySelectorAll(".fa-pencil")[result];
        saveIcon.classList.replace("fa-pencil", "fa-floppy-disk");
        saveIcon.addEventListener("click", save);
    }
}

function save(e) {
    let id = parseInt(e.target.getAttribute("data-id"));
    const result = find(id);
    const taskInput = document.querySelectorAll("#task")[result];
    listTask[result].task = taskInput.value;
    printTaskDOM();
}

function cleanWindow() {
    containerTasks.innerHTML = "";
}

function btnDeleteAll() {
    const btnDelete = document.querySelector(".deleteAll");
    btnDelete.addEventListener("click", () => {
        cleanWindow();
        localStorage.removeItem("listTask");
        listTask = []
        containerVoid()
    });
}

function containerVoid() {
    if (listTask.length === 0) {
        btnTaskVoid.style.display = "block"
        btnDelete.style.display = "none"
        document.querySelector(".containerTasks").style.display = "none"
    } else {
        btnTaskVoid.style.display = "none"
        btnDelete.style.display = "block"
        document.querySelector(".containerTasks").style.display = "block"
    }
}

setListener();
btnDeleteAll();