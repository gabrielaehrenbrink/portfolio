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
    url: "https://junior-isa-guide.netlify.app/",
  },
  {
    title: "Chitter Challenge",
    description:
      "Twitter-like application that a empowers users to seamlessly sign up, log in, and post messages on a public board.",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://github.com/gabrielaehrenbrink/chitter",
  },
  {
    title: "RecipEasy",
    description:
      "Make meal prep more efficient by collecting recipes from different websites and saving them to your account.",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://github.com/kawrou/RecipEasy-recipe-manager",
  },
  {
    title: "Acebook",
    description:
      "A social media platform that allows users to create accounts, share posts with multimedia content, edit profiles, and explore content from other members, fostering an interactive online community.",
    getImageSrc: () => require("../images/photo4.jpg"),
    url: "https://github.com/gabrielaehrenbrink/acebook",
  },
  {
    title: "MakersBnb",
    description:
      "Web application where users can effortlessly list their available spaces and book accommodations for the night, akin to popular platforms like Airbnb",
    getImageSrc: () => require("../images/photo5.jpg"),
    url: "https://github.com/gabrielaehrenbrink/MakersBnB",
  },
  {
    title: "News App",
    description:
      "News Feed Aplication Features: Using an API a news feed was created where user can see different news articles.",
    getImageSrc: () => require("../images/photo6.jpg"),
    url: "https://github.com/gabrielaehrenbrink/NewsProject-Swift",
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
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
