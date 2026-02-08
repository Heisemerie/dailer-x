import { HStack } from "@chakra-ui/react";

const LayoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <HStack
      h={"714px"}
      w={"full"}
      alignItems={"center"}
      gap={"24px"}
    >
      {children}
    </HStack>
  );
};

export default LayoutContainer;
