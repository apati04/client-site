import React from "react";
import SideBar from "./../components/SideBar";
import background from "./../images/aboutme.webp";
import profilePic from "./../images/profile-pic.webp";
import { Image, Segment, Grid, Transition } from "semantic-ui-react";

const AboutMe = () => {

  const style = {
    container: {
      minHeight: "100vh",
      marginLeft: "260px",
      padding: "3%",
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    },
    h1: {
      color: "tomato"
    }
  }

  return(
    <div style={style.container}>
      <SideBar/>
      <Transition animation="fade up" duration={2000} transitionOnMount={true}>
        <Grid textAlign="center">
          <Grid.Column width={4}>
            <Image src={profilePic} fluid/>
          </Grid.Column>
          <Grid.Column width={9}>
            <Segment raised>
              <h1 style={style.h1}>ABOUT ME</h1>
              <p>James Oh is a sought-after PGA teaching pro in Lakewood, California. He has a track record of inspiring and motivating competitive junior golfers, helping over 50 students earn full scholarships to the nation’s Top Division 1 golf programs.</p>
              <p>As a former PGA touring player, James understands, on a visceral level, what it takes to bring your dreams to fruition. He works closely with his students to both master the physical technicalities of a golf swing and also instructs and inspires them to harness the mindset of a champion—a distinguishing quality that keeps him and his students miles ahead of the competition. Some notable names under his guidance include two-time USGA Champion Eun-Jeong Seong, PGA Tour Player Michael Kim, Walker Cup & Palmer Cup Member Mike Weaver, LPGA Tour Winner Hana Jang, LPGA & USGA Champion Jenny Shin, USGA Champion Brianna Do, and others. Here is what some of his students have to say about him.</p>
              <p>A native and lifelong resident of Southern California, James believes in giving back to the community he grew up in. He has been a part of over five dozen charity golf events and volunteers his time at various Boys & Girls Clubs all across Southern California. In 2017, his passion to "pay-it-forward" established the James Oh Group, a non-profit whose mission is to empower disadvantaged youth towards their own inner greatness. You can learn more about the mission here.</p>
              <p>When he isn't on the golf course or mentoring young people, James likes to indulge his inner foodie and scope out the latest restaurants in town.</p>
            </Segment>
            <Segment raised>
              <h1 style={style.h1}>PHILANTROPHY</h1>
              <h3>Where It All Started</h3>
              <p>As a junior, James Oh dreamt of one day playing on the PGA tour. At 21, he found himself living the dream, playing with some of the greatest golfers in the world.  “I understood what it takes to realize that dream and I became passionate about helping kids understand the commitment it takes to get where you want to go,” he says. And thus, he began looking back over his shoulder and extending a hand of hope and encouragement toward the generations that followed. And although not officially recognized as a 501(c)(3) until 2017, the work of the James Oh Group dates back to over a decade.</p>
              <h3>What We Believe and How We'll Achieve</h3>
              <p>The James Oh Group believes in the power of mentorship to transform young lives.  We believe in old-school principles of hard work, dedication, and perseverance. We believe that the values inherent to the game of golf are also the values that help young people achieve in life. Through philanthropy, education, and community service, we partner up with youth groups across Southern California to instill a sense of passion and pride in the game, and in themselves.</p>
            </Segment>
          </Grid.Column>
        </Grid>
      </Transition>
    </div>
  );
}

export default AboutMe;
