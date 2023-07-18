const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", function() {
  if (taskInput.value === "") {
    alert("Please enter a task!");
  } else {
    const li = document.createElement("li");
    li.innerText = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function() {
      li.remove();
    });
  }
});
