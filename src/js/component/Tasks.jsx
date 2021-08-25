import React, { useEffect, useState } from "react";
import InputText from "./InputText.jsx";
import TaskLi from "./TaskLi.jsx";

const Tasks = () => {
	const [tasks, setTasks] = useState(["Task", "Task 2"]);
	const [newTask, setNewTask] = useState("");
	const [taskExists, setTaskExists] = useState(false);

	function newTaskChange(event) {
		setNewTask(event.target.value);
	}

	useEffect(() => {
		findDuplicateTasks(tasks, newTask);
	}, [newTask]);

	function findDuplicateTasks(tasks, newTask) {
		let position = tasks.findIndex(task => task === newTask);
		if (position === -1) {
			setTaskExists(false);
		} else {
			setTaskExists(true);
		}
	}

	function addNewTask(event) {
		if (event.key.toLowerCase() === "enter" && !taskExists) {
			let newTasks = [...tasks, newTask];
			setTasks(newTasks);
			findDuplicateTasks(newTasks, newTask);
		}
	}

	function deleteTask(indexToRemove) {
		let newTasks = [...tasks];
		newTasks.splice(indexToRemove, 1);
		setTasks(newTasks);
	}

	function modifyTask(newValue, position) {
		let newTasks = [...tasks];
		newTasks.splice(position, 1, newValue);
		setTasks(newTasks);
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6 card text-center mt-5 bg-light text-dark">
					<h1 className="p-4">todos</h1>
					<div className="rounded-0 border-light my-4">
						<InputText
							className="form-control form-control-lg rounded-0 border border-light shadow-sm text-wrap"
							onKeyDown={addNewTask}
							error={taskExists}
							onChange={newTaskChange}
						/>
					</div>

					<ul className="tasks rounded-0 border-light shadow-sm list-group list-group-flush text-left fw-lighter text-wrap">
						{tasks.map((task, index) => (
							<TaskLi
								key={index}
								task={task}
								error={task === newTask}
								index={index}
								modifyTask={modifyTask}
								deleteTask={deleteTask}
							/>
						))}
					</ul>
					<span
						className="bg-white rounded-0 border-light shadow-sm text-left pt-1 pb-1 pl-3 text-muted"
						id="item-left">
						{`${tasks.length} Things Left To Do`}
					</span>
					<p className="mt-5 fs-6 text-muted">
						Made by <a href="https://www.github.com/uxbel">Uxbel</a>
						, with love!
					</p>
				</div>
				<div className="col-3"></div>
			</div>
		</div>
	);
};

export default Tasks;
