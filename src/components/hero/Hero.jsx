import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Deer IT</h2>
          <h1>Web Development and UI Design</h1>
          <div className="buttons">
            <button>See The Latest Works</button>
            <button>Contact us</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>

      <div className="slidingTextContainer">
        Web and Mobile Application Development <br />
        Networking and Telecominication <br />
        Software and Hardware Services
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
