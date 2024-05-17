import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Menu, MenuButton, MenuList, MenuItem, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

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
  const menuItemColor = useBreakpointValue({ base: '#240750', md: 'initial' });

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
      style={headerStyle}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" width="full" px={{ base: 4, md: 16 }}>
      <HStack
          py={4}
          justifyContent="space-between"
          alignItems="center"
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 0 }}
        >
         <nav>
            <HStack spacing={4} justifyContent="center">
              {socials.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              <a href="#projects" onClick={handleClick('projects')} key="projects" style={{ color: 'white' }}>
                Projects
              </a>
              <a href="#contact-me" onClick={handleClick('contactme')} key="contact-me" style={{ color: 'white' }}>
                Contact Me
              </a>
            </HStack>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                display={{ base: 'flex', md: 'none' }}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem onClick={handleClick('projects')} style={{ color: menuItemColor }}>Projects</MenuItem>
                <MenuItem onClick={handleClick('contactme')} style={{ color: menuItemColor }}>Contact Me</MenuItem>
              </MenuList>
            </Menu>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;