let taskList = document.getElementById("task-list");
let newTaskInput = document.getElementById("new-task");

function addTask() {
	let taskName = newTaskInput.value.trim();

	if (taskName) {
		let li = document.createElement("li");
		let checkbox = document.createElement("input");

		checkbox.type = "checkbox";

        checkbox.addEventListener('change', function() {
			if (this.checked) {
				label.style.textDecoration = "line-through";
			} else {
				label.style.textDecoration = "none";
			}
		});

		let label = document.createElement("label");
		label.textContent = taskName;

		let deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.onclick = deleteTask;

		li.appendChild(checkbox);
		li.appendChild(label);
		li.appendChild(deleteButton);
		taskList.insertBefore(li, taskList.childNodes[0]);
		newTaskInput.value = "";
	}
}

function deleteTask(event) {
	let li = event.target.parentNode;
	li.remove();
}