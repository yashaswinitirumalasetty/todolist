function addTask()
{
    let taskIn=document.getElementById("taskIn");
    let taskText=taskIn.value;
    if(taskText==="")
    {
        alert("enter a task");
        return;

    }
    let li=document.createElement("li");
    li.innerText=taskText;
    let del=document.createElement("button");
    del.innerText="Delete";
    del.onclick=function()
    {
        li.remove();
    };
    li.appendChild(del);
    document.getElementById("taskList").appendChild(li);
    taskIn.value="";
}