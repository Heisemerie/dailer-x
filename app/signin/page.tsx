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
        h="full"
        flex={0.6}
        hideBelow="md"
        aspectRatio={354 / 323}
      >
        <NextImage
          src="/max.svg"
          alt="Maximise"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>

      <VStack
        h="full"
        flex={0.4}
        justify="center"
        gap="6"
        padding="16px"
      >
        <SignInHeader />
        <SignInForm />
      </VStack>
    </Container>
  );
};

export default SigninPage;
