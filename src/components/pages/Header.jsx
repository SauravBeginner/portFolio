import React, { useState, useEffect } from "react";
import Typist from "react-typist";
const Header = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <>
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: "url(assets/img/hero-bg.jpg)" }}
      >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <p className="display-6 color-d">
                Hello, Welcome to My Portfolio!
              </p>
              <h1 className="hero-title mb-4">I am SauRav</h1>
              <p className="hero-subtitle">
                <div>
                  {count ? (
                    <Typist
                      avgTypingDelay={100}
                      onTypingDone={() => setCount(0)}
                    >
                      <span>Web Developer</span>
                      <Typist.Backspace count={20} delay={800} />
                      <span>MERN Stack Developer</span>
                      <Typist.Backspace count={20} delay={800} />
                      <span delay> Freelancer</span>
                      <Typist.Backspace count={20} delay={800} />
                      <span>Photographer</span>
                      <Typist.Backspace count={20} delay={800} />
                    </Typist>
                  ) : (
                    ""
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
