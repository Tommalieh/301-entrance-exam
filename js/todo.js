'use strict'



var container;
var ulEl;
var tasksString;
var parentEl;
var selectedEl;
var childEl;
var dateEl;
var tasks = [];
function Task(task, date) {
    this.task = task;
    this.date = date;
    tasks.push(this);
}


if (!localStorage.getItem('Tasks')){
    console.log('empty')
}

else{
    tasksString = localStorage.getItem('Tasks');
    tasks = JSON.parse(tasksString);
    render();
}


var form = document.getElementById('taskForm');
form.addEventListener('submit', function (event) {

    event.preventDefault();
    console.log(event);
    var inputTask = event.target.task.value;
    console.log(inputTask);
    var inputDate = event.target.date.value;
    console.log(inputDate);

    new Task(inputTask, inputDate);

    var stringTasks = JSON.stringify(tasks);
    localStorage.setItem('Tasks', stringTasks);

    render();
});


function render() {

    console.log(typeof(ulEl));

    if (typeof(ulEl) == 'object') {

        ulEl.remove();

        }

        container = document.getElementById('tasks');
        ulEl = document.createElement('ul');
        container.appendChild(ulEl);

        for (var i = 0; i < tasks.length; i++) {

            var liEl1 = document.createElement('li');
            liEl1.setAttribute('class', 'taskStyle');
            liEl1.textContent = `${i+1}. ${tasks[i].task}`;
            ulEl.appendChild(liEl1);

            var spanEl = document.createElement('span');
            spanEl.setAttribute('class', 'spanStyle');
            spanEl.textContent = 'X';
            ulEl.appendChild(spanEl);

            var liEl2 = document.createElement('li');
            liEl2.setAttribute('class', 'dateStyle');
            liEl2.textContent = tasks[i].date;
            ulEl.appendChild(liEl2);

    }
}

var removeOnClick = document.getElementsByClassName('spanStyle');
for (var i = 0; i < removeOnClick.length; i++){
removeOnClick[i].addEventListener('click', function(){
    // console.log(event.target.parentElement);
    parentEl = event.target.parentElement;
    console.log(parentEl);
    console.log(parentEl.firstChild);
    
    childEl = parentEl.firstChild;

    dateEl = childEl.nextSibling.nextSibling;
    console.log(dateEl);

    selectedEl = event.target;
    console.log(selectedEl);

    childEl.remove();
    dateEl.remove();
    selectedEl.remove();
    
}

)};