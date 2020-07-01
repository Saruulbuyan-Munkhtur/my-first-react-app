import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Clock from 'react-clock';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className='col-lg'>
                <Clock />
            </div>
        );
    }
}