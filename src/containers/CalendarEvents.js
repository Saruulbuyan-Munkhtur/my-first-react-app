import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default class Navbar extends React.Component {
    render() {
        return (
            <div className="list-group-item">
				<h1 className="text-primary">To do list</h1>
				<div className="row">
					<input type="text" id="to-do-input"></input>
					<button type="button" className="btn btn-success" id="to-do-submit">Submit</button>
				</div>
				<div className="container-fluid border-dark">
					<ul id="to-do-list" className="text-secondary">
						<li className="active">First</li>
						<li className="active">Second</li>
						<li className="active">Third</li>
					</ul>
				</div>
				<div className="container-fluid">
					<button type="button" className="btn btn-success" id="to-do-refresh">Refresh List</button>
				</div>
			</div>
        );
    }
}