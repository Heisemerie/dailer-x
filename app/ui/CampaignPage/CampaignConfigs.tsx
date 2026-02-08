import { Box, Button, Separator, VStack } from "@chakra-ui/react";
import CampaignHeader from "./CampaignHeader";
import CampaignInput from "./CampaignInput";
import SelectInput from "./SelectInput";

const data = [
  { label: "45 Seconds", value: "react" },
  { label: "1 Minute", value: "vue" },
  { label: "2 Minutes", value: "angular" },
];

const CampaignConfigs = () => {
  return (
    <VStack
      h={"553px"}
      w={"900px"}
      backgroundColor={"#1B1B1D"}
      paddingY={"16px"}
      paddingX={"12px"}
      gap={"16px"}
      borderRadius={"12px"}
    >
      <CampaignHeader />
      <Box
        bg={"#101213"}
        w={"876px"}
        h={"406px"}
        borderRadius={"12px"}
        borderWidth={"1px"}
        borderColor={"#272729"}
        padding={"24px"}
        gap={"24px"}
      >
        <CampaignInput />
        <Separator w={"828px"} color={"#292929"} marginY={"16px"} />
        <SelectInput
          heading={"Select Agents"}
          placeholder={"Select"}
          data={data}
        />
      </Box>
      <Button
        w={"876px"}
        h={"50px"}
        gap={"6.47px"}
        borderRadius={"8px"}
        paddingY={"12.93px"}
        paddingX={"19.4px"}
        bg={"#8E9BAE"}
        color={"white"}
      >
        Continue
      </Button>
    </VStack>
  );
};

export default CampaignConfigs;
