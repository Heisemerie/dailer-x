import { Text, VStack } from "@chakra-ui/react";

const SignInHeader = () => {
  return (
    <VStack w="full" gap="1" textAlign="center">
      <Text
        fontWeight="700"
        fontSize={{ base: "24px", lg: "32px" }}
        lineHeight="1.2"
        letterSpacing="-2%"
      >
        Sign In
      </Text>
      <Text fontWeight="400" fontSize="14px" color="#8E9BAE">
        Enter your credentials to access your account.
      </Text>
    </VStack>
  );
};

export default SignInHeader;
