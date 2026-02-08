import SignInHeader from "../ui/SigninPage/SignInHeader";
import SignInForm from "../ui/SigninPage/SignInForm";
import { VStack } from "@chakra-ui/react";

const SigninPage = () => {
  return (
    <VStack w={"490px"} h={"548.8px"} gap={"15px"} marginX={"auto"}>
      <SignInHeader />
      <SignInForm />
    </VStack>
  );
};

export default SigninPage;
