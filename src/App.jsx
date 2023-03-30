import "./App.css";
import ReactTypingEffect from "react-typing-effect";

// Assets
import facebookIcon from "./assets/social_icons/facebook.svg";
import instagramIcon from "./assets/social_icons/instagram.svg";
import twitterIcon from "./assets/social_icons/twitter.svg";
import mediumIcon from "./assets/social_icons/medium.svg";
import linkedinIcon from "./assets/social_icons/linkedin.svg";
import githubIcon from "./assets/social_icons/github.svg";
import cyberBotsWorking from "./assets/cyber-bots-working.gif";

function App() {
  return (
    <div className="App">
      <div className="Hero">
        <div className="displaySpace">
          <div className="welcomeTyper">
            <ReactTypingEffect
              cursor="▊"
              typingDelay={1200}
              eraseDelay={1000}
              speed={50}
              eraseSpeed={50}
              text={["Hello World!", "Welcome to My Profile!"]}
            />
          </div>

          <div className="imageHolderParent">
            <a
              href="https://www.linkedin.com/in/nishantsh20/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="imageHolder"></div>
            </a>
          </div>

          <div className="socialView">
            <a
              href="https://www.linkedin.com/in/nishantsh20/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcon">
                <img src={linkedinIcon} alt="L" className="socialIconImage" />
              </div>
            </a>

            <a
              href="https://github.com/nishant-ai"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcon">
                <img src={githubIcon} alt="G" className="socialIconImage" />
              </div>
            </a>

            <a
              href="https://medium.com/@neeshant"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcon">
                <img src={mediumIcon} alt="M" className="socialIconImage" />
              </div>
            </a>

            <a
              href="https://twitter.com/Nishant59625688"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcon">
                <img src={twitterIcon} alt="T" className="socialIconImage" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/_nishan.t/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcon">
                <img src={instagramIcon} alt="I" className="socialIconImage" />
              </div>
            </a>

            <a
              href="https://www.facebook.com/Nishant9941"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcon">
                <img src={facebookIcon} alt="F" className="socialIconImage" />
              </div>
            </a>
          </div>
        </div>

        <div className="contentSpace">
          <p className="terminalAccess">
            <b>
              root@
              <span
                style={{
                  color: "#ffffffcc",
                }}
              >
                nishant
              </span>{" "}
              %{" "}
            </b>
            <span style={{ color: "yellow" }}>sudo</span> whoami
          </p>
          <h1 className="title">Know Nishant</h1>
          <div className="shortDescription">
            <b>Hello, World.</b> My name is <b>Nishant Sharma</b>. I am the
            founder of the startup <b>InGelt</b>, where I currently serve as the
            <b> Chief Technology Officer</b>. I am extremely passionate about
            technology, and I am committed to using it to make a positive impact
            on people's lives. Alongside my role at InGelt, I am also an active
            member of various campus technical societies, where I engage in
            technical discussions and share my insights with other members. I
            believe that collaboration and the exchange of ideas are crucial for
            growth and progress, and I am always eager to learn from others.
          </div>
        </div>
      </div>

      <div className="gifSpace">
        <h1>Experience a Cool GIF?</h1>
        <img src={cyberBotsWorking} alt="" className="coolGIF" />
        <p className="descriptionImg">
          Isomorphs are Currently Working on the site. Come back later to
          explore more!
        </p>
      </div>
    </div>
  );
}

export default App;
