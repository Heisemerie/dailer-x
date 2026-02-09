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
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { PasswordInput } from "../../../components/ui/password-input";
import useSignIn from "../../hooks/useSignIn";
import { SignInData } from "../../lib/definitions";
import { GoogleIcon } from "./GoogleIcon";
import LinkText from "./LinkText";
import SeparatorText from "./SeparatorText";
import SignInButton from "./SignInButton";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>();

  const onSubmit = handleSubmit(async (data) => {
    const { data: user, error } = await useSignIn(data);
    redirect("/");
  });

  return (
    <Box w="full">
      <form onSubmit={onSubmit} style={{ width: "100%" }}>
        <Stack gap="3" align="flex-start" w="full">
          {/* Email Field */}
          <Field.Root invalid={!!errors.login} w="full">
            <Field.Label fontWeight="400" fontSize="sm" mb="1">
              Email Address/Username *
            </Field.Label>
            <Input
              {...register("login")}
              placeholder="Enter email address"
              h="45px"
              borderRadius="7px"
              borderWidth="2px"
              borderColor="#292929"
            />
            <Field.ErrorText>{errors.login?.message}</Field.ErrorText>
          </Field.Root>

          {/* Password Field */}
          <Field.Root invalid={!!errors.password} w="full">
            <Field.Label fontWeight="400" fontSize="sm" mb="1">
              Password *
            </Field.Label>
            <PasswordInput
              {...register("password")}
              placeholder="Enter password"
              h="45px"
              borderRadius="7px"
              borderWidth="2px"
              borderColor="#292929"
            />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>

          {/* Buttons Area */}
          <VStack gap="3" w="full" pt="1">
            <Box w="full" textAlign="right">
              <LinkText>Forgot Password?</LinkText>
            </Box>

            <SignInButton type="submit">Sign In</SignInButton>

            <SeparatorText />

            <SignInButton>
              <GoogleIcon w="20px" h="20px" />
              <Text fontSize="14px" fontWeight="600">
                Sign In With Google
              </Text>
            </SignInButton>

            <HStack alignItems="center" w="full" gap="1">
              <Text
                fontSize="16px"
                color="#8E9BAE"
                flex={2}
                textAlign={"right"}
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
