import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import House from './../House/House'

export default class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            houses: []
        }

    }


    render(){
        const house = this.state.houses.map(() => {
            
        })

       

        return(
                <div>
                    <div>Dashboard</div>
                    <House />
                        <Link to='/Wizard'>
                            <button>Add New Property</button>
                        </Link>
                </div>
            )
    }
}