import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      p={4}
      boxShadow="md"
      borderRadius="lg"
      overflow="hidden"
      align="start"
      bg="white"
      spacing={4}
    >
      <Image
        borderRadius="md"
        boxSize="100%"
        src={imageSrc}
        alt={`Image for ${title}`}
      />
      <VStack align="start" spacing={2}>
        <Heading size="lg" color="black">{title}</Heading>
        <Text fontSize="md" color="gray.600">{description}</Text>
      </VStack>
      <HStack spacing={2}>
        <Text fontSize="md" color="gray.600">Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} color="#494944" />
      </HStack>
    </VStack>
  );
};

export default Card;
