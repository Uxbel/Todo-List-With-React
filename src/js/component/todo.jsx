import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//create component master Todo
const Todo = () => {
	const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3"]);
	const [xIsShown, setXIsShown] = useState({ state: false, index: 0 });

	const deleteItem = listIndex => {
		let makeNewList = todos.filter((item, i) => listIndex != i);
		setTodos(makeNewList);
	};

	let makeList = todos.map((item, i) => {
		return (
			<li
				key={i}
				className="list-group-item"
				//onMouseEnter={() => setXIsShown({ state: true, index: i })}
				//onMouseLeave={() => setXIsShown({ state: false, index: 0 })}
			>
				{item}

				<button
					type="button"
					className="close"
					aria-label="Close"
					onClick={() => deleteItem(i)}>
					<i className="far fa-trash-alt fa-sm m-1"></i>
				</button>
			</li>
		);
	});

	const newToDo = onKeyDownEvent => {
		if (onKeyDownEvent.keyCode === 13) {
			const userInput = onKeyDownEvent.target.value;
			const newToDoList = [...todos, userInput];
			setTodos(newToDoList);
			onKeyDownEvent.targe.value = "";
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6 card text-center mt-5 bg-light text-dark">
					<h1 className="p-4">todos</h1>

					<div className="rounded-0 border-light my-4">
						<input
							type="text"
							className="form-control form-control-lg rounded-0 border border-light shadow-sm text-wrap"
							onKeyDown={newToDo}
							id="fname"
							name="fname"
							placeholder="What needs to be done?"></input>
					</div>
					<ul className="rounded-0 border-light shadow-sm list-group list-group-flush text-left fw-lighter text-wrap">
						{makeList}
					</ul>
					<span
						className="bg-white rounded-0 border-light shadow-sm text-left pt-1 pb-1 pl-3 text-muted"
						id="item-left">
						{`${todos.length} Things Left To Do`}
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

export default Todo;

Todo.PropTypes = {};
