// Chakra added to page for some styling purposes.
import React from "react";
import { Link } from "react-router-dom";
import BiffImage from "../img/BIFF logo_prev_ui.webp";
import FaceBook from "../img/Facebook (1).webp";
import Instagram from "../img/insta-white.webp";
import Twitter from "../img/twitter-white.webp";
import Linkedin from "../img/linkedin-white.webp";
import {
  Box,
  Button,
  Image,
  Input,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box className="footer">
      <h3>Subscribe For Updates</h3>
      <Input
        type="text"
        placeholder="Email Address"
        p={"20px 20px"}
        fontSize={"18px"}
        mb={"20px"}
        textAlign={"center"}
      />
      <Button type="button" p={"20px 20px"} fontSize={"20px"}>
        Submit
      </Button>
      <Box className="footer-image">
        <Image src={BiffImage} alt="BIFF Logo" />
      </Box>
      <UnorderedList>
        <ListItem>
          <Link to="#">Rules & Regulations</Link>
        </ListItem>
        <ListItem>
          <Link to="#">Child Protection Policy</Link>
        </ListItem>
        <ListItem>
          <Link to="#">Safety Policy</Link>
        </ListItem>
        <ListItem>
          <Link to="#">Privacy Policy</Link>
        </ListItem>
      </UnorderedList>
      <UnorderedList className="footer-new-icons">
        <ListItem>
          <Link to="#">
            <Image src={FaceBook} alt="Facebook" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#">
            <Image src={Instagram} alt="Instagram" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#">
            <Image src={Twitter} alt="Twitter" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#">
            <Image src={Linkedin} alt="LinkedIn" />
          </Link>
        </ListItem>
      </UnorderedList>
      <p>Registered Charity No. 208659</p>
      <Box className="to-top">
        <a href="#to-top">
          <i className="fa-solid fa-arrows-up-to-line"></i>
        </a>
      </Box>
    </Box>
  );
}
