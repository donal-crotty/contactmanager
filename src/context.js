import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Doe',
        email: 'kdoe@gmail.com',
        phone: '555-777-5555'
      },
      {
        id: 3,
        name: 'Joe Williams',
        email: 'jwilliams@gmail.com',
        phone: '555-555-4546'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
