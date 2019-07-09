import React, { Component } from 'react'

class todoItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    handleChange = (e) => {
        const {editItem, index} = this.props
        const value = e.target.type === 'checkbox'? e.target.checked : e.target.value
        const item = {
            ...this.props.item,
            [e.target.name]: value
        }
        editItem(index, item)
    }

    handleDoubleClick = (e) => {
        const {editItem, index} = this.props
        editItem(index, {
            ...this.props.item,
            isEdit: true
        }).then(() => {
            this.refs.editor.focus()
            this.refs.editor.value = this.props.item.text
        })
    } 

    handleBlur = (e) => {
        this.props.editItem(this.props.index, {
            ...this.props.item,
            text: this.refs.editor.value,
            isEdit: false
        })
    }

    render() {
        const isShowEdit = () => {
            const {item, index} = this.props
            if (!item.isEdit) {
                return (<div className="todo-item-body">
                    <input 
                    type="checkbox" 
                    name="isDone" 
                    value={item.isDone}
                    onChange={this.handleChange}
                    checked={item.isDone} />
                    <span
                    className={item.isDone? 'isDone' : ''}
                    onDoubleClick={this.handleDoubleClick}>{item.text}</span>
                    <button onClick={() => {
                        this.props.removeOne(index)
                    }}>×</button>
                    </div>)
            } else {
                return (
                    <div className="todo-item-editor">
                        <input 
                        type="text" 
                        name="text"
                        ref="editor"
                        onChange={this.handleChange}
                        onBlur={this.handleBlur} />
                    </div>
                )
            }
        }
        return (
            <li className="todo-item">
                {
                    isShowEdit()
                }
            </li>
        )
    }
}

export default todoItem
