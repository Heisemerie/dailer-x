import { HStack } from "@chakra-ui/react";
import ConfigSteps from "./ui/CampaignPage/ConfigSteps";
import CampaignConfigs from "./ui/CampaignPage/CampaignConfigs";

const page = () => {
  return (
    <HStack
      h={"553px"}
      w={"1130px"}
      align={"top"}
      gap={"24px"}
      marginY={"72px"}
      marginX={"auto"}
    >
      <ConfigSteps />
      <CampaignConfigs />
    </HStack>
  );
};

export default page;
