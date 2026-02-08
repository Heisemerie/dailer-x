import { HStack } from "@chakra-ui/react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <HStack
      h={"553px"}
      w={"1130px"}
      align={"top"}
      gap={"24px"}
      marginY={"72px"}
      marginX={"auto"}
    >
      {children}
    </HStack>
  );
};

export default Container;
