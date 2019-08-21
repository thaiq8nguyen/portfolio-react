import React, { Component } from "react";

import { Menu } from "semantic-ui-react";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <Menu>
          <Menu.Item href="/">
            <Menu.Header>
              <strong>Logo</strong>
            </Menu.Header>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item href="/portfolio">Portfolio</Menu.Item>
            <Menu.Item href="/about">About</Menu.Item>
            <Menu.Item href="/contact">Contact</Menu.Item>
          </Menu.Menu>
        </Menu>
      </>
    );
  }
}
