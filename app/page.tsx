import { HStack } from "@chakra-ui/react";
import CampaignConfigs from "./ui/campaign/CampaignConfigs";
import ConfigSteps from "./ui/campaign/ConfigSteps";
import { JSX } from "react";
import TopHeader from "./ui/campaign/TopHeader";
import Container from "./ui/campaign/Container";

const CampaignPage = (): JSX.Element => {
  return (
    <>
      <TopHeader />
      <Container>
        <HStack
          h={"553px"}
          w={"1130px"}
          align={"top"}
          gap={"24px"}
          margin={"auto"}
        >
          <ConfigSteps />
          <CampaignConfigs />
        </HStack>
      </Container>
    </>
  );
};

export default CampaignPage;
