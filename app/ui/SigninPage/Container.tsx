import { AspectRatio, HStack } from "@chakra-ui/react";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <HStack h={"full"} w={"full"} paddingY={"37px"} paddingX={"47px"}>
      {children}
    </HStack>
  );
};

export default Container;
