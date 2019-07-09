import React, { Component } from 'react'
import Header from './components/headers'
import TodoItem from './components/todoItem'
import Footer from './components/footer'
import './index.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [
        {
          text: '学习1',
          isDone: false,
          isEdit: false
        },
        {
          text: '学习2',
          isDone: false,
          isEdit: false
        },
        {
          text: '学习3',
          isDone: true,
          isEdit: false
        }
      ],
      status: 1
    }
  }

  changeStatus = (status) => {
    this.setState({
      status: status
    })
  }

  addItem = (item) => {
    let newArr = [...this.state.arr]
    newArr.push(item)
    this.setState({
      arr: newArr
    })
  }

  removeDone = () => {
    let newArr = this.state.arr.filter(item => {
      return !item.isDone
    })
    this.setState({
      arr: newArr
    })
  }

  removeOne = (index) => {
    let newArr = [...this.state.arr]
    newArr.splice(index, 1)
    this.setState({
      arr: newArr
    })
  }

  editItem = (index, item) => {
    return new Promise ((resolve, reject) => {
      let newArr = [...this.state.arr]
    newArr[index] = item
    this.setState({
      arr: newArr
    }, () => {
      resolve()
    })
    })
    
  }

  render () {
    const arr = this.state.arr
    const status = this.state.status
    return (
      <div className="App">
        <h1 style={{textAlign: "center"}}>TODOS</h1>
        <div className="todo-container">
          <Header
          addItem={this.addItem} />
          <ul className="todo-box">
            {  // eslint-disable-next-line
              arr.map((item, index) => {
                if (status === 1) {
                  return <TodoItem 
                        item={item} 
                        key={index}
                        index={index}
                        removeOne={this.removeOne}
                        editItem={this.editItem} />
                } else if (status === 2) {
                  if (!item.isDone) {
                    return <TodoItem 
                        item={item} 
                        key={index}
                        index={index}
                        removeOne={this.removeOne}
                        editItem={this.editItem} />
                  } else {
                    return null
                  }
                } else if (status === 3) {
                  if (item.isDone) {
                    return <TodoItem 
                        item={item} 
                        key={index}
                        index={index}
                        removeOne={this.removeOne}
                        editItem={this.editItem} />
                  } else {
                    return null
                  }
                }
              })
            }
          </ul>
          <Footer 
            changeStatus={this.changeStatus}
            arr={this.state.arr}
            removeDone={this.removeDone}
          />
        </div>
      </div>
    )
  }
}

export default App
