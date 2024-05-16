import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Gabriela!";
const bio1 = "A junior fullstack developer";
const bio2 = "with a passion for learning";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#344C64"
  >
    <VStack spacing={4}>
    <Avatar src="https://media.licdn.com/dms/image/C5603AQGuDN1R5jW2yA/profile-displayphoto-shrink_800_800/0/1548325423222?e=1721260800&v=beta&t=qqSoyQjfMhwta3SgPeuncz2zoB9caPlAyV6DliMF-3c" size="2xl" />
      <Heading as="h2" size="md" color="white">{greeting}</Heading>
      <Heading as="h1" size="2xl" color="gray.300">{bio1}</Heading>
      <Heading as="h1" size="2xl" color="gray.300">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
