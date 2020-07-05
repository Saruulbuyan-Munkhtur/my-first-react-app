import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './ContactList/Contact';

export default class Contacts extends React.Component {
    render() {
        return (
            <div class="container">
				<h1 class="text-primary">Friends</h1>
				<div class="row">
					<input type="text" id="to-do-input"></input>
					<button type="button" class="btn btn-success" id="to-do-submit">Submit</button>
				</div>
				<div class="container-fluid border-dark">
					<Contact />
				</div>
				<div class="container-fluid">
					<button type="button" class="btn btn-success" id="to-do-refresh">Refresh List</button>
				</div>
			</div>
        );
    }
}