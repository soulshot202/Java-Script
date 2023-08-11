const todos = [
  { text: "Buy groceries", completed: false },

  { text: "Finish homework", completed: true },

  { text: "Go for a run", completed: false },

  { text: "Call a friend", completed: false },

  { text: "Read a book", completed: true },
];

const ul = document.querySelector("ul");
const ulFinished = document.querySelector("#finished");
const newTodoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("button");
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", (e) => {
  const value = e.target.value;

  const filteredTodos = [];

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].text.toLowerCase().includes(value.toLowerCase())) {
      filteredTodos.push(todos[i]);
    }
  }
  generateTodos(filteredTodos);
});

addButton.addEventListener("click", () => {
  const inputValue = newTodoInput.value.trim();
  if (inputValue) {
    todos.push({
      text: inputValue,
      completed: false,
    });
    generateTodos(todos);
    newTodoInput.value = "";
  }
});

function generateTodos(todosToAdd) {
  ul.innerHTML = "";
  ulFinished.innerHTML = "";

  for (let i = 0; i < todosToAdd.length; i++) {
    const li = document.createElement("li");
    li.textContent = todosToAdd[i].text;
    if (todosToAdd[i].completed) {
      li.classList.add("finished");
    }
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todosToAdd[i].completed;

    checkBox.addEventListener("change", (e) => {
      todos[i].completed = !todos[i].completed;
      generateTodos(todos);
    });

    li.append(checkBox);
    if (todosToAdd[i].completed) {
      ulFinished.append(li);
    } else {
      ul.append(li);
    }
  }
}
generateTodos(todos);
