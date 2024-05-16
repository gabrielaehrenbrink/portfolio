import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Investment Calculator",
    description:
      "Investment calculator, a mobile-friendly web app empowers parents to visualize benefits of investing for their children's education or future goals",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Chitter Challenge",
    description:
      "Twitter-like application that a empowers users to seamlessly sign up, log in, and post messages on a public board.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "RecipEasy",
    description:
      "Make meal prep more efficient by collecting recipes from different websites and saving them to your account.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Acebook",
    description:
      "A social media platform that allows users to create accounts, share posts with multimedia content, edit profiles, and explore content from other members, fostering an interactive online community.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#577B8D"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
