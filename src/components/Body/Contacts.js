import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './ContactList/Contact';
import { contacts } from './ContactList/contactInfo';

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    alert('Click happened');
  }
  
  render() {
        return (
            <div class="container">
              <h1 class="text-primary">Friends</h1>
              <div class="row">
                <input type="text" id="to-do-input"></input>
                <button type="button" class="btn btn-success" id="to-do-submit">Submit</button>
              </div>
              <div class="container-fluid border-dark">
                <Contact id={contacts[0].id} name={contacts[0].name} email={contacts[0].email} phoneNumber={contacts[0].phoneNumber}/>
              </div>
              <div class="container-fluid">
                <button type="button" class="btn btn-success" id="to-do-refresh" onClick={this.handleClick}>Refresh List</button>
              </div>
            </div>
        );
    }
}