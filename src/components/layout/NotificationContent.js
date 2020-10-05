import React, { Component } from "react";

import {
  Button,
  Grid,
  Header,
  Segment
} from "semantic-ui-react";

export default class NotificationContent extends Component {
  state = {};
  render() {
    const patients = [
      {
        name: "User 123",
        bio: "User 123 joined on 1990"
      },
      {
        name: "User 678",
        bio: "User 678 joined on 1989"
      },
      {
        name: "user 456",
        bio: "user 456 joined on 2001"
      }
    ];

    return (
      <Grid.Column textAlign='center'>
        {patients.map(patient => (

          <Segment>
            <Header as='h4'>User Info</Header>
            <p>
              {patient.bio}
            </p>
          </Segment>
        ))}
      </Grid.Column>
    );
  }
}
