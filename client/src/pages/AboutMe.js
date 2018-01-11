import React from "react";
import SideBar from "./../components/SideBar";
import { Header } from "semantic-ui-react";

const AboutMe = () => {

  const style = {
    container: {
      marginLeft: "300px"
    }
  }

  return(
    <div style={style.container}>
      <SideBar/>
      <Header>About Me</Header>
    </div>
  );
}

export default AboutMe;
