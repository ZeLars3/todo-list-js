const todoObjectList = [];

class Todo {
    constructor(item) {
        this.ulElement = item;
    }

    add() {
        const todoInput = document.querySelector(".input").value;
        if (todoInput === "") {
            alert("Вы ничего не добавили!");
        } else {
            const todoObject = {
                id: todoObjectList.length,
                todoText: todoInput,
                isDone: false,
            }

            todoObjectList.push(todoObject);
            document.querySelector(".input").value = "";
            this.display();
        }
    }

    doneUndone(x) {
        const list = document.querySelector(".list");
        const liElement = document.querySelector(`li[data-id="${x}"]`);
        const todoObject = todoObjectList[x];
        todoObject.isDone = !todoObject.isDone;

        this.display();
    }

    display() {
        this.ulElement.innerHTML = " ";
        todoObjectList.forEach((object_item) => {

            const liElement = document.createElement("li");

            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);

            liElement.addEventListener("click", (e) => {
                this.doneUndone(e.target.getAttribute("data-id"));
            })

            if (object_item.isDone) {
                liElement.classList.add("checked");
            }

            this.ulElement.appendChild(liElement);
        })
    }
}

const listSection = document.querySelector(".list");

todoList = new Todo(listSection);

document.querySelector(".input").addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        todoList.add();
    }
})

document.querySelector(".add-button").addEventListener("click", () => {
    todoList.add();
})