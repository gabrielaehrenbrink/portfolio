import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: gabrielaehrenbrink@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/gabrielaehrenbrink",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/gabriela-ehrenbrink-a78226179/",
  },
];

const Header = () => {
  const [headerStyle, setHeaderStyle] = useState({ transform: 'translateY(0)' });
  const prevScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && currentScrollY > 100) {
        setHeaderStyle({ transform: 'translateY(-100%)' });
      } else {
        setHeaderStyle({ transform: 'translateY(0)' });
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#240750"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
          <HStack spacing={8}>
          <a href="#projects" onClick={handleClick('projects')} key="projects">
            Projects
          </a>
          <a href="#contact-me" onClick={handleClick('contactme')} key="contact-me">
            Contact Me
          </a>
        </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
