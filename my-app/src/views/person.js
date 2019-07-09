import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div className="person">
                <h1>当前用户的用户id是：
                    {this.props.match.params.id}
                </h1>
            </div>
        );
    }
}

export default Person;
