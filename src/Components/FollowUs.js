// Chakra added to page for styling purposes.
import React from "react";
import Facebook from "../img/Facebook.webp";
import Instagram from "../img/insta-black.webp";
import Twitter from "../img/twitter-black.webp";
import Linkedin from "../img/linkedin-black.webp";
import { Box, Heading, Img, ListItem, UnorderedList } from "@chakra-ui/react";

export default function FollowUs() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      m={"70px 10px"}
    >
      <Heading fontSize={"50px"} color={"#2dbfb2"} mb={"20px"} pl={"15px"}>
        Follow Us
      </Heading>

      <UnorderedList display={"flex"} listStyleType={"none"}>
        <ListItem>
          <Img src={Facebook} alt="Facebook icon" w={"40px"} mr={"12px"} />
        </ListItem>
        <ListItem>
          <Img src={Instagram} alt="Instagram icon" w={"40px"} mr={"12px"} />
        </ListItem>
        <ListItem>
          <Img src={Twitter} alt="Twitter icon" w={"40px"} mr={"12px"} />
        </ListItem>
        <ListItem>
          <Img src={Linkedin} alt="LinkedIn icon" w={"40px"} mr={"12px"} />
        </ListItem>
      </UnorderedList>
    </Box>
  );
}
