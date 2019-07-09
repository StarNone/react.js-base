import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class One extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="one">
                <h1>第一个页面</h1>
                <Link to="/two">跳转到第二个页面</Link>
            </div>
        )
    }
}

export default One;
