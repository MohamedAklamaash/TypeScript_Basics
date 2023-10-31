import './style.css';

interface toDo {
  title: string,
  isCompleted: boolean,
  readonly id: string
}

let todoArr: toDo[] = [];

const toDosContainer = document.querySelector(".todos") as HTMLDivElement;

const todoInput = <HTMLInputElement>document.getElementsByName("todoAdd")[0];

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  let todo: toDo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.ceil(Math.random() * 1000))
  };
  todoArr.push(todo);
  todoInput.value = "";
  renderTodos(todoArr);
}

const deleteTodo = (id: string) => {
  const index = todoArr.findIndex((item) => item.id === id);
  todoArr.splice(index, 1);
  renderTodos(todoArr);
}

const generateADiv = (todo: toDo) => {
  const todoDiv: HTMLDivElement = document.createElement("div");
  todoDiv.className = "todos";
  //creating a checkBox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = todo.isCompleted;
  checkBox.onchange = () => {
    pTag.className = checkBox.checked ? "textCut" : "";
    todo.isCompleted = !todo.isCompleted;
  }
  //creating a paragraph element

  const pTag: HTMLParagraphElement = document.createElement("p");
  pTag.innerText = todo.title;
  pTag.className = todo.isCompleted ? "textCut" : "";
  //creating a delete btn

  const deleteBtn: HTMLButtonElement = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.onclick = () => {
    deleteTodo(todo.id);
  }

  todoDiv.append(checkBox, pTag, deleteBtn);
  toDosContainer.append(todoDiv);
}

const renderTodos = (todos: toDo[]) => {
  toDosContainer.innerText = "";
  todos.forEach((todo) => {
    generateADiv(todo);
  })
}