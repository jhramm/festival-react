// Chakra added to page for styling purposes.

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function OurFestival() {
  return (
    <Box
      textAlign={"center"}
      bg="#2dbfb2"
      color={"white"}
      p={"40px 20px"}
      m={"20px 0"}
    >
      <Heading fontSize={"50px"} m={"40px 0"}>
        Our 2024 Festival
      </Heading>
      <Text fontSize={"20px"} mb={"20px"} fontWeight={"bold"}>
        Our next Festival will be held in February 2024
      </Text>
      <Text fontSize={"20px"} mb={"20px"} fontWeight={"bold"}>
        Registration is now closed
      </Text>
      <Button
        p={"30px 20px"}
        bg={"#e31b79"}
        color={"white"}
        letterSpacing={"2px"}
        border={"none"}
        _hover={{
          bg: "transparent",
          border: "2px solid #e31b79",
          color: "#e31b79",
        }}
        fontWeight={"bold"}
        fontSize={'14px'}
      >
        Latest Updates
      </Button>
    </Box>
  );
}
