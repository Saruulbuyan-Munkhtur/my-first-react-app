import React from 'react';
//import 'bootstrap/dist/css/bootstrap.css';
import TimerDate from './TimerDate';
import ToDoList from './ToDoList';
import CalendarEvents from './CalendarEvents';
import Contacts from './Contacts';
import ErrorBoundry from '../components/ErrorBoundry';

export default class Body extends React.Component {
    render() {
        return (
            <div className="flex flex-wrap justify-center">
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
                    <ErrorBoundry>
                        <Contacts />
                    </ErrorBoundry>
                </div>

            </div>
        );
    }
}