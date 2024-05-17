import React, { useEffect,  useRef } from "react";
import emailjs from '@emailjs/browser';
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const LandingSection = () => {
  const formRef = useRef();
  const { isLoading, response } = useSubmit();
  const { onOpen } = useAlertContext();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, {
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          onOpen('success', 'Your message has been sent successfully!');
          formik.resetForm();
        },
        (error) => {
          console.log('FAILED...', error.text);
          onOpen('error', 'Failed to send message. Please try again later.');
        },
      );
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: ''
    },
    onSubmit: (values, { setSubmitting }) => {
      sendEmail(values);
      setSubmitting(false);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      type: Yup.string().required('Type of enquiry is required'),
      comment: Yup.string().required('Message is required')
    }),
  });

  useEffect(() => {
  }, [response]);


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#344C64"
      py={16}
      spacing={8}
    >
      <VStack  w={{ base: "90%", md: "1024px" }} p={{ base: 4, md: 32 }} alignItems={{ base: "center", md: "flex-start" }}>
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form ref={formRef} onSubmit={sendEmail}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.type && !!formik.errors.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select 
                  id="type" 
                  {...formik.getFieldProps('type')}
                >
                  <option value="" style={{ color: "black" }}>Select an option</option>
                  <option value="hireMe" style={{ color: formik.values.type === "hireMe" ? "white" : "black" }}>Freelance project proposal</option>
                  <option value="openSource" style={{ color: formik.values.type === "openSource" ? "white" : "black" }}>Open source consultancy session</option>
                  <option value="other" style={{ color: formik.values.type === "other" ? "white" : "black" }}>Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  {...formik.getFieldProps('comment')}
                  height={250}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;