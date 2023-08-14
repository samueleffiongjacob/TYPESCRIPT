import {
  Flex,
  Text,
  Icon,
  AspectRatio,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  IconButton,
} from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
import NavBar from "../Components/NavBar";
import TopNav from "../Components/TopNav";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import arrowMessage from "../public/asset/arrowMessage.png";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { TbMessageDots } from "react-icons/tb";
import { ImMail4 } from "react-icons/im";
import Footer from "../Components/Footer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const toggleMessage = () => {
    setMessage(!message);
  };

  const [toggle, setToggle] = useState(false);
  const show = () => {
    setToggle(!toggle);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault()
   

    emailjs
      .sendForm(
        "service_xau06la",
        "template_krck08s",
        form.current,
        "8jvqCnry8n9YWsdcf"
      
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      e.target.reset()
  }
  // BACKEND SERVICES STARTS HERE DONE BY THE BACKEND ENGINEER

  // POSTING FORM CLIENT TO SERVER  to be store in  MONGODB BACK END

  // CREATING AXIOS INSTANCE  for the api url https://ogidispearl-project-limited-api-v1.onrender.com/v1 http://localhost:3080/v1
  const API_URL = axios.create({
    baseURL: "https://ogidispearl-project-limited-api-v1.onrender.com/v1",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // SETTING HEADERS FOR axios to avoid network error
  //API_URL.req.headers["Content-Type"] // set request headers

  //for contact
  // const [email, setEmail] = useState("");
  // const [names, setName] = useState("");
  // const [info, setmessage] = useState("");

  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [contactUsData, setContactUsData] = useState(initialState);
  // const [upadateData, setUpdatedata] = useState(initialState);
  // response for browser
  const [messageRes, setMessageRes] = useState("");
  const [errorRes, setErrorRes] = useState("");
  const [subcriberRes, setSubcriberRes] = useState("");
  const [errorResSub, setErrorResSub] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactUsData((prev) => ({ ...prev, [name]: value }));
    // setUpdatedata ((prev) => ({ ...prev, [name]: value }));
  };

  const httpsSubmitForm = async (e) => {
    e.preventDefault();

    API_URL.post("/message", contactUsData)
      .then((response) => {
        // console.log(response);
        setMessageRes(response.data.success); //response.data.success
        setTimeout(() => {
          setMessageRes("");
        }, 5000);
      }) //.then((resData) => console.log(resData)) == first way
      .catch((error) => {
        // console.log(err)
        setErrorRes(error.response.data.error); //response.data.error
        setTimeout(() => {
          setErrorRes("");
        }, 5000); //console.log(err);
      });

    setContactUsData(initialState);

    // patching data if it exist
    API_URL.patch("/message", contactUsData)
      .then((response) => {
        // console.log(response);
        setMessageRes(response.data.success); //response.data.success
        setTimeout(() => {
          setMessageRes("");
        }, 5000);
      }) //.then((resData) => console.log(resData)) == first way
      .catch((error) => {
        // console.log(err)
        setErrorRes(error.response.data.error); //response.data.error
        setTimeout(() => {
          setErrorRes("");
        }, 5000); //console.log(err);
      });

    setContactUsData(initialState);
  };

  // for subcriber
  const [SUBCRIBERS, setsubcriber] = useState("");
  const httpsSubcribeEmail = async (e) => {
    e.preventDefault();

    // sendEmail(event); //this send mail way was giving 446 error
    API_URL.post("/subcriber", {
      email: SUBCRIBERS,
    })
      .then((response) => {
        //console.log(response)
        setSubcriberRes(response.data.success); //response.data.success
        setTimeout(() => {
          setSubcriberRes("");
        }, 5000);
      }) // then((resData) => console.log(resData)) = first way
      .catch((error) => {
        // console.log(error);
        setErrorResSub(error.response.data.error);
        setTimeout(() => {
          setErrorResSub("");
        }, 5000);
      }); // .catch((err) => console.log(err))

    setsubcriber("");
  };

  // BACKEND SERVICES ENDS HERE
  return (
    <>
      <Head>
        <title>ogidispearl-project-Limited</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/asset/ogidilogo.svg" />
      </Head>
      <TopNav />
      <NavBar />

      <Flex fontFamily="Satoshi" flexDir={"column"} zIndex='10'  bgColor={message ? "#020a12bc" : "white"}>
        {/* Landing Contact-us section with background img */}

        <Flex
          w={"100%"}
          h={["200px", "250px", "300px", "400px", "450"]}
          bgRepeat="no-repeat"
          bgPos={"center"}
          bgSize={"cover"}
          bgColor={message ? "#020a12bc" : "#111376"}
      
          // toggle ?"#1c24a0a4" :
          color={"white"}
          bgImage="url('/asset/ogidiback.png')"
          px={["15px", "2rem", "2rem", "2rem", "5rem"]}
          flexDir="column"
        >
          {/* Moblie Menu */}
          <Flex
            alignItems="center"
            w={"100%"}
            display={["flex", "flex", "flex", "none", "none"]}
          >
            <Flex w={"100%"} justifyContent="space-between" mt={"5"}>
              <Text></Text>
              <Text
                justifySelf="center"
                fontSize={["14px", "22px", "35px", 0, 0]}
                fontFamily="Satoshi"
              >
                OgidisPearl Project Limited
              </Text>
              <IconButton
                color={"white"}
                fontSize={["3xl", "3xl", "3.5rem", "none", "none"]}
                variant={"none"}
                position="relative"
                top={"-3px"}
                bottom={0}
                right={"-10px"}
                zIndex="10"
                icon={toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
                onClick={show}
              />
            </Flex>

            {/* Mobile Toggle Menu */}

            {toggle ? (
              <Flex
                w={"60%"}
                h={"100vh"}
                position="absolute"
                right={[0, 0, 0, 0, 0]}
                top={["2.9rem", "1.9rem", "3.5rem", "0rem", "0rem"]}
                py={2}
                flexDir="row"
                color={"#ffff"}
                
                bgColor={message ? "#020a12bc" : "#1d1f77"}
                // fontSize={"18px"}
                zIndex="10"
                fontWeight={"semibold"}
              >
                <IconButton
                  color={"white"}
                  fontSize={["3xl"]}
                  variant={"none"}
                  position="relative"
                  top={"-1rem"}
                  bottom={0}
                  right={10}
                  zIndex="10"
                  icon={
                    toggle ? (
                      <AiOutlineClose className={styles.icon} />
                    ) : (
                      <AiOutlineMenu />
                    )
                  }
                  onClick={show}
                />
                <Flex
                  gap={10}
                  mt="4"
                  pr={["0", "4rem", "0", "0", "0"]}
                  flexDir="column"
                  textAlign={"center"}
                  alignContent="center"
                  fontSize={["20px", "22px", "32px", 0, 0]}
                  w={["100", "60%", "60%", "0", "0"]}
                >
                  <Link href="/">Home</Link>
                  <Link href="/services">Services</Link>
                  <Link href="/about">About Us</Link>
                  <Link href="/contact">Contact Us</Link>
                </Flex>
              </Flex>
            ) : (
              ""
            )}
          </Flex>

          <Flex
            flexDir="column"
            fontFamily="Satoshi"
            pt={["2rem", "2rem", "4rem", "4.5rem", "5rem"]}
          >
            <Text
              fontSize={["24px", "32px", "40px", "70px", "90px"]}
              w={["143px", "200px", "350px", "500px", "700px"]}
              fontWeight={"semibold"}
              pt={"rem"}
              pb={"1rem"}
              fontFamily="Satoshi"
            >
              Contact Us
            </Text>
            <Text
              w={["300px", "400px", "700px"]}
              h={["50px", "40px", "80px", "100px", "120px"]}
              fontSize={["16px", "18px", "25px", "28px", "32px"]}
            >
              Schedule a visit or give us a call
            </Text>
          </Flex>
        </Flex>

        {/* contact phone number and email */}
        <Flex
          fontFamily="Satoshi"
          color={"#3B3C7D"}
          flexDir="row"
          alignItems={"center"}
          justifyContent="space-between"
          w={"100%"}
          my={"5rem"}
          h={["45px", "30px", "56px"]}
          mx={"auto"}
          mt={["10rem", "7rem", "7rem"]}
          px={["15px", "2rem", "5rem"]}
          fontSize="17px"
          gap={10}
        >
          <Flex
            alignItems={"start"}
            gap={3}
            w="33%"
            fontSize={"17px"}
            flexDir={["column", "column", "column", "row", "row"]}
          >
            <Icon
              as={TbMessageDots}
              fontSize={"3rem"}
              borderRadius="5px"
              bgColor="#EEEEFB"
              w="4rem"
              h="2.5rem"
              p="7px"
            />
            <Flex fontSize="17px" flexDir={"column"}>
              <Text fontWeight={"semibold"}>Our Mail</Text>
              <Text>
                <a href="mailto: abc@example.com" target={"blank"}>
                  ogidispearlltd@info.com
                </a>
              </Text>
              <Text fontSize="17px">
                <a href="mailto: abc@example.com" target={"blank"}>
                  ogidispearlltd@info.com
                </a>
              </Text>
            </Flex>
          </Flex>

          <Flex
            alignItems={"start"}
            gap={3}
            w="33%"
            fontSize={"17px"}
            flexDir={["column", "column", "column", "row", "row"]}
          >
            <a href="tel:+2348034011039">
              <Icon
                fontSize={"3rem"}
                borderRadius="5px"
                bgColor="#EEEEFB"
                w="4rem"
                h="2.5rem"
                p="8px"
                as={FiPhoneCall}
              />
            </a>
            <Flex flexDir={"column"}>
              <Text fontWeight={"semibold"}>Our Phone Numbers</Text>

              <Text>
                <a href="tel:+2348034011039">+2348034011039</a>
              </Text>
              <Text>
                <a href="tel:+2348034011039">+2348034011039</a>
              </Text>
            </Flex>
          </Flex>

          <Flex
            alignItems={"start"}
            gap={3}
            w="33%"
            fontSize={"17px"}
            flexDir={["column", "column", "column", "row", "row"]}
            display={["none", " none", "flex", "flex", "flex"]}
          >
            <Icon
              fontSize={"3rem"}
              borderRadius="5px"
              bgColor="#EEEEFB"
              w="4rem"
              h="2.5rem"
              p="8px"
              as={FiMapPin}
            />
            <Flex flexDir={"column"}>
              <Text fontWeight={"semibold"}>Our Address</Text>

              <Text>
                Plot 202 PTI Road, Sunny Eru 2 Motors Complex Effurun, Delta
                State.
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* contact phone number in mobile form */}
        <Flex
          gap={3}
          alignItems="center"
          mt={["2rem", "2.5rem", "12rem"]}
          justifyContent={"center"}
          fontSize={"17px"}
          display={["flex", " flex", "none", "none", "none"]}
          flexDir={["column", "column", "column", "row", "row"]}
          px={["15px", "2rem", "5rem"]}
        >
          <Icon
            fontSize={"3rem"}
            borderRadius="5px"
            bgColor="#EEEEFB"
            w="4rem"
            h="2.5rem"
            p="8px"
            as={FiMapPin}
          />
          <Flex flexDir={"column"}>
            <Text fontWeight={"semibold"} textAlign="center">
              Our Address
            </Text>

            <Text textAlign={"center"}>
              Plot 202 PTI Road, Sunny Eru 2 Motors Complex Effurun, Delta
              State.
            </Text>
          </Flex>
        </Flex>

        {/* contact map */}

        <Flex
          id="map"
          w={"100%"}
          h={["200px", "250px", "300px", "400px", "500px"]}
          px={["15px", "2rem", "2rem", "2rem", "5rem"]}
          alignItems="center"
          mt={["5.3rem", "3.7rem", "10rem", "6rem", "10rem"]}
          justifyContent={"center"}
        >
          <AspectRatio
            w={["400px", "450px", "700px", "800px", "1000px"]}
            h={["250px", "300px", "400px", "400px", "600px"]}
            ratio={1}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.037045426899!2d5.791565814757066!3d5.561527835140356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041adc7653be5c1%3A0xbe96f2c5938c7598!2sSunny%20Eru%20Motors!5e0!3m2!1sen!2sng!4v1666387755229!5m2!1sen!2sng" />
          </AspectRatio>
        </Flex>

        {/* popUp message card */}
        <Flex
          mx={["15px", "2rem", "2rem", "2rem", "5rem"]}
          h={["100px", "100px", "133px"]}
          borderRadius="10px"
          w={"auto"}
          bgColor={message ? "#020a12bc" : "#EEEEFB"}
          color={"#05104A"}
          alignItems="center"
          mt={["5.3rem", "3.7rem", "8rem", "6rem", "10rem"]}
        >
          <Flex
            p="1rem"
            h={["40px", "40px", "57px", "57px", "57px"]}
            w="100%"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Flex
              flexDir={["column", "column", "row", "row", "row"]}
              w="65%"
              cursor={"pointer"}
            >
              <Flex
                h={["30px", "50px", "50px"]}
                w={["120px", "150px", "220px"]}
              >
                <Image src={arrowMessage} onClick={toggleMessage} alt='messageImg' />
              </Flex>

              <Text
                pt="10px"
                pl="2rem"
                fontSize={"18px"}
                display={["none", " none", "  flex", "flex", " flex"]}
              >
                We will try to answer your letter in a short time
              </Text>
            </Flex>

            <Flex
              flexDir={["column", "column", "column", "column", "row"]}
              gap={3}
              py={[9, 9, 0]}
              w="35%"
              alignItems={"center"}
            >
              <Text
                fontSize={"18px"}
                alignItems={["center", "center", "start"]}
                pl={["0rem", "0rem", "3rem"]}
              >
                Find us on:
              </Text>
              <Flex
                w={"10%"}
                gap={2}
                alignItems={["center", "center", "start"]}
                pr={["10rem", "10rem", "3rem", "3rem", "0"]}
              >
                <a href={"www.facebook.com"}>
                  <Icon
                    as={MdFacebook}
                    fontSize={["25px", "30px", "32px"]}
                    color={"#05104A"}
                  />
                </a>
                <a href={"www.facebook.com"}>
                  <Icon
                    as={AiFillTwitterCircle}
                    fontSize={["25px", "30px", "32px"]}
                    color={"#05104A"}
                  />
                </a>
                <a href={"www.facebook.com"}>
                  <Icon
                    as={AiFillLinkedin}
                    fontSize={["25px", "30px", "32px"]}
                    color={"#05104A"}
                  />
                </a>
                <a href={"www.facebook.com"}>
                  <Icon
                    as={ImMail4}
                    fontSize={["25px", "30px", "32px"]}
                    color={"#05104A"}
                  />
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {message ? (
          <Flex
            h={"100vh"}
            mx={"auto"}
            justifyContent={"center"}
            alignItems="center"
            pos={"relative"}
            top="-36rem"
            left="0rem"
          >
            <FormControl
              h={["610px", "550px", "650px", "550px", "650px"]}
              w={["370px", "500px", "600px", "550px", "600px"]}
              justifyItems="center"
              alignItems="center"
              bgColor={"#DFDFDF"}
              pt={["5rem", "3.8rem", "6.5rem", "2.5rem", "5rem"]}
            >
              <Flex
                pos={"absolute"}
                top={["2rem", "3rem", "4rem", "5", "7"]}
                // bottom="0rem"
                right={["2rem", "3rem", "6rem", "5rem", "5rem"]}
                zIndex="10"
                cursor={"pointer"}
                onClick={toggleMessage}
              >
                <AiOutlineCloseCircle />
              </Flex>

              <form ref={form} onSubmit={sendEmail}>
                
                <Flex
                  flexDir={"column"}
                  py="0.5rem"
                  textAlign="start"
                  ml={["1.4rem", "3rem", "4.5rem", "6rem", "5rem"]}
                >
                  <FormLabel fontSize={"16px"}>Your name</FormLabel>
                  <Input
                    type="text"
                    name="fullname"
                    placeholder="Buzo"
                    w={["330px", "400px", "450px"]}
                    h="50px"
                    justifyItems={"center"}
                    bgColor="white"
                  />
                </Flex>
                <Flex
                  flexDir={"column"}
                  py="0.5rem"
                  ml={["1.4rem", "3rem", "4.5rem", "6rem", "5rem"]}
                >
                  <FormLabel fontSize={"16px"}>Your email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="buzo@gmail.com"
                    w={["330px", "400px", "450px"]}
                    h="50px"
                    bgColor="white"
                  />
                </Flex>
                <Flex
                  flexDir={"column"}
                  py="0.5rem"
                  pb={"2rem"}
                  ml={["1.4rem", "3rem", "4.5rem", "6rem", "5rem"]}
                >
                  <FormLabel fontSize={"16px"}>Your message</FormLabel>
                  <Textarea
                    w={["330px", "400px", "450px"]}
                    h="150px"
                    bgColor="white"
                    name="text"
                  />
                </Flex>
                <Flex ml={["1.4rem", "4rem", "6rem", "6rem", "5rem"]}>
                  <Button
                    w={["330px", "150px", "180px", "220px", "258.31px"]}
                    h={["58px", "45px", "50px", "50px", "61px"]}
                    color="white"
                    _hover={"none"}
                    bgColor={"#3B3C7D"}
                    type="submit"
                  >
                    Send message
                  </Button>
                </Flex>
              </form>
            </FormControl>
          </Flex>
        ) : (
          ""
        )}

        {/* subscribe  */}
        <Flex
          px={["15px", "2rem", "2rem", "2rem", "5rem"]}
          h={["350px", "380px", "350px", "424px", "424px"]}
          w={["100%", "100%", "100%", "100%", "100%"]}
          bgColor={message ? "#020a12bc" : "#EEEEFB"}
          
          color={"#3B3C7D"}
          pb="6"
          mb={["-1rem", "-2rem", "-4rem", "-4rem", "-4rem"]}
          alignItems="center"
          textAlign={["center", "center", "start", "start", "start"]}
          mt={["5.3rem", "3.7rem", "8rem", "6rem", "10rem"]}
        >
          <Flex
            alignItems="center"
            justifyContent={"space-between"}
            w="100%"
            gap={[4, 10, 0, 0, 0]}
            flexDir={["column", "column", "row", "row", "row"]}
          >
            <Flex flexDir="column" gap={[5, 6, 10, 10, 10]}>
              <Text
                fontSize={["28px", "30px", "38px", "40px", "48px"]}
                fontWeight="semibold"
              >
                Subscribe
              </Text>

              <Text
                w={["360px", "473px", "360px", "380px", "473px"]}
                fontSize={["16px", "20px", "20px"]}
                textAlign={["center", "center", "start"]}
                pr={[-0, 1, 0]}
              >
                Want to be notified about our News? Just sign up and we will send
                you a notification by email.
              </Text>
            </Flex>
            <Flex>
              <Flex
                h={"110px"}
                alignItems="start"
                flexDir={["column", "column", "column", "row", "row"]}
                gap={[2, 1, 2, 0, 0]}
                mt={[10, 4, 0]}
              >
                <Input
                  placeholder="Your email"
                  size="md"
                  bgColor="white"
                  px="2rem"
                  focusBorderColor="none"
                  w={["350px", "480px", "350px", "400px", "480px"]}
                  borderRightRadius={["5px", "5px", "5px", "none", "none"]}
                  h={["59px", "59px", "59px", "59px", "69px"]}
                />
                <Button
                  w={["full", "150px", "140px", "130px", "150px"]}
                  h={["58px", "58px", "58px", "58px", "68px"]}
                  borderLeftRadius={["5px", "5px", "5px", "none", "none"]}
                  color="white"
                  // ml={"-3px"}
                 
                  bgColor={message ? "#020a12bc" : "#3B3C7D"}
                >
                  Subscribe
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        {/* footer */}
        <Footer />
      </Flex>
    </>
  );
};
// Fast Refresh had to perform a full reload
export default Contact;
