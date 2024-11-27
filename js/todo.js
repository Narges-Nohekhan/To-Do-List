let addBtn = document.querySelector('button');
let taskList = document.querySelector('ul');
let input = document.querySelector('input');
let errorMessage = document.querySelector('.error_message');
addBtn.addEventListener('click', () => {
    let text = input.value;
    if (text === '' || text.split(' ').join('') === '') {
        // input.value = null;
        errorMessage.textContent = 'ورودی باید شامل متن باشد'
        return;
    }
    errorMessage.textContent = '';
    let task = createTask(text);
    task.innerHTML += '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span>';
    taskList.appendChild(task);
    input.value = '';
})
taskList.addEventListener('click', (e) => {
    if (e.target.nodeName === 'I') {
        e.target.parentElement.parentElement.style = 'display : none';
    }
    if (e.target.nodeName === 'LI') {
        e.target.classList.toggle('done');
    }
})

function createTask(text) {
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}