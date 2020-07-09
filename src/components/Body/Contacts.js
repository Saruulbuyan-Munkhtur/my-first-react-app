import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CardList from './ContactList/CardList';
import { contacts } from './ContactList/contacts';
import SearchBox from './ContactList/SearchBox';

class Contacts extends React.Component {
  constructor(props) {
    super();
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      contacts: contacts,
      searchfield: ''
    }    
  }
  
  // handleClick() {
  //   alert('Click happened');
  // }

  onSearchChange = (event) => {
    this.setState({'searchfield': event.target.value})
  }

  
  render() {
    const filteredContacts = this.state.contacts.filter(contacts => {
      return contacts.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
      return (
          <div className="container">
            <h1 className="text-primary tc">Friends</h1>
            <div className="tc">
              <SearchBox searchChange={this.onSearchChange}/>
              {/* <button type="button" className="ph2 pv1 mh3 btn btn-success" id="to-do-submit">Search</button> */}
            </div>
            <div className="flex flex-wrap bg-light-gray">
              <CardList contacts={filteredContacts}/>
            </div>
            <div className="container-fluid">
              <button type="button" className="btn btn-success" id="to-do-refresh" onClick={this.handleClick}>Refresh List</button>
            </div>
          </div>
      );
    }
}

export default Contacts;