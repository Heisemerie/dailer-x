import { VStack } from "@chakra-ui/react";

const SignIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <VStack w={"490px"} h={"548.8px"} gap={"15px"} margin={"auto"} bg={"red"}>
      {children}
    </VStack>
  );
};

export default SignIn;
