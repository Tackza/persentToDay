import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        date: new Date().toLocaleString()
    }
    timer = () => {
        setInterval(() => {
            this.setState({ date: new Date().toLocaleString() })
        }, 1000);
    }

    render() {

        return (
            <div>
                <h2>{this.state.date}</h2>
                {this.timer()}
            </div>


        )
    }
}



