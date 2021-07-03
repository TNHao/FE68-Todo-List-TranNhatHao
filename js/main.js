var taskList = new TaskList; 
var validator = new Validation;

var getEleID = function(id)
{
    return document.getElementById(id);
}

var resetInput = function(id)
{
    getEleID('newTask').value = "";
}

var getLocalStorage = function()
{
    if (localStorage.getItem('TaskList'))
    {
        taskList.arr = JSON.parse(localStorage.getItem('TaskList'));
        renderTaskList(taskList.arr);
    }
}

var setLocalStorage = function()
{
    localStorage.setItem('TaskList', JSON.stringify(taskList.arr));
}

getLocalStorage();

function renderTaskList(taskList) 
{
    var content = ["", ""];

    taskList.forEach(function(task){        
        content[1 - Number(task.status === "todo")] += `
                <li>
                    <span>${task.name}</span>
                    <div class="buttons">
                        <button class="remove" onclick="removeTask('${task.name}')"><i class="fa fa-trash-alt"></i></button>
                        <button class="complete" onclick="changeStatus('${task.name}')">
                            <i class="far fa-check-circle"></i>
                            <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `
    });

    getEleID('todo').innerHTML = content[0]; 
    getEleID('completed').innerHTML = content[1];
}

getEleID('addItem').addEventListener('click', function()
{
    var taskName = getEleID('newTask').value; 
    var taskStatus = "todo"; 

    var flag = true; 
    flag &= validator.checkEmpty(taskName);
    flag &= validator.checkDuplicate(taskList, taskName); 

    if (flag == false) 
    {
        resetInput();
        return; 
    }

    alert("Task added!");

    var task = new Task(taskName, taskStatus);
    taskList.addTask(task);
    
    renderTaskList(taskList.arr);
    resetInput();
    
    setLocalStorage();
});

var removeTask = function(name)
{
    taskList.deleteTask(name);
    renderTaskList(taskList.arr);

    setLocalStorage();
}

var changeStatus = function(name)
{
    var idx = taskList.findIdxByName(name); 

    if (idx !== -1)
    {
        alert('Task status changed!');
        taskList.arr[idx].changeStatus();
        renderTaskList(taskList.arr);       

        setLocalStorage();
    }
}