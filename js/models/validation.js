function Validation() {}

Validation.prototype.checkEmpty = function(name)
{
    if (name === "")
    {
        alert("Task is empty!");
        return false;
    }

    return true;
}

Validation.prototype.checkDuplicate = function(taskList, name)
{
    var idx = taskList.findIdxByName(name); 

    if (idx !== -1)
    {
        alert("Task is already on the list!");
        return false; 
    }
    
    return true;
}