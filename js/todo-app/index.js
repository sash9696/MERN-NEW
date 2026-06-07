

const input = document.querySelector('#todoInput')
const addBtn = document.querySelector('#addBtn')
const list = document.querySelector('#todoList')


let todos = [];


addBtn.addEventListener("click", () => {

    const value = input.value;

    if(!value.trim()) return;

    todos.push(value)

    input.value = '';
    

    renderTodos()

})


function renderTodos(){
    list.innerHTML = '';

    todos.forEach((todo, index) => {

        const li = document.createElement('li');
        li.innerText = todo;

        // delete button

        const delBtn = document.createElement('button')
        delBtn.innerText = 'Delete'

        delBtn.addEventListener('click', () => {
            todos.splice(index, 1);
            renderTodos();
        })

        console.log(li)

        li.appendChild(delBtn)
        list.appendChild(li)



    })





}
