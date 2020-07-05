import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Timer_Date from './Body/Timer_Date';
import To_Do_List from './Body/To_Do_List';
import Calendar_Events from './Body/Calendar_Events';
import Contacts from './Body/Contacts';

export default class Body extends React.Component {
    render() {
        return (
            <div className = "container">
                <div className="row">
                    <Timer_Date />
                </div>
                <div className="row">
                    <div className='col-lg'>
                        <To_Do_List />
                    </div>
                    <div className='col-lg'>
                        <Calendar_Events />
                    </div>
                </div>
                <div className='row'>
                    <Contacts />
                </div>

            </div>    
        );
    }
}