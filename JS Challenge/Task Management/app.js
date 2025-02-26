const addBtn = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const totalTasksDisplay = document.getElementById('totalTasks');
const completeTasksDisplay = document.getElementById('completedTasks');


let totalTasks = 0;
let completedTasks = 0;
function updateTaskCount() {
    totalTasksDisplay.textContent = `Total tasks : ${totalTasks}`;
    completeTasksDisplay.textContent = `Completed : ${completedTasks}`;
}

function removeEmptyMessage() {
    const emptyMessage = document.querySelector('.empty-list');
    if(emptyMessage){
        emptyMessage.remove();
    }
}


function createTask(value){
    const li = document.createElement('li');
    li.style.cssText = 'padding: 10px; font-size: 16px; border: 1px solid #ddd;border-radius: 4px; flex'
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', () => {
        li.classList.toggle('completed',checkBox.checked);
        if (checkBox.checked ) {
            completedTasks += 1;
        }else{
            completedTasks -= 1;
        }
        updateTaskCount();
    })

    const taskLebel = document.createElement('value');
    taskLebel.textContent = value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.cssText = 'background-color : red ; color : white ; padding : 4px 10px;';
    deleteButton.addEventListener('click' , () => {
        if (checkBox.checked) {
            completedTasks--;
        }
        totalTasks--;
        updateTaskCount();
        li.remove();
    })

    const leftContainer = document.createElement('div');
    leftContainer.style.display = 'flex';
    leftContainer.style.alignItems = 'center';
    leftContainer.appendChild(checkBox);
    leftContainer.appendChild(taskLebel);

    li.appendChild(leftContainer);

    li.appendChild(deleteButton);
    return li
}


addBtn.addEventListener('click' , () => {
    const value = taskInput.value;
    removeEmptyMessage()
    // const li = document.createElement('li');
    // li.innerText = value
    const taskItem = createTask(value);
    taskList.appendChild(taskItem);
    
    totalTasks++;
    updateTaskCount()
    taskInput.value = '';
})