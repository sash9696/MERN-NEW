const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

const filterAll = document.querySelector("#all");
const filterActive = document.querySelector("#active");
const filterCompleted = document.querySelector("#completed");

const filterBox = document.querySelector("#filterBox");



let todos = [];
let filter = "all";

function addTodo() {
  const value = input.value.trim();

  if (!value) return;

  const newTodo = {
    text: value,
    completed: false,
    id: Date.now(),
  };

  todos.push(newTodo);

  input.value = "";

  saveTodos();
  renderTodos();
}

addBtn.addEventListener("click",addTodo);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});

// filterAll.addEventListener("click", () => {
//     filter = 'all';
//     renderTodos()
// })

// filterActive.addEventListener("click", () => {
//     filter = 'active';
//     renderTodos()
// })

// filterCompleted.addEventListener("click", () => {
//     filter = 'completed';
//     renderTodos()
// })

// event delegation

filterBox.addEventListener('click', (e) => {

    const btn = e.target;


    if(btn.tagName !== 'BUTTON') return;

    filter = btn.dataset.filter
    console.log(filter)
    renderTodos();
})



function saveTodos(){
// store values in key value pairs
// string
    localStorage.setItem('todos', JSON.stringify(todos))

}


function loadTodos(){

    const data = localStorage.getItem('todos');

    if(data) todos = JSON.parse(data)
    
}

function getFilteredTodos() {
  if (filter === "active") return todos.filter((todo) => !todo.completed);
  if (filter === "completed") return todos.filter((todo) => todo.completed);

  return todos;
}

function renderTodos() {
  list.innerHTML = "";

  const filtered = getFilteredTodos();

  filtered.forEach((todo) => {
    const li = document.createElement("li");

    li.innerText = todo.text;

    if (todo.completed) {
      li.style.textDecoration = "line-through";
    }

    // toggle complete
    li.addEventListener("click", () => {
      todo.completed = !todo.completed;
      renderTodos();
    });

    // delete BTN

    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", (event) => {
      event.stopPropagation();

      todos = todos.filter((t) => t.id !== todo.id);
      saveTodos();
      renderTodos();
    });

    // edit button

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      const newText = prompt("Edit todo", todo.text);

      if (newText) {
        todo.text = newText;
        saveTodos();
        renderTodos();
      }
    });

    li.appendChild(delBtn);
    li.appendChild(editBtn);

    list.append(li);
  });
}


loadTodos()
renderTodos()
