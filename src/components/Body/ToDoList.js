import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default class ToDoList extends React.Component {
    render() {
        return (
            <div class="list-group-item">
				<h1 class="text-primary">To do list</h1>
				<div class="row">
					<input type="text" id="to-do-input"></input>
					<button type="button" class="btn btn-success" id="to-do-submit">Submit</button>
				</div>
				<div class="container-fluid border-dark">
					<ul id="to-do-list" class="text-secondary">
						<li class="active">First</li>
						<li class="active">Second</li>
						<li class="active">Third</li>
					</ul>
				</div>
				<div class="container-fluid">
					<button type="button" class="btn btn-success" id="to-do-refresh">Refresh List</button>
				</div>
			</div>
        );
    }
}