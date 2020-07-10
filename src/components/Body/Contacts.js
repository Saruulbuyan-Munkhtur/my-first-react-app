import React from 'react';
//import './components/node_modules/bootstrap/dist/css/bootstrap.css';
import CardList from './components/CardList';
import { contacts } from './components/contacts';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

class Contacts extends React.Component {
  constructor(props) {
    super();
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      contacts: [],
      searchfield: ''
    }    
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then( users => this.setState({ contacts: users }))
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
    if (this.state.contacts.length === 0) {
      return <h1>Loading...</h1>
    }
    else {
      return (
          <div className="container">
            <h1 className="text-primary tc">Friends</h1>
            <div className="tc">
              <SearchBox searchChange={this.onSearchChange}/>
              {/* <button type="button" className="ph2 pv1 mh3 btn btn-success" id="to-do-submit">Search</button> */}
            </div>
            <div className="flex flex-wrap bg-light-gray">
              <Scroll>
                <CardList contacts={filteredContacts}/>
              </Scroll>
            </div>
            <div className="container-fluid">
              <button type="button" className="btn btn-success" id="to-do-refresh" onClick={this.handleClick}>Refresh List</button>
            </div>
          </div>
      );
    }
  }
}

export default Contacts;