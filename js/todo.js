window.addEventListener('Load', showTasks);
let addBtn = document.querySelector('button');
let taskList = document.querySelector('ul');
let input = document.querySelector('input');
let errorMessage = document.querySelector('.error_message');
let tasks;
if (!localStorage.getItem('todo')) {
    tasks = [];
} else {
    tasks = getTasks();
}
addBtn.addEventListener('click', () => {
    let text = input.value;
    if (text === '' || text.split(' ').join('') === '') {
        // input.value = null;
        errorMessage.textContent = 'ورودی باید شامل متن باشد'
        return;
    }
    errorMessage.textContent = '';
    createTask(text);
    saveTasks(text);
    input.value = '';
})
taskList.addEventListener('click', (e) => {
    if (e.target.nodeName === 'I') {
        let target = e.target.parentElement.parentElement;
        target.style = 'display:none';
        tasks.splice(tasks.indexOf(target.textContent), 1);
        localStorage.setItem('todo', tasks);
    }
    if (e.target.nodeName === 'LI') {
        e.target.classList.toggle('done');
    }
})

function createTask(text) {
    let li = document.createElement('li');
    li.textContent = text;
    li.innerHTML += '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
    taskList.appendChild(li);
    return li;
}

function saveTasks(text) {
    tasks.push(text);
    localStorage.setItem('todo', tasks);
}

function getTasks() {
    return localStorage.getItem('todo').split(',');
}

function showTasks() {
    for (let taskText of getTasks()) {
        createTask(taskText);
    }
}
