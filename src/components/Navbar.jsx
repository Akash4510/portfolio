import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";

import useIsMobile from "../hooks/useMobile";

const Navbar = () => {
  const navLinks = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  const isMobile = useIsMobile();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="container navbar__container">
        <div className="navbar__logo">
          <a href="#hero">A</a>
        </div>

        {isMobile ? (
          <div className="navbar__actions navbar__actions--mobile-only">
            <motion.button
              className="navbar__toggle-btn"
              onClick={() => setToggle(!toggle)}
            >
              {!toggle && (
                <div className="navbar__toggle-btn hamburger">
                  <FaBars />
                </div>
              )}
              {toggle && (
                <div className="navbar__toggle-btn cross">
                  <HiX />
                </div>
              )}
            </motion.button>

            {toggle && (
              <motion.div
                className="navbar__links-container"
                animate={{ translateY: ["-100%", "0%"] }}
                transition={{ duration: 0.1 }}
              >
                <ul className="navbar__links">
                  {navLinks.map((link) => (
                    <li className="navbar__link" key={link.name}>
                      <a href={link.link} onClick={() => setToggle(!toggle)}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        ) : (
          <>
            <motion.div
              className="navbar__actions navbar__actions--desktop-only"
              animate={{ translateX: ["100%", "0%"] }}
              transition={{ duration: 0.35 }}
            >
              <ul className="navbar__links">
                {navLinks.map((link) => (
                  <li className="navbar__link" key={link.name}>
                    <a href={link.link}> {link.name} </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
