import { HStack } from "@chakra-ui/react";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <HStack
      h={{base:"100vh", md:"full"}}
      w={"full"}
      paddingY={"37px"}
      paddingX={{ base: "16px", md: "47px" }}
      gap={"16px"}
    >
      {children}
    </HStack>
  );
};

export default Container;
