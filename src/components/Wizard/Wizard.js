import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Wizard extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: ''
        }
        
        this.handleInput = this.handleInput.bind(this);
    }


    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div>
            <div>Wizard</div>
            <input
                type='text'
                placeholder='Name'
                name='name'
                onChange={this.handleInput}
                value={this.state.name}
                />
            <br></br>

            <input
                type='text'
                placeholder='Address'
                name='address'
                onChange={this.handleInput}
                value={this.state.address}
            />
            <br></br>

            <input
                type='text'
                placeholder='City'
                name='city'
                onChange={this.handleInput}
                value={this.state.city}
            />
            <br></br>

            <input
                type='text'
                placeholder='State'
                name='state'
                onChange={this.handleInput}
                value={this.state.state}
            />
            <br></br>

            <input
                type='number'
                placeholder='Zip Code'
                name='zipCode'
                onChange={this.handleInput}
                value={this.state.zipCode}
            />
            <br></br>

            <Link to = '/'>
                <button>Cancel</button>
            </Link>
            </div>
        )
    }
}