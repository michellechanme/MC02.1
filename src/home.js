import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import SubTitle from "./components/subtitle";
import Description from "./components/description";
import Project from "./components/project";

import "./styles.css";

function Home() {
  useEffect(() => {
    document.title = "Michelle Chan";
  }, []);

  return (
    <div className="App">
      <div className="CenterContainer">
        <div className="Container">
          <div className="HeroContainer">
            <div className="TitleA">Hi, I'm Michelle.</div>
            <div className="TitleB">
              I'm currently designing and prototyping at Postmates.
            </div>
            <div className="ScrollIndicator">
              <div className="MovingDot" />
            </div>
          </div>

          <SubTitle subtitle="Projects" />
          <div className="ProjectsGroup">
            <Project
              image="https://i.imgur.com/cODU1Gr.png"
              title="Coming Soon"
              description="Postmates, Fleet"
            />
            <Project
              image="https://i.imgur.com/ePzo9O4.png"
              title="Start Ride"
              description="Cruise Automation, In-Car Experience"
            />
            <Project
              image="https://i.imgur.com/4qOhesT.png"
              title="Flagged Trips"
              description="Uber for Business"
            />
            <NavLink to="/uberviz">
              <Project
                image="https://i.imgur.com/2APB20o.png"
                title="Uber Trips Visualized"
                description="Data Fun"
              />
            </NavLink>
          </div>

          <SubTitle subtitle="About" />
          <div className="Description">
            I'm Michelle, a designer based in San Francisco. I'm currently
            designing at{" "}
            <a className="InlineLink" href="https://postmates.com/">
              Postmates
            </a>
            . Prior, I was learning at{" "}
            <a className="InlineLink" href="https://getcruise.com/">
              Cruise Automation
            </a>
            ,{" "}
            <a className="InlineLink" href="https://uber.com/">
              Uber
            </a>
            ,{" "}
            <a className="InlineLink" href="https://tesla.com/">
              Tesla
            </a>
            , and studying{" "}
            <a className="InlineLink" href="https://cogsci.berkeley.edu/">
              cognitive science at UC Berkeley
            </a>
            .
          </div>
          <div className="Description">
            Say hi if you ever want to play basketball or lacrosse, or eat sweet
            potatoes together.
          </div>
          <div className="FooterContainer">
            <a className="Link" href="mailto:michellechan.me@gmail.com">
              Email
            </a>
            <a className="Link" href="https://twitter.com/michellechanme">
              Twitter
            </a>
            <a className="Link" href="https://medium.com/@michellechanme">
              Medium
            </a>
            <a
              className="Link"
              href="https://www.linkedin.com/in/michellechanvc/"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Home />, rootElement);

export default Home;
