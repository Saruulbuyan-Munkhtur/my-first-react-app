import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import TimerDate from './Body/TimerDate';
import ToDoList from './Body/ToDoList';
import CalendarEvents from './Body/CalendarEvents';
import Contacts from './Body/Contacts';

export default class Body extends React.Component {
    render() {
        return (
            <div className = "flex flex-wrap justify-center">
                <div className="w-100 pa3 mr2 h2 mv3 mb5 pb3">
                    <TimerDate />
                </div>
                <div className="flex w-100 pa3 mr2">
                    <div className='w-50'>
                        <ToDoList />
                    </div>
                    <div className='w-50'>
                        <CalendarEvents />
                    </div>
                </div>
                <div className='w-100 pa3 mr2'>
                    <Contacts />
                </div>

            </div>    
        );
    }
}