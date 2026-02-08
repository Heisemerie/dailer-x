"use client";

import {
  Box,
  Field,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../../components/ui/password-input";
import { GoogleIcon } from "./GoogleIcon";
import LinkText from "./LinkText";
import SignInButton from "./SignInButton";
import SeparatorText from "./SeparatorText";
import { SignInData } from "../../lib/definitions";
import { signInService } from "../../lib/actions";
import { redirect } from "next/navigation";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInData>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const response = await signInService.post<SignInData>(data);
      console.log(response);
      redirect("/");
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Box w={"full"}>
      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start">
          <Field.Root
            invalid={!!errors.login}
            h={"84px"}
            gap={"10px"}
            w={"490px"}
          >
            <Field.Label
              w={"170px"}
              h={"24px"}
              gap={"4px"}
              fontWeight={"400px"}
              lineHeight={"24px"}
              letterSpacing={"-0.11px"}
            >
              Email Address/Username *
            </Field.Label>
            <Input
              {...register("login")}
              placeholder="Enter email address"
              h={"50px"}
              borderRadius={"7px"}
              borderWidth={"2px"}
              borderColor={"#292929"}
            />
            <Field.ErrorText>{errors.login?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root
            invalid={!!errors.password}
            h={"84px"}
            gap={"10px"}
            w={"490px"}
          >
            <Field.Label
              w={"170px"}
              h={"24px"}
              gap={"4px"}
              fontWeight={"400px"}
              lineHeight={"24px"}
              letterSpacing={"-0.11px"}
            >
              Password *
            </Field.Label>
            <PasswordInput
              {...register("password")}
              placeholder="Enter password"
              h={"50px"}
              borderRadius={"7px"}
              borderWidth={"2px"}
              borderColor={"#292929"}
            />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>

          <VStack h={"94px"} gap={"20px"}>
            <LinkText textAlign="right">Forgot Password?</LinkText>
            <SignInButton type="submit">Sign In</SignInButton>
            <SeparatorText />
            <SignInButton>
              <GoogleIcon w={"23.24px"} h={"23.71px"} />
              <Text
                fontWeight={"600"}
                fontSize={"16.17px"}
                lineHeight={"23.71px"}
                letterSpacing={"0px"}
              >
                Sign In With Google
              </Text>
            </SignInButton>

            <HStack w={"288px"} h={"26px"} alignItems={"center"}>
              <Text
                fontWeight={"400"}
                fontSize={"16px"}
                lineHeight={"25.87px"}
                letterSpacing={"-0.11px"}
                color={"#8E9BAE"}
                flexShrink="0"
                marginLeft={"43.5px"}
              >
                Don’t have an account?
              </Text>
              <LinkText>Sign Up</LinkText>
            </HStack>
          </VStack>
        </Stack>
      </form>
    </Box>
  );
};

export default SignInForm;
