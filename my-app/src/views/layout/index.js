import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Layout extends Component {

    handleJump = (path) => {
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="layout">
                <h1 className="title">
                    欢迎来到react的世界
                </h1>
                <aside>
                    <ul>
                        <li>
                            <Link to="/layout">
                                首页
                            </Link>
                        </li>
                        <li>
                            <Link to="/layout/two">第二页</Link>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.handleJump('/layout')
                            }}>跳转到首页</button>
                        </li>
                        <li>
                            <button onClick={() => {
                                this.handleJump('/layout/two')
                            }}>跳转到第二页</button>
                        </li>
                    </ul>
                </aside>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
