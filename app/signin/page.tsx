import { Box, VStack } from "@chakra-ui/react";
import NextImage from "next/image";
import Container from "../ui/SigninPage/Container";
import SignInForm from "../ui/SigninPage/SignInForm";
import SignInHeader from "../ui/SigninPage/SignInHeader";

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
        gap={"16px"}
      >
        <SignInHeader />
        <SignInForm />
      </VStack>
    </Container>
  );
};

export default SigninPage;
