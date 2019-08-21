import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Navbar from "../components/Navbar/Navbar";
export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <Navbar />
        <Grid textAlign="center">
          <Grid.Column width={4}>Portfolio</Grid.Column>
        </Grid>
      </div>
    );
  }
}
