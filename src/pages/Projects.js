import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import { motion } from "framer-motion";

export const Project1 = () => {
  return (
    <main>
      <motion.div className="project">
        <Mouse />
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <ButtonsBottom left={"/skills"} right={"/project-2"} />
      </motion.div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <ButtonsBottom left={"/project-1"} right={"/project-3"} />
      </div>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <ButtonsBottom left={"/project-2"} right={"/project-4"} />
      </div>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <ButtonsBottom left={"/project-3"} right={"/contact"} />
      </div>
    </main>
  );
};
