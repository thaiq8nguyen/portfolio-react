import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import styles from "./Landing.module.scss";

export default class Landing extends Component {
  render() {
    return (
      <>
        <Grid
          className={styles.landing}
          textAlign="center"
          verticalAlign="middle"
        >
          <Grid.Column width={8}>
            <Card fluid raised={false}>
              <Card.Content>
                <Card.Header>Hello, I'm Thai Nguyen</Card.Header>
                <Card.Description>
                  I'm a full stack web developer
                </Card.Description>
              </Card.Content>
              <Card.Content>
                {/* <Button as="a" href="/portfolio" primary>
                  View my works <Icon name="arrow right" />
                </Button> */}
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </>
    );
  }
}
