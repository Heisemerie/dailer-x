"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react";

interface Data {
  label: string;
  value: string;
}

interface Props {
  heading: string;
  placeholder: string;
  data: Data[];
}

const SelectInput = ({ heading, placeholder, data }: Props) => {
  const dataCollection = createListCollection({
    items: data,
  });

  return (
    <Select.Root
      collection={dataCollection}
      size="sm"
      width={"395px"}
      h={"78px"}
      gap={"8px"}
      variant={"subtle"}
    >
      <Select.HiddenSelect />
      <Select.Label>{heading}</Select.Label>
      <Select.Control>
        <Select.Trigger
          bg={"#1C1D1F"}
          h={"48px"}
          gap={"10px"}
          paddingX={"13px"}
          paddingY={"20px"}
          borderRadius={"6px"}
        >
          <Select.ValueText
            placeholder={placeholder}
            color={"#8E9BAE"}
            fontSize={"14px"}
            fontWeight={"400"}
            lineHeight={"21.56px"}
            letterSpacing={"0px"}
          />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content borderRadius={"8px"} bg={"#1C1D1F"} padding={"8px"}>
            {dataCollection.items.map((data) => (
              <Select.Item
                item={data}
                key={data.value}
                paddingY={"9px"}
                paddingX={"12px"}
                h={"37px"}
                gap={"10px"}
              >
                {data.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default SelectInput;
