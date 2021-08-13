import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };

  return (
    <main>
      <motion.div
        className="skills"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Mouse />
        <Navigation />
        <div className="skills-main">
          <div className="skills_main-left">
            <h1> Stack</h1>
            <div className="skills_main-left-tech">
              <i className="fab fa-html5"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-js"></i>
              <i className="fab fa-bootstrap"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-sass"></i>
              <i className="fab fa-php"></i>
              <i className="fab fa-symfony"></i>
              <i className="fab fa-node"></i>
            </div>
          </div>
          <div className="skills_main-right">
            <h1>Soft skills</h1>
            <p>
              I am independent and self-taught, I like to make decisions, to
              learn and to move forward. But I especially like crossing the
              finish line as a team.
            </p>
            <p>
              From my experiences I have good interpersonal skills and
              management skills.
            </p>
            <p>
              I am moving more and more towards fullstack javascript, trying to
              keep the code clean and use the best possible conventions (BEM,
              commit convention ...)
            </p>
            <p>Help me to progress and become better through great projects!</p>
          </div>
        </div>
        <ButtonsBottom left={"/"} right={"/project-1"} />
      </motion.div>
    </main>
  );
};

export default Skills;
