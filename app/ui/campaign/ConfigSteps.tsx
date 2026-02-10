import { Steps } from "@chakra-ui/react";

const ConfigSteps = () => {
  return (
    <Steps.Root
      size={"xs"}
      colorPalette={"blue"}
      orientation="vertical"
      defaultStep={1}
      count={steps.length}
      h="260px"
      w={"206px"}
      backgroundColor={"#1B1B1D"}
      paddingX={"21px"}
      paddingY={"31px"}
      gap={"12px"}
      borderRadius={"12px"}
    >
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
    </Steps.Root>
  );
};

export default ConfigSteps;

const steps = [
  { title: "Configurations" },
  { title: "Upload File" },
  { title: "Final Reviews" },
];
