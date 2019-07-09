import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Two extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="two">
                <h1>第二个页面</h1>
                <Link to="/">跳转到第一个页面</Link>
            </div>
        )
    }
}

export default Two;
