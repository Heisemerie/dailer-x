import { HStack } from "@chakra-ui/react";
import { ColorModeProvider } from "../../../components/ui/color-mode";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <ColorModeProvider forcedTheme="dark">
      <HStack h={"714px"} w={"full"} alignItems={"center"} gap={"24px"}>
        {children}
      </HStack>
    </ColorModeProvider>
  );
};

export default Container;
