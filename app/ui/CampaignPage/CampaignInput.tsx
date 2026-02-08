import { HStack } from "@chakra-ui/react";
import CampaignNameInput from "./TextInput";
import SelectInput from "./SelectInput";

const data = [
  { label: "45 Seconds", value: "react" },
  { label: "1 Minute", value: "vue" },
  { label: "2 Minutes", value: "angular" },
];

const CampaignInput = () => {
  return (
    <HStack w={"828px"} h={"78px"} gap={"36px"}>
      <CampaignNameInput
        heading={"Campaign Name"}
        placeholder={"Sales Call List"}
      />
      <SelectInput
        heading={"Call Interval"}
        placeholder={"Select"}
        data={data}
      />
    </HStack>
  );
};

export default CampaignInput;
