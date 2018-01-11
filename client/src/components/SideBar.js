import React from "react";
import { Sidebar as SideBar, Menu, Icon, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <SideBar
      as={Menu}
      visible
      direction="left"
      vertical
      inverted
    >
      <Menu.Item>
        <Link to="/home">
          <Header size="huge" style={{color: "White"}}>JAMES OH</Header>
        </Link>
      </Menu.Item>
      <Menu.Item name="aboutme">
        <Link to="/aboutme">
          <Icon name="help"/>
          ABOUT ME
        </Link>
      </Menu.Item>
      <Menu.Item name="contact">
        <Link to="/contact">
          <Icon name="phone"/>
          CONTACT ME
        </Link>
      </Menu.Item>
    </SideBar>
  );
}

export default Sidebar;
