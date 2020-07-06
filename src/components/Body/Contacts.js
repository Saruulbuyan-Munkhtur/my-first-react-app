import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CardList from './ContactList/CardList';
import { contacts } from './ContactList/contacts';


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
            <div className="container">
              <h1 className="text-primary tc">Friends</h1>
              <div className="tc flex flex-wrap">
                <input id="to-do-input" class="input-reset ba b--black-20 pa2 mb2 db w-40 br3" type="text" aria-describedby="name-desc"></input>
                <button type="button" className="ph2 pv1 mh3 btn btn-success" id="to-do-submit">Search</button>
              </div>
              <div className="flex flex-wrap bg-light-gray">
                <CardList contacts={contacts}/>
              </div>
              <div className="container-fluid">
                <button type="button" className="btn btn-success" id="to-do-refresh" onClick={this.handleClick}>Refresh List</button>
              </div>
            </div>
        );
    }
}