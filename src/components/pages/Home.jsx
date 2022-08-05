import React from "react";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Services from "./Services";

import Work from "./Work";
import Header from "./Header";
import Resume from "./Resume";

const Body = () => {
  return (
    <>
      <Header />
      <main id="main">
        <About />
        <Resume />
        <Services />
        <Work />
        <Blog />
        <Contact />
      </main>
    </>
  );
};

export default Body;
