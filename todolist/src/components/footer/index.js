import React, { Component } from 'react';

class footer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

    handleChange = (num) => {
        this.props.changeStatus(num)
    }
    
    render() {
        const arr = this.props.arr
        let num = 0
        const doneArr = arr.filter(item => {
            return item.isDone
        })  // eslint-disable-next-line
        arr.map((item) => {
            if (!item.isDone) {
                num ++
            }
        })
        return (
            <div className="todo-footer">
                <span>剩余{num}项</span>
                <button onClick={() => {
                    this.handleChange(1)
                }}>ALL</button>
                <button
                onClick={() => {
                    this.handleChange(2)
                }}>未完成</button>
                <button 
                onClick={() => {
                    this.handleChange(3)
                }}>已完成</button>
                {
                doneArr.length > 0 ? <button onClick={this.props.removeDone}>清楚已完成</button> : null
                }
            </div>
        );
    }
}

export default footer;
