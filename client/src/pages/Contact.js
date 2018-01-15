import React from "react";
import SideBar from "./../components/SideBar";
import { Header } from "semantic-ui-react";
import ContactForm from '../components/Form';
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
      <ContactForm />
    </div>
  );
}

export default Contact;
