import { Box, Text } from "@chakra-ui/react";

const TopHeader = () => {
  return (
    <Box
      h="20"
      backgroundColor={"#1C1D1F"}
      borderBottomColor={"#292929"}
      borderBottomWidth={"4px"}
      height={"90px"}
    >
      <Text
        fontFamily="'Nunito Sans Variable', sans-serif"
        lineHeight={"100%"}
        fontSize={"40px"}
        fontWeight={"900"}
        letterSpacing={"-2%"}
        fontStyle={"italic"}
        marginTop={"15px"}
        marginLeft={"40px"}
      >
        DailerX
      </Text>
    </Box>
  );
};

export default TopHeader;
