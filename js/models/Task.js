function Task(_Name, _status)
{
    this.name = _Name; 
    this.status = _status;
}

Task.prototype.changeStatus = function()
{
    if (this.status === "todo")
        this.status = "completed"; 
    else this.status = "todo";
}