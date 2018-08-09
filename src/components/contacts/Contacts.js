import React, { Component, Fragment } from 'react';
import Contact from './Contact';

import { Consumer } from '../../context';

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          //pull contacts from context state
          const { contacts } = value;
          return (
            <Fragment>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
