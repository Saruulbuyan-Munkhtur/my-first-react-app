import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'



export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Body />
                <Footer />
            </div>
        )
    }
}