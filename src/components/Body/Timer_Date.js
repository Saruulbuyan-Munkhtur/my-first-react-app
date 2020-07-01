import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Clock from 'react-clock';
import Moment from 'react-moment';
// import 'moment-timezone';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='col-lg'>
                <Clock />
                <Moment />
            </div>
        );
    }
}