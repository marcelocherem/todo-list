// Adicionar evento para detectar a tecla Enter no campo de entrada
document.getElementById('new-task').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return;
    }

    const li = document.createElement('li');
    const restDiv = document.createElement('div');
    restDiv.classList.add('rest');

    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-Position');

    const upButton = document.createElement('button');
    upButton.textContent = '▲';
    upButton.classList.add('goUp');
    upButton.onclick = () => {
        const prev = li.previousElementSibling;
        if (prev) {
            li.parentNode.insertBefore(li, prev);
        }
    };

    const downButton = document.createElement('button');
    downButton.textContent = '▼';
    downButton.classList.add('goDown');
    downButton.onclick = () => {
        const next = li.nextElementSibling;
        if (next) {
            li.parentNode.insertBefore(next, li);
        }
    };

    const label = document.createElement('label');
    label.classList.add('custom-checkbox');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => {
        taskSpan.classList.toggle('completed');
    };
    
    const checkmark = document.createElement('span');
    checkmark.classList.add('checkmark');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => li.remove();

    buttonsDiv.appendChild(upButton);
    buttonsDiv.appendChild(downButton);
    label.appendChild(checkbox);
    label.appendChild(checkmark);
    restDiv.appendChild(buttonsDiv);
    restDiv.appendChild(label);

    li.appendChild(restDiv);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';
}
