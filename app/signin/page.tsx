import { VStack } from "@chakra-ui/react";
import Container from "../ui/signin/Container";
import MaximizeImage from "../ui/signin/MaximizeImage";
import NetworkHeader from "../ui/signin/NetworkHeader";
import SignInForm from "../ui/signin/SignInForm";
import SignInHeader from "../ui/signin/SignInHeader";

const SigninPage = () => {
  return (
    <Container>
      <MaximizeImage />
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
