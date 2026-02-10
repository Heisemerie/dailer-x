import { Box, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import Container from "../ui/signin/Container";
import SignInForm from "../ui/signin/SignInForm";
import SignInHeader from "../ui/signin/SignInHeader";
import NetworkHeader from "../ui/signin/NetworkHeader";

const SigninPage = () => {
  return (
    <Container>
      <Box
        position="relative"
        flex={0.6}
        hideBelow="md"
        maxW={"708px"}
        maxH={"646px"}
        aspectRatio={354 / 323}
      >
        <NextImage src="/max.svg" alt="Maximise" fill />
      </Box>

      <VStack
        flex={{ base: 1, md: 0.4 }}
        maxW={{ mdToXl: "490px" }}
        maxH={{ mdToXl: "548.8px" }}
        h={{ base: "full" }}
        gap={"16px"}
      >
        <NetworkHeader />
        <SignInHeader />
        <SignInForm />
      </VStack>
    </Container>
  );
};

export default SigninPage;
