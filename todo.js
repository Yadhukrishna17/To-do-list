const addbtn = document.getElementById('add');
const taskinput = document.getElementById('input');
const tasklist = document.getElementById('tasklist');

loadtask()


function addtask(){
    const task = taskinput.value.trim();
    if(task){
        createtaskelement(task);
        taskinput.value = '';
        savetask()
    }else{
        alert("please enter a task")
    }
}
 
addbtn.addEventListener('click', addtask);

function createtaskelement(task){
    const listitem = document.createElement('li');
    listitem.textContent = task;
    const deletebtn = document.createElement('button');
    deletebtn.textContent='deleteTask';
    deletebtn.className='deleteTask';
    listitem.appendChild(deletebtn);
    tasklist.appendChild(listitem);

    deletebtn.addEventListener('click',function(){
        tasklist.removeChild(listitem);
        savetask();
    })

}

function savetask(){
    let tasks = [];
    tasklist.querySelectorAll('li').forEach(function(item){
      tasks.push(item.textContent.replace('deleteTask','').trim());
    });

    localStorage.setItem('task',JSON.stringify(tasks));

}

function loadtask(){
    const tasks = JSON.parse(localStorage.getItem('task')) || [];
    tasks.forEach(createtaskelement);
}