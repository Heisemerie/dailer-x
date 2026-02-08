import { HStack } from "@chakra-ui/react";
import CampaignConfigs from "./ui/CampaignPage/CampaignConfigs";
import ConfigSteps from "./ui/CampaignPage/ConfigSteps";
import { JSX } from "react";

const CampaignPage = (): JSX.Element => {
  return (
    <HStack h={"553px"} w={"1130px"} align={"top"} gap={"24px"} margin={"auto"}>
      <ConfigSteps />
      <CampaignConfigs />
    </HStack>
  );
};

export default CampaignPage;
