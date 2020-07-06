import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ListItem from './ToDoList/ListItem';

export default class ToDoList extends React.Component {

	constructor(props){
		super(props)
	}
	// const addItem = () => {

	// }
	// let to-do-list = document.getElementById('to-do-list');
    render() {
        return (
            <div class="list-group-item">
				<h1 class="text-primary">To do list</h1>
				<div class="row">
					<input type="text" id="to-do-input"></input>
					<button type="button" class="btn btn-success" id="to-do-submit">Submit</button>
				</div>
				<div class="container-fluid border-dark">
					<ul id="to-do-list" class="flex flex-column text-secondary list pl0">
						<ListItem content="First" id={'listContent'}/>
						<ListItem content="Second" />
						<ListItem content="Third" />
					</ul>
				</div>
				<div class="container-fluid">
					<button type="button" class="btn btn-success" id="to-do-refresh">Refresh List</button>
				</div>
			</div>
        );
    }
}