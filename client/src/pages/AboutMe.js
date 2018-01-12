import React from "react";
import SideBar from "./../components/SideBar";
import background from "./../images/aboutme.webp";
import profilePic from "./../images/profile-pic.webp";
import { Image, Segment, Grid, Transition, Message } from "semantic-ui-react";

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
    },
    h3: {
      color: "#00aca4"
    }
  }

  return(
    <div style={style.container}>
      <SideBar/>
      <Transition animation="fade up" duration={2000} transitionOnMount={true}>
        <Grid>
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
              <h3 style={style.h3}>Where It All Started</h3>
              <p>As a junior, James Oh dreamt of one day playing on the PGA tour. At 21, he found himself living the dream, playing with some of the greatest golfers in the world.  “I understood what it takes to realize that dream and I became passionate about helping kids understand the commitment it takes to get where you want to go,” he says. And thus, he began looking back over his shoulder and extending a hand of hope and encouragement toward the generations that followed. And although not officially recognized as a 501(c)(3) until 2017, the work of the James Oh Group dates back to over a decade.</p>
              <h3 style={style.h3}>What We Believe and How We'll Achieve</h3>
              <p>The James Oh Group believes in the power of mentorship to transform young lives.  We believe in old-school principles of hard work, dedication, and perseverance. We believe that the values inherent to the game of golf are also the values that help young people achieve in life. Through philanthropy, education, and community service, we partner up with youth groups across Southern California to instill a sense of passion and pride in the game, and in themselves.</p>
            </Segment>

            <Segment raised>
              <h1 style={style.h1}>ACCOMPLISHMENTS</h1>
              <p>James picked up his first golf club at the age of 5. By age 11, he won his first tournament. When he reached high school, the game of golf had coursed through his veins with vigor and determination. He went on to win countless local and regional tournaments including the Moore League Championship and Knabe Cup. He has since progressed year after year, searching for the next course to conquer. Here’s just a quick run down of his career:</p>
              <Segment vertical>
                <Message.List>
                  <Segment vertical><Message.Item>1996: Became the youngest player to qualify for U.S Amateur since 1916</Message.Item></Segment>
                  <Segment vertical><Message.Item>1998: Won the U.S. Junior Amateur Golf Championship</Message.Item></Segment>
                  <Segment vertical><Message.Item>1999 and 2000: Back-to-back winner of AJGA’s Rolex Tournament of Champions</Message.Item></Segment>
                  <Segment vertical><Message.Item>2000: Played college golf at the University of Nevada, Las Vegas before turning pro at the end of his freshman year</Message.Item></Segment>
                  <Segment vertical><Message.Item>2002: Played on the Nationwide Tour, continuing to play for the next six years</Message.Item></Segment>
                  <Segment vertical><Message.Item>2003: Monday-qualified and went on to become the youngest winner in Nationwide Tour history, winning the Mark Christopher Charity Classic at the Empire Lakes Golf Course</Message.Item></Segment>
                  <Segment vertical><Message.Item>2005: Began sharing everything he learned, coaching golf students while still playing professionally</Message.Item></Segment>
                  <Segment vertical><Message.Item>2009: Played on the PGA Tour, after earning his tour card in Q-school</Message.Item></Segment>
                  <Segment vertical><Message.Item>2010: Inducted into the prestigious Long Beach Golf Hall of Fame</Message.Item></Segment>
                </Message.List>
              </Segment>
            </Segment>

            <Segment raised>
              <h1 style={style.h1}>TESTIMONIALS</h1>
              <Segment>
                <p>“Some teaching pros tend to go into robot mode, offering the same song-n-dance to everyone. James knows how to customize instruction. If you make the choice to dedicate your life to your dreams, James is the catalyst who helps you get there.”</p>
                <p>-Mark Baldwin</p>
              </Segment>
              <Segment>
                <p>“James can do anything he requires his student to do; he can show them directly! It’s not just a theory. He can show a student what’s right and what’s wrong right in front of them with the golf ball.”</p>
                <p>-Jay Hwang</p>
              </Segment>
              <Segment>
                <p>“Many coaches nowadays only focus on the golf swing—social media has romanticized it. James focuses on making sure the ball is doing what you envision, not only on full shots, but on and around the green as well. He puts together a very specific practice routine that leaves me with a sense of optimism and fulfillment each time I do it.”</p>
                <p>-Andrew Morgan</p>
              </Segment>
              <Segment>
                <p>“My confidence has grown and I learn more and more about my swing every year. James and I have developed practice plans for when I am home and when I am on the road playing tournaments. He taught me how to believe in this plan.”</p>
                <p>-Brianna Do</p>
              </Segment>
              <Segment>
                <p>“James reveals what truly improves your game. What separates him from the run-of-the-mill golf instructor is his insight from years of professional golf. I’ve had many different coaches before meeting James. He teaches the little nuances about the game that you can’t find from books, articles, or videos. I recommend him if you’re seriously looking to play at a higher level.”</p>
                <p>—Borin Ean</p>
              </Segment>
            </Segment>

          </Grid.Column>
        </Grid>
      </Transition>
    </div>
  );
}

export default AboutMe;
