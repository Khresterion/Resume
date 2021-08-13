import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";
import Pdf from "../data/CV_JEREMY.pdf";
import Copyright from "../components/Copyright";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };
  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Mouse />
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Resume PDF</h4>
              <a href={Pdf} target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Phone</h4>
              <CopyToClipboard text="0647556242" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Now paste it where you want :)")}
                >
                  Click to copy !
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="toto@toto.fr" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Now paste it where you want :)")}
                >
                  Click to copy !
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <Copyright />
        </div>
        <ButtonsBottom left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
