import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ListItem from './../components/ListItem';
import SearchBox from './../components/SearchBox';

export default class ToDoList extends React.Component {

	constructor(props){
		super(props)
	}
	

	render() {
			return (
					<div className="list-group-item">
			<h1 className="text-primary">To do list</h1>
			<div className="row">
				<input type="text" id="to-do-input"></input>
				<button type="button" className="btn btn-success" id="to-do-submit">Submit</button>
			</div>
			<div className="container-fluid border-dark">
				<ul id="to-do-list" className="flex flex-column text-secondary list pl0">
					<ListItem content="First" id={'listContent'}/>
					<ListItem content="Second" />
					<ListItem content="Third" />
				</ul>
			</div>
			<div className="container-fluid">
				<button type="button" className="btn btn-success" id="to-do-refresh">Refresh List</button>
			</div>
		</div>
			);
	}
}