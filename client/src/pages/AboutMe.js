import React from "react";
import SideBar from "./../components/SideBar";
import { Image, Segment, Grid } from "semantic-ui-react";

const AboutMe = () => {

  const style = {
    container: {
      marginLeft: "300px",
      padding: "3%"
    }
  }

  return(
    <div style={style.container}>
      <SideBar/>
      <Grid textAlign="center">
        <Grid.Column width={4}>
          <Image src="http://via.placeholder.com/350x150"/>
        </Grid.Column>
        <Grid.Column width={9}>
          <Segment raised>
            Bacon ipsum dolor amet tenderloin jowl ham venison bresaola pork loin drumstick shankle brisket pancetta. Bacon tail boudin pig turducken cupim pork chop buffalo strip steak shankle meatloaf. Burgdoggen prosciutto short ribs salami pork loin. Venison sirloin rump prosciutto ham hock drumstick ribeye shoulder pork t-bone corned beef beef filet mignon turducken.

            Pork belly filet mignon frankfurter tongue, porchetta chuck beef shank andouille leberkas tenderloin flank ham tri-tip. Brisket fatback tenderloin chuck bresaola frankfurter venison shank meatloaf ribeye turkey buffalo pastrami kielbasa. Shoulder bacon jowl bresaola brisket pastrami. Filet mignon alcatra corned beef, ham hock tri-tip tail strip steak pork swine shoulder porchetta frankfurter ball tip rump capicola.

            Salami shank alcatra venison sausage short ribs shankle leberkas rump jowl pork ham hock shoulder pork loin. Ham hock brisket filet mignon beef ribs, porchetta tail swine jowl salami short loin picanha bresaola. Sirloin tongue venison ribeye shankle meatloaf. Pig porchetta pork loin, beef ribs chicken prosciutto t-bone jowl biltong kielbasa sausage tri-tip chuck swine. Tongue leberkas kevin, ribeye capicola alcatra rump ham hock biltong flank. Ham hock ball tip turducken leberkas, meatloaf frankfurter jerky andouille sausage shoulder rump drumstick meatball. Drumstick picanha spare ribs turducken capicola, pig shankle chicken landjaeger meatball filet mignon strip steak tenderloin.
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default AboutMe;
