import React from "react";
import SideBar from "./../components/SideBar";
import { Header } from "semantic-ui-react";

const Contact = () => {

  const style = {
    container: {
      marginLeft: "300px"
    }
  }

  return(
    <div style={style.container}>
      <SideBar/>
      <Header>Contact</Header>
    </div>
  );
}

export default Contact;
