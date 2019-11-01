import React, { Component } from 'react'


export default class jokeCard extends Component {
    render() {
        
        const {setup,delivery} = this.props
        // console.log(setup)
        // console.log(delivery)
        return (
            <div>
              <h1>{setup}</h1>
              <h1>{delivery}</h1>
            </div>
        )
    }
}
