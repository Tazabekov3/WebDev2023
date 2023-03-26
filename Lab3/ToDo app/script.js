let taskList = document.getElementById("task-list");
let newTaskInput = document.getElementById("new-task");
let newTaskDeadline = document.getElementById("task-deadline");

function addTask() {
	let taskName = newTaskInput.value.trim();
	let taskDeadline = newTaskDeadline.value.trim();

	if (taskName) {
		let li = document.createElement("li");
		let checkbox = document.createElement("input");

		checkbox.type = "checkbox";

        checkbox.addEventListener('change', function() {
			if (this.checked) {
				label.style.textDecoration = "line-through";
				deadlineLabel.style.textDecoration = "line-through";
			} else {
				label.style.textDecoration = "none";
				deadlineLabel.style.textDecoration = "none";
			}
		});

		let label = document.createElement("label");
		label.textContent = taskName;
		
		let deadlineLabel = document.createElement("label");
		deadlineLabel.textContent = taskDeadline;

		let deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.onclick = deleteTask;

		li.appendChild(checkbox);
		li.appendChild(label);
		li.appendChild(deadlineLabel);
		li.appendChild(deleteButton);
		taskList.insertBefore(li, taskList.childNodes[0]);

		let dl = new Date(newTaskDeadline.value);
		let today = new Date();
		let diff = dl.getTime() - today.getTime();

		newTaskInput.value = "";
		newTaskDeadline.value = "";

		setTimeout(function() {
			li.style.backgroundColor = "red";
		}, diff);
	}
}

function calculateDeadline(date, li) {
	let today = new Date();
	let diff = (date.getTime() - today.getTime());
	alert(diff);
	if (diff <= 0) {
		li.style.backgroundColor = "red";
		clearInterval(timer);
	}
}

function deleteTask(event) {
	let li = event.target.parentNode;
	li.remove();
}