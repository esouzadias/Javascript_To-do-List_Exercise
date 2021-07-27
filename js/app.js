//Selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');
var arrow = document.querySelector('#expandBtn');
var sidebar = document.querySelector(".sidebar-content");
var toggledOn;

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
arrow.addEventListener('click', expand);


//Functions

function addTodo(event) {
    //prevent form from submiting
    event.preventDefault();

    //todo DIV
    var todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //checkmark button
    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);
    //clear todo value
    todoInput.value = "";

}

function deleteCheck(e) {
    var item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-btn') {
        var todoitem = item.parentElement;
        //Add animation
        todoitem.classList.add('delete');
        todoitem.addEventListener('transitionend', function () {
            todoitem.remove();
        })

    }

    //check
    if (item.classList[0] === "complete-btn") {
        var todoitem = item.parentElement;
        todoitem.classList.toggle("completed");
    }
}

function expand(e) {
    if (!toggledOn) {
        sidebar.style.width = "200px";
        arrow.style.transform = "rotate(180deg)";
        toggledOn = true;
    }
    else {
        sidebar.style.width = "100px";
        arrow.style.transform = "rotate(0deg)";
        toggledOn = false;
    }
}