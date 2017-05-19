import React, { Component } from 'react';
import {Button, Well, ListGroup, ListGroupItem} from 'react-bootstrap';
import AppActions from '../actions/AppActions';

class ContactListItem extends Component {

  handleDeleteClick(id){
    AppActions.deleteContact(id);
  }

  render() {
    const {contact} = this.props;
    return (
      <Well key={contact.id}>
        <h4>{contact.name}</h4>
        <ListGroup key={contact.id}>
          <ListGroupItem>Email: {contact.email}</ListGroupItem>
          <ListGroupItem>Phone: {contact.phone}</ListGroupItem>
        </ListGroup>
        <Button bsStyle="danger" onClick={this.handleDeleteClick.bind(this, contact.id)}>Delete</Button>
      </Well>
    );
  }
}

export default ContactListItem;
