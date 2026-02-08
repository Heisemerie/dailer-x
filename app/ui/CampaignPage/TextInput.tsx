import { Input, Text, VStack } from "@chakra-ui/react";

interface Props {
  heading: string;
  placeholder: string;
}

const CampaignNameInput = ({ heading, placeholder }: Props) => {
  return (
    <VStack w={"395px"} h={"78px"} alignItems={"flex-start"} gap={"8px"}>
      <Text
        h={"22px"}
        fontSize={"14px"}
        fontWeight={"400px"}
        lineHeight={"21.56px"}
        letterSpacing={"0px"}
      >
        {heading}
      </Text>
      <Input
        placeholder={placeholder}
        variant="subtle"
        bg={"#1C1D1F"}
        h={"48px"}
        gap={"10px"}
        paddingX={"13px"}
        paddingY={"20px"}
        borderRadius={"6px"}
      />
    </VStack>
  );
};

export default CampaignNameInput;
