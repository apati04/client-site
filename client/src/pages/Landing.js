import React from "react";
import background from "./../images/golf-course.jpg";
import { Link } from "react-router-dom";
import { Container, Header, Icon, Transition } from "semantic-ui-react";

const Landing = () => {

  const style = {
    container: {
      minHeight: "100vh",
      minWidht: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    },
    font: {
      color: "orange"
    }
  }

  return (
      <Container
        fluid
        textAlign="center"
        style={style.container}
      >
        <Transition animation="fade down" duration={3000} transitionOnMount={true}>
          <Container>
            <Header size="huge" style={style.font}>JAMES OH</Header>
            <Header size="large" style={style.font}>GOLF INSTRUCTOR</Header>
            <Link to="/aboutme">
              <Icon
                name="arrow down"
                size="huge"
                color="orange"
              />
            </Link>
          </Container>
        </Transition>
      </Container>
  );
}

export default Landing;
