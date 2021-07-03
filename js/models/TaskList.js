function TaskList()
{
    this.arr = []; 
}

TaskList.prototype.findIdxByName = function(name)
{
    return this.arr.findIndex(function(task){
        return task.name === name;
    }); 
}

TaskList.prototype.addTask = function(task)
{
    this.arr.push(task);
}

TaskList.prototype.deleteTask = function(name)
{
    var idx = this.findIdxByName(name); 
    if (idx !== -1) 
    {
        alert('Task removed!');
        this.arr.splice(idx, 1);
    }
}