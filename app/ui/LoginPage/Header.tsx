import { Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Text
        fontWeight={"700px"}
        fontStyle={"Bold"}
        fontSize={"40px"}
        lineHeight={"47.42px"}
        letterSpacing={"-2%"}
        w={"full"}
        h={"48px"}
        alignItems={"center"}
        textAlign={"center"}
        gap={"15px"}
      >
        Sign In
      </Text>
      <Text
        fontWeight={"400px"}
        fontSize={"16px"}
        lineHeight={"21.56px"}
        letterSpacing={"0px"}
        textAlign={"center"}
        color={"#8E9BAE"}
        w={"full"}
        h={"22px"}
        gap={"15px"}
      >
        Enter your credentials to access your account.
      </Text>
    </>
  );
};

export default Header;
